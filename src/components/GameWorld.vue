<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

const props = defineProps<{ sourceRect: DOMRect }>();
const emit = defineEmits<{ exit: [] }>();

const overlayRef = ref<HTMLElement | null>(null);
const isExpanded = ref(false);
const isVisible = ref(false);
const isLoading = ref(true);
const hudSpeed = ref(0);
const hudThrottle = ref(0);
const hudBoostReady = ref(true);
const hudHealth = ref(100);

const enemyHUDs = ref<
    { id: number; x: number; y: number; hp: number; visible: boolean }[]
>([]);

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, lo: number, hi: number) =>
    Math.max(lo, Math.min(hi, v));

const C = {
    sand: [0.82, 0.75, 0.53],
    grass: [0.35, 0.58, 0.25],
    forest: [0.18, 0.43, 0.18],
    rock: [0.45, 0.42, 0.4],
    snow: [0.95, 0.95, 0.95],
    scorch: [0.15, 0.12, 0.1],
};

function lc(a: number[], b: number[], t: number) {
    t = clamp(t, 0, 1);
    return [
        a[0] + (b[0] - a[0]) * t,
        a[1] + (b[1] - a[1]) * t,
        a[2] + (b[2] - a[2]) * t,
    ];
}

const craters: { x: number; z: number; r: number; d: number }[] = [];
const MAX_CRATERS = 50;

function baseTH(x: number, z: number) {
    return Math.max(
        -0.6,
        (Math.sin(x * 0.055) * Math.cos(z * 0.07) * 5.5 +
            Math.sin(x * 0.18 + 1.7) * Math.sin(z * 0.15 + 0.9) * 3.0 +
            Math.sin(x * 0.4 + 0.3) * Math.cos(z * 0.36 + 1.5) * 1.4 +
            Math.abs(Math.sin(x * 0.11 + z * 0.09)) * 2.2 +
            Math.sin(x * 0.85) * Math.sin(z * 0.72) * 0.5) *
            0.85,
    );
}

function tH(x: number, z: number) {
    let h = baseTH(x, z);
    for (let i = 0; i < craters.length; i++) {
        const c = craters[i];
        const distSq = (x - c.x) * (x - c.x) + (z - c.z) * (z - c.z);
        if (distSq < c.r * c.r) {
            const dist = Math.sqrt(distSq);
            const influence = Math.cos((dist / c.r) * (Math.PI / 2));
            h -= c.d * influence * influence;
        }
    }
    return h;
}

function getColorForHeight(h: number, wx: number, wz: number) {
    for (let i = 0; i < craters.length; i++) {
        const c = craters[i];
        const distSq = (wx - c.x) * (wx - c.x) + (wz - c.z) * (wz - c.z);
        if (distSq < c.r * 0.65 * (c.r * 0.65)) return C.scorch;
    }
    return h > 5.0
        ? C.snow
        : h > 3.5
          ? lc(C.rock, C.snow, (h - 3.5) / 1.5)
          : h > 1.8
            ? lc(C.forest, C.rock, (h - 1.8) / 1.7)
            : h > 0.8
              ? lc(C.grass, C.forest, (h - 0.8) / 1.0)
              : h > 0.4
                ? lc(C.sand, C.grass, (h - 0.4) / 0.4)
                : C.sand;
}

function createParticleTex() {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, "rgba(255,255,255,1)");
        grad.addColorStop(0.3, "rgba(255,255,255,0.8)");
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
    }
    return new THREE.CanvasTexture(canvas);
}

let cleanup: (() => void) | null = null;

function buildScene(container: HTMLElement) {
    let raf: number;
    craters.length = 0;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x6ab2ff);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
        60,
        container.clientWidth / container.clientHeight,
        0.1,
        200,
    );

    const onResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x6ab2ff, 60, 150);

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const sun = new THREE.DirectionalLight(0xfff0dd, 1.5);
    sun.position.set(100, 150, 50);
    scene.add(sun);

    const WORLD = 320;
    const SEG = 80;
    const WATER_HEIGHT = 0.35;

    const waterGeo = new THREE.PlaneGeometry(WORLD, WORLD);
    waterGeo.rotateX(-Math.PI / 2);
    const waterMesh = new THREE.Mesh(
        waterGeo,
        new THREE.MeshStandardMaterial({
            color: 0x1177aa,
            transparent: true,
            opacity: 0.8,
            roughness: 0.1,
            metalness: 0.8,
        }),
    );
    scene.add(waterMesh);

    const terrGeo = new THREE.PlaneGeometry(WORLD, WORLD, SEG, SEG);
    terrGeo.rotateX(-Math.PI / 2);

    const pos = terrGeo.attributes.position;
    terrGeo.setAttribute(
        "color",
        new THREE.BufferAttribute(new Float32Array(pos.count * 3), 3),
    );

    const terrMesh = new THREE.Mesh(
        terrGeo,
        new THREE.MeshStandardMaterial({
            vertexColors: true,
            roughness: 0.9,
            metalness: 0.05,
        }),
    );
    scene.add(terrMesh);

    const treeGridSize = 40;
    const treeCount = treeGridSize * treeGridSize;
    const dummy = new THREE.Object3D();

    const trunkGeo = new THREE.CylinderGeometry(0.3, 0.5, 1.5, 5);
    trunkGeo.translate(0, 0.75, 0);
    const leavesGeo = new THREE.ConeGeometry(1.6, 4.0, 6);
    leavesGeo.translate(0, 2.5, 0);

    const trunkMesh = new THREE.InstancedMesh(
        trunkGeo,
        new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9 }),
        treeCount,
    );
    const leavesMesh = new THREE.InstancedMesh(
        leavesGeo,
        new THREE.MeshStandardMaterial({ color: 0x2e8b57, roughness: 0.8 }),
        treeCount,
    );

    trunkMesh.frustumCulled = false;
    leavesMesh.frustumCulled = false;
    scene.add(trunkMesh);
    scene.add(leavesMesh);

    let lastSnapX = -9999,
        lastSnapZ = -9999;
    const CELL = WORLD / SEG;

    function updateTrees(px: number, pz: number) {
        let treeIdx = 0;
        const halfGrid = treeGridSize / 2;
        const spacing = WORLD / treeGridSize;

        const treeSnapX = Math.round(px / spacing) * spacing;
        const treeSnapZ = Math.round(pz / spacing) * spacing;

        for (let ix = -halfGrid; ix < halfGrid; ix++) {
            for (let iz = -halfGrid; iz < halfGrid; iz++) {
                const tx = treeSnapX + ix * spacing;
                const tz = treeSnapZ + iz * spacing;

                const jx = Math.sin(tx * 12.9898 + tz * 78.233) * 3.5;
                const jz = Math.cos(tx * 39.346 + tz * 11.135) * 3.5;
                const wx = tx + jx;
                const wz = tz + jz;
                const h = tH(wx, wz);
                const chance = Math.abs(Math.sin(wx * 123.456 + wz * 321.654));

                let inCrater = false;
                for (let i = 0; i < craters.length; i++) {
                    if (
                        Math.hypot(wx - craters[i].x, wz - craters[i].z) <
                        craters[i].r
                    ) {
                        inCrater = true;
                        break;
                    }
                }

                if (
                    h > WATER_HEIGHT + 0.15 &&
                    h < 3.2 &&
                    chance > 0.4 &&
                    !inCrater
                ) {
                    const scale = 0.6 + chance * 0.6;
                    dummy.position.set(wx, h, wz);
                    dummy.scale.set(scale, scale, scale);
                    dummy.rotation.y = chance * Math.PI * 2;
                    dummy.updateMatrix();
                    trunkMesh.setMatrixAt(treeIdx, dummy.matrix);
                    leavesMesh.setMatrixAt(treeIdx, dummy.matrix);
                } else {
                    dummy.position.set(0, -10, 0);
                    dummy.scale.set(0, 0, 0);
                    dummy.updateMatrix();
                    trunkMesh.setMatrixAt(treeIdx, dummy.matrix);
                    leavesMesh.setMatrixAt(treeIdx, dummy.matrix);
                }
                treeIdx++;
            }
        }
        trunkMesh.instanceMatrix.needsUpdate = true;
        leavesMesh.instanceMatrix.needsUpdate = true;
    }

    function stepTerrain(px: number, pz: number) {
        const snapX = Math.round(px / CELL) * CELL;
        const snapZ = Math.round(pz / CELL) * CELL;
        if (snapX === lastSnapX && snapZ === lastSnapZ) return;
        lastSnapX = snapX;
        lastSnapZ = snapZ;

        terrMesh.position.set(snapX, 0, snapZ);
        waterMesh.position.set(snapX, WATER_HEIGHT, snapZ);

        const col = terrGeo.attributes.color;
        for (let i = 0; i < pos.count; i++) {
            const wx = pos.getX(i) + snapX;
            const wz = pos.getZ(i) + snapZ;
            const h = tH(wx, wz);
            pos.setY(i, h);
            const c = getColorForHeight(h, wx, wz);
            col.setXYZ(i, c[0], c[1], c[2]);
        }
        pos.needsUpdate = true;
        col.needsUpdate = true;
        terrGeo.computeVertexNormals();
        updateTrees(px, pz);
    }

    function applyCrater(cx: number, cz: number, r: number, d: number) {
        craters.push({ x: cx, z: cz, r, d });
        if (craters.length > MAX_CRATERS) craters.shift();

        const col = terrGeo.attributes.color;
        let updated = false;

        for (let i = 0; i < pos.count; i++) {
            const wx = pos.getX(i) + lastSnapX;
            const wz = pos.getZ(i) + lastSnapZ;

            if (Math.abs(wx - cx) < r + 1.5 && Math.abs(wz - cz) < r + 1.5) {
                const h = tH(wx, wz);
                pos.setY(i, h);
                const c = getColorForHeight(h, wx, wz);
                col.setXYZ(i, c[0], c[1], c[2]);
                updated = true;
            }
        }
        if (updated) {
            pos.needsUpdate = true;
            col.needsUpdate = true;
            terrGeo.computeVertexNormals();
            updateTrees(planeGroup.position.x, planeGroup.position.z);
        }
    }

    const CLOUD_COUNT = 150;
    const cloudGeo = new THREE.DodecahedronGeometry(8, 0);
    const cloudMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 1,
        flatShading: true,
        transparent: true,
        opacity: 0.85,
    });
    const cloudMesh = new THREE.InstancedMesh(cloudGeo, cloudMat, CLOUD_COUNT);
    cloudMesh.frustumCulled = false;
    scene.add(cloudMesh);

    const cloudOffsets: { x: number; y: number; z: number; s: number }[] = [];
    const CLOUD_RANGE = 400;
    for (let i = 0; i < CLOUD_COUNT; i++) {
        cloudOffsets.push({
            x: (Math.random() - 0.5) * CLOUD_RANGE,
            y: 45 + Math.random() * 40,
            z: (Math.random() - 0.5) * CLOUD_RANGE,
            s: 1 + Math.random() * 2.5,
        });
    }
    const cloudDummy = new THREE.Object3D();

    function stepClouds(px: number, pz: number) {
        const halfRange = CLOUD_RANGE / 2;
        for (let i = 0; i < CLOUD_COUNT; i++) {
            const off = cloudOffsets[i];
            let dx = (px - off.x) % CLOUD_RANGE;
            let dz = (pz - off.z) % CLOUD_RANGE;

            if (dx > halfRange) dx -= CLOUD_RANGE;
            if (dx < -halfRange) dx += CLOUD_RANGE;
            if (dz > halfRange) dz -= CLOUD_RANGE;
            if (dz < -halfRange) dz += CLOUD_RANGE;

            cloudDummy.position.set(px - dx, off.y, pz - dz);
            cloudDummy.scale.set(off.s, off.s * 0.5, off.s);
            cloudDummy.updateMatrix();
            cloudMesh.setMatrixAt(i, cloudDummy.matrix);
        }
        cloudMesh.instanceMatrix.needsUpdate = true;
    }

    const pTex = createParticleTex();

    // ── Player F22 model ────────────────────────────────────────────────────────
    const planeGroup = new THREE.Object3D();
    planeGroup.position.set(0, 15, 0);
    let playerHealth = 100;
    scene.add(planeGroup);
    let modelLoaded = false;
    let planeMeshBase: THREE.Object3D | null = null;

    const tex = new THREE.TextureLoader().load("f22.png");
    new OBJLoader().load("f22.obj", (obj) => {
        obj.traverse((child) => {
            if (child instanceof THREE.Mesh)
                child.material = new THREE.MeshStandardMaterial({
                    map: tex,
                    roughness: 0.4,
                    metalness: 0.55,
                });
        });
        obj.scale.set(0.7, 0.7, 0.7);
        obj.rotation.y = -Math.PI / 2;
        planeGroup.add(obj);
        planeMeshBase = obj;
        modelLoaded = true;
        isLoading.value = false;
        initEnemies();
    });

    // ── Enemies ───────────────────────────────────────────────────────────────
    const NUM_ENEMIES = 3;
    const enemyGroup = new THREE.Group();
    scene.add(enemyGroup);

    type Enemy = {
        obj: THREE.Object3D;
        hp: number;
        speed: number;
        active: boolean;
        q: THREE.Quaternion;
        bank: number;
        fireTimer: number;
    };
    const enemies: Enemy[] = [];

    function initEnemies() {
        if (!planeMeshBase) return;
        const enemyMat = new THREE.MeshStandardMaterial({
            color: 0xcc3333,
            roughness: 0.4,
            metalness: 0.55,
        });

        for (let i = 0; i < NUM_ENEMIES; i++) {
            const eObj = new THREE.Object3D();
            const meshClone = planeMeshBase.clone();
            meshClone.traverse((child) => {
                if (child instanceof THREE.Mesh) child.material = enemyMat;
            });
            eObj.add(meshClone);
            enemyGroup.add(eObj);

            enemies.push({
                obj: eObj,
                hp: 40,
                speed: 6,
                active: false,
                q: new THREE.Quaternion(),
                bank: 0,
                fireTimer: 0,
            });
            respawnEnemy(enemies[i]);
        }
    }

    function respawnEnemy(e: Enemy) {
        e.hp = 40;
        e.active = true;
        e.obj.visible = true;
        e.speed = MIN_SPD + Math.random() * (MAX_SPD * 0.7 - MIN_SPD);
        e.fireTimer = 0;

        const angle = Math.random() * Math.PI * 2;
        const dist = 70 + Math.random() * 50;
        e.obj.position.set(
            planeGroup.position.x + Math.cos(angle) * dist,
            30 + Math.random() * 20,
            planeGroup.position.z + Math.sin(angle) * dist,
        );
        e.q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle + Math.PI);
    }

    function stepEnemies(dt: number) {
        if (!modelLoaded) return;
        const Z_AXIS = new THREE.Vector3(0, 0, 1);
        const TURN_SPEED = 0.6;
        const huds = [];

        for (let i = 0; i < enemies.length; i++) {
            const e = enemies[i];
            if (!e.active) continue;

            let targetPos = planeGroup.position.clone();
            const distToPlayer = e.obj.position.distanceTo(planeGroup.position);

            if (distToPlayer < 40) {
                const away = e.obj.position
                    .clone()
                    .sub(planeGroup.position)
                    .normalize();
                targetPos.copy(e.obj.position).add(away.multiplyScalar(60));
                targetPos.y += 20;
            }

            const groundH = tH(e.obj.position.x, e.obj.position.z);
            if (e.obj.position.y < groundH + 15) {
                targetPos.y = e.obj.position.y + 40;
            }

            const dirToTarget = targetPos
                .clone()
                .sub(e.obj.position)
                .normalize();
            const targetQ = new THREE.Quaternion().setFromUnitVectors(
                Z_AXIS,
                dirToTarget,
            );
            e.q.slerp(targetQ, dt * TURN_SPEED);

            const localRight = new THREE.Vector3(1, 0, 0).applyQuaternion(e.q);
            const turnDot = dirToTarget.dot(localRight);
            const targetBank = turnDot * -Math.PI * 0.45;
            e.bank = lerp(e.bank, targetBank, dt * 4);

            e.obj.quaternion
                .copy(e.q)
                .multiply(
                    new THREE.Quaternion().setFromAxisAngle(Z_AXIS, e.bank),
                );

            const fwd = new THREE.Vector3(0, 0, 1).applyQuaternion(e.q);
            e.obj.position.addScaledVector(fwd, e.speed * dt);
            if (e.obj.position.y < Math.max(groundH, WATER_HEIGHT) + 1) {
                e.obj.position.y = Math.max(groundH, WATER_HEIGHT) + 1;
            }

            const toPlayer = planeGroup.position
                .clone()
                .sub(e.obj.position)
                .normalize();
            const dot = fwd.dot(toPlayer);

            if (
                distToPlayer > 30 &&
                distToPlayer < 120 &&
                dot > 0.98 &&
                e.fireTimer <= 0
            ) {
                const predictedPos = planeGroup.position
                    .clone()
                    .add(
                        new THREE.Vector3(
                            (Math.random() - 0.5) * 15,
                            (Math.random() - 0.5) * 15,
                            (Math.random() - 0.5) * 15,
                        ),
                    );
                fireBullet(true, e.obj.position, predictedPos, e.speed, e.q);
                e.fireTimer = 1.5 + Math.random() * 1.5;
            }
            if (e.fireTimer > 0) e.fireTimer -= dt;

            const screenPos = e.obj.position.clone();
            screenPos.y += 3;
            screenPos.project(camera);

            if (screenPos.z < 1) {
                const x = (screenPos.x * 0.5 + 0.5) * container.clientWidth;
                const y = (-(screenPos.y * 0.5) + 0.5) * container.clientHeight;
                const hpPercent = Math.max(0, (e.hp / 40) * 100);
                huds.push({ id: i, x, y, hp: hpPercent, visible: true });
            }
        }
        enemyHUDs.value = huds;
    }

    // ── Explosions ────────────────────────────────────────────────────────────
    const N_EXP_PARTS = 400;
    const expPos = new Float32Array(N_EXP_PARTS * 3);
    const expCol = new Float32Array(N_EXP_PARTS * 3);
    const expBaseCol = new Float32Array(N_EXP_PARTS * 3);
    const expVel = new Float32Array(N_EXP_PARTS * 3);
    const expLife = new Float32Array(N_EXP_PARTS);
    const expMax = new Float32Array(N_EXP_PARTS);

    for (let i = 0; i < N_EXP_PARTS * 3; i++) expPos[i] = -999999;

    const expGeo = new THREE.BufferGeometry();
    expGeo.setAttribute("position", new THREE.BufferAttribute(expPos, 3));
    expGeo.setAttribute("color", new THREE.BufferAttribute(expCol, 3));

    const expMat = new THREE.PointsMaterial({
        vertexColors: true,
        size: 3.5,
        transparent: true,
        opacity: 1.0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        map: pTex,
    });
    const explosions = new THREE.Points(expGeo, expMat);
    explosions.frustumCulled = false;
    scene.add(explosions);

    let nextExpIdx = 0;

    function spawnExplosion(
        hitPoint: THREE.Vector3,
        type: "dirt" | "water" | "air",
    ) {
        const particlesPerHit = 35;
        for (let i = 0; i < particlesPerHit; i++) {
            const idx = nextExpIdx;
            nextExpIdx = (nextExpIdx + 1) % N_EXP_PARTS;

            expPos[idx * 3] = hitPoint.x;
            expPos[idx * 3 + 1] = hitPoint.y;
            expPos[idx * 3 + 2] = hitPoint.z;

            let speed = 4.0 + Math.random() * 12.0;
            const angle = Math.random() * Math.PI * 2;
            let elevation = Math.random() * Math.PI * 0.5;

            if (type === "water") {
                speed = 4.0 + Math.random() * 8.0;
                elevation = Math.PI * 0.3 + Math.random() * Math.PI * 0.2;

                expBaseCol[idx * 3] = 0.2 + Math.random() * 0.3;
                expBaseCol[idx * 3 + 1] = 0.7 + Math.random() * 0.3;
                expBaseCol[idx * 3 + 2] = 1.0;
            } else if (type === "dirt") {
                expBaseCol[idx * 3] = 1.0;
                expBaseCol[idx * 3 + 1] = 0.6 + Math.random() * 0.4;
                expBaseCol[idx * 3 + 2] = 0.1;
            } else {
                speed = 8.0 + Math.random() * 15.0;
                elevation = (Math.random() - 0.5) * Math.PI;

                expBaseCol[idx * 3] = 1.0;
                expBaseCol[idx * 3 + 1] = 0.2 + Math.random() * 0.6;
                expBaseCol[idx * 3 + 2] = 0.0;
            }

            expVel[idx * 3] = Math.cos(angle) * Math.cos(elevation) * speed;
            expVel[idx * 3 + 1] = Math.sin(elevation) * speed;
            expVel[idx * 3 + 2] = Math.sin(angle) * Math.cos(elevation) * speed;

            expMax[idx] = 0.4 + Math.random() * 0.5;
            expLife[idx] = expMax[idx];
        }
    }

    function stepExplosions(dt: number) {
        for (let i = 0; i < N_EXP_PARTS; i++) {
            if (expLife[i] > 0) {
                expLife[i] -= dt;
                if (expLife[i] <= 0) {
                    expPos[i * 3] = -999999;
                    expPos[i * 3 + 1] = -999999;
                    expPos[i * 3 + 2] = -999999;
                } else {
                    expPos[i * 3] += expVel[i * 3] * dt;
                    expPos[i * 3 + 1] += expVel[i * 3 + 1] * dt;
                    expPos[i * 3 + 2] += expVel[i * 3 + 2] * dt;
                    expVel[i * 3 + 1] -= 15.0 * dt;

                    const t = expLife[i] / expMax[i];
                    expCol[i * 3] = expBaseCol[i * 3] * t;
                    expCol[i * 3 + 1] = expBaseCol[i * 3 + 1] * t;
                    expCol[i * 3 + 2] = expBaseCol[i * 3 + 2] * t;
                }
            }
        }
        expGeo.attributes.position.needsUpdate = true;
        expGeo.attributes.color.needsUpdate = true;
    }

    // ── Exhaust Flames ────────────────────────────────────────────────────────
    const N_FLAMES = 160;
    const fPos = new Float32Array(N_FLAMES * 3);
    const fCol = new Float32Array(N_FLAMES * 3);
    const fVel = new Float32Array(N_FLAMES * 3);
    const fLife = new Float32Array(N_FLAMES);
    const fMax = new Float32Array(N_FLAMES);

    const flameGeo = new THREE.BufferGeometry();
    flameGeo.setAttribute("position", new THREE.BufferAttribute(fPos, 3));
    flameGeo.setAttribute("color", new THREE.BufferAttribute(fCol, 3));
    const flameMat = new THREE.PointsMaterial({
        vertexColors: true,
        size: 1.5,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        map: pTex,
    });
    const flames = new THREE.Points(flameGeo, flameMat);
    flames.frustumCulled = false;
    scene.add(flames);

    function spawnFlameParticle(i: number) {
        const nx = i % 2 === 0 ? -0.08 : 0.08;
        const nozzleLocal = new THREE.Vector3(nx, 0.02, -1);
        const wp = nozzleLocal
            .applyQuaternion(planeGroup.quaternion)
            .add(planeGroup.position);
        fPos[i * 3] = wp.x;
        fPos[i * 3 + 1] = wp.y;
        fPos[i * 3 + 2] = wp.z;

        const speed = 0.6 + Math.random() * 0.8;
        const v = new THREE.Vector3(
            (Math.random() - 0.5) * 0.15,
            (Math.random() - 0.5) * 0.12,
            -speed,
        ).applyQuaternion(planeGroup.quaternion);
        fVel[i * 3] = v.x;
        fVel[i * 3 + 1] = v.y;
        fVel[i * 3 + 2] = v.z;

        fMax[i] = 0.04 + Math.random() * 0.06;
        fLife[i] = fMax[i];

        fCol[i * 3] = 0.97;
        fCol[i * 3 + 1] = 0.7 + Math.random() * 0.2;
        fCol[i * 3 + 2] = 0.03 + Math.random() * 0.06;
    }

    for (let i = 0; i < N_FLAMES; i++) {
        spawnFlameParticle(i);
        fLife[i] = Math.random() * fMax[i];
    }

    function stepFlames(dt: number) {
        for (let i = 0; i < N_FLAMES; i++) {
            fLife[i] -= dt;
            if (fLife[i] <= 0) {
                spawnFlameParticle(i);
                continue;
            }
            fPos[i * 3] += fVel[i * 3] * dt;
            fPos[i * 3 + 1] += fVel[i * 3 + 1] * dt;
            fPos[i * 3 + 2] += fVel[i * 3 + 2] * dt;

            const t = fLife[i] / fMax[i];
            fCol[i * 3 + 1] = t * 0.65;
            fCol[i * 3 + 2] = t * 0.05;
        }
        flameGeo.attributes.position.needsUpdate = true;
        flameGeo.attributes.color.needsUpdate = true;
    }

    // ── Weapons System ────────────────────────────────────────────────────────
    const MAX_BULLETS = 100;
    const bulletGeo = new THREE.CylinderGeometry(0.15, 0.15, 8, 8);
    bulletGeo.rotateX(Math.PI / 2);
    const bulletMat = new THREE.MeshBasicMaterial({ color: 0xff9900 });
    const bulletMesh = new THREE.InstancedMesh(
        bulletGeo,
        bulletMat,
        MAX_BULLETS,
    );
    bulletMesh.frustumCulled = false;
    scene.add(bulletMesh);

    type Bullet = {
        active: boolean;
        pos: THREE.Vector3;
        vel: THREE.Vector3;
        life: number;
        isEnemy: boolean;
    };
    const bullets: Bullet[] = Array.from({ length: MAX_BULLETS }, () => ({
        active: false,
        pos: new THREE.Vector3(),
        vel: new THREE.Vector3(),
        life: 0,
        isEnemy: false,
    }));

    const bulletDummy = new THREE.Object3D();
    bulletDummy.position.set(0, -999999, 0);
    bulletDummy.updateMatrix();
    for (let i = 0; i < MAX_BULLETS; i++)
        bulletMesh.setMatrixAt(i, bulletDummy.matrix);
    bulletMesh.instanceMatrix.needsUpdate = true;

    let isShooting = false;
    let fireTimer = 0;
    const FIRE_RATE = 0.08;
    let gunSide = 1;

    const raycaster = new THREE.Raycaster();
    const screenCenter = new THREE.Vector2(0, 0);

    function getTargetPoint() {
        raycaster.setFromCamera(screenCenter, camera);
        const intersects = raycaster.intersectObject(terrMesh);
        if (intersects.length > 0) return intersects[0].point;
        return raycaster.ray.at(500, new THREE.Vector3());
    }

    function fireBullet(
        isEnemy: boolean,
        sourcePos: THREE.Vector3,
        targetPos: THREE.Vector3,
        planeSpeed: number,
        q: THREE.Quaternion,
    ) {
        const b = bullets.find((b) => !b.active);
        if (!b) return;

        b.active = true;
        b.life = 2.0;
        b.isEnemy = isEnemy;

        const gunOffset = new THREE.Vector3(gunSide * 0.35, 0.05, 0.5);
        gunSide *= -1;

        b.pos.copy(gunOffset).applyQuaternion(q).add(sourcePos);
        b.vel
            .subVectors(targetPos, b.pos)
            .normalize()
            .multiplyScalar(planeSpeed + 200);
    }

    function stepBullets(dt: number) {
        const Z_AXIS = new THREE.Vector3(0, 0, 1);
        for (let i = 0; i < MAX_BULLETS; i++) {
            const b = bullets[i];
            if (b.active) {
                b.life -= dt;

                let hitTarget = false;

                if (b.isEnemy) {
                    if (b.pos.distanceTo(planeGroup.position) < 4.0) {
                        playerHealth -= 10;
                        hudHealth.value = Math.max(0, playerHealth);
                        hitTarget = true;
                        spawnExplosion(b.pos.clone(), "air");

                        if (playerHealth <= 0) {
                            spawnExplosion(planeGroup.position.clone(), "air");
                            setTimeout(() => emit("exit"), 500);
                            b.active = false;
                            continue;
                        }
                    }
                } else {
                    for (const e of enemies) {
                        if (
                            e.active &&
                            b.pos.distanceTo(e.obj.position) < 5.0
                        ) {
                            e.hp -= 20;
                            hitTarget = true;
                            spawnExplosion(b.pos.clone(), "air");

                            if (e.hp <= 0) {
                                e.active = false;
                                e.obj.visible = false;
                                spawnExplosion(e.obj.position.clone(), "air");
                                spawnExplosion(e.obj.position.clone(), "air");
                                setTimeout(() => respawnEnemy(e), 3000);
                            }
                            break;
                        }
                    }
                }

                const actualGroundH = tH(b.pos.x, b.pos.z);
                const hitWater =
                    actualGroundH < WATER_HEIGHT && b.pos.y <= WATER_HEIGHT;
                const hitGround =
                    actualGroundH >= WATER_HEIGHT && b.pos.y <= actualGroundH;

                if (b.life <= 0 || hitWater || hitGround || hitTarget) {
                    b.active = false;
                    bulletDummy.position.set(0, -999999, 0);
                    bulletDummy.updateMatrix();
                    bulletMesh.setMatrixAt(i, bulletDummy.matrix);

                    if (hitWater || hitGround) {
                        const hitPoint = b.pos.clone();
                        if (hitWater) hitPoint.y = WATER_HEIGHT;
                        if (hitGround) hitPoint.y = actualGroundH;

                        spawnExplosion(hitPoint, hitWater ? "water" : "dirt");
                        if (!hitWater)
                            applyCrater(hitPoint.x, hitPoint.z, 4.0, 1.5);
                    }
                } else {
                    b.pos.addScaledVector(b.vel, dt);
                    bulletDummy.position.copy(b.pos);
                    const dir = b.vel.clone().normalize();
                    bulletDummy.quaternion.setFromUnitVectors(Z_AXIS, dir);
                    bulletDummy.updateMatrix();
                    bulletMesh.setMatrixAt(i, bulletDummy.matrix);
                }
            }
        }
        bulletMesh.instanceMatrix.needsUpdate = true;
    }

    // ── Input & Listeners ────────────────────────────────────────────────────────
    const keys: Record<string, boolean> = {};
    let targetPitch = 0,
        targetRoll = 0;
    const pitch = { val: 0 },
        roll = { val: 0 },
        yaw = { val: 0 };
    let throttle = 0.4;

    const onKD = (e: KeyboardEvent) => {
        const key = e.key.toLowerCase();
        keys[key] = true;

        if (key === "escape" && !document.pointerLockElement) emit("exit");
        if (key === " " && !boostActive && boostCooldown <= 0) {
            boostActive = true;
            boostTimer = 0;
            boostDir = roll.val >= 0 ? 1 : -1;
        }
        if (
            key === "w" &&
            document.pointerLockElement !== renderer.domElement
        ) {
            renderer.domElement.requestPointerLock().catch(() => {});
        }
    };
    const onKU = (e: KeyboardEvent) => {
        keys[e.key.toLowerCase()] = false;
    };
    const onClick = () => {
        if (document.pointerLockElement !== renderer.domElement)
            renderer.domElement.requestPointerLock();
    };
    const onMD = (e: MouseEvent) => {
        if (
            e.button === 0 &&
            document.pointerLockElement === renderer.domElement
        )
            isShooting = true;
    };
    const onMU = (e: MouseEvent) => {
        if (e.button === 0) isShooting = false;
    };

    const onMM = (e: MouseEvent) => {
        if (document.pointerLockElement === renderer.domElement) {
            targetRoll += e.movementX * 0.003;
            targetPitch += e.movementY * 0.003;
        }
    };

    const onPointerLockChange = () => {
        if (document.pointerLockElement !== renderer.domElement) {
            isShooting = false;
            keys["c"] = false;
            emit("exit");
        }
    };

    window.addEventListener("keydown", onKD);
    window.addEventListener("keyup", onKU);
    window.addEventListener("click", onClick);
    window.addEventListener("mousedown", onMD);
    window.addEventListener("mouseup", onMU);
    window.addEventListener("mousemove", onMM);
    window.addEventListener("resize", onResize);
    document.addEventListener("pointerlockchange", onPointerLockChange);

    const MIN_SPD = 3,
        MAX_SPD = 12;
    const PITCH_R = 1.2,
        ROLL_R = 2.5,
        YAW_R = 0.55;
    const BOOST_DUR = 2.5,
        BOOST_CD = 2.5;

    const planeQ = new THREE.Quaternion();
    let speed = MIN_SPD,
        prevSpeed = MIN_SPD;
    let boostActive = false,
        boostTimer = 0,
        boostCooldown = 0,
        boostDir = 1;
    let prevRearView = false;

    const X = new THREE.Vector3(1, 0, 0),
        Y = new THREE.Vector3(0, 1, 0),
        Z = new THREE.Vector3(0, 0, 1);
    camera.position.set(0, 15, -6);
    let prevTime = performance.now();

    const loop = () => {
        raf = requestAnimationFrame(loop);
        const now = performance.now();
        const dt = clamp((now - prevTime) / 1000, 0, 0.05);
        prevTime = now;

        const W = keys["w"],
            S = keys["s"];
        if (W) throttle = Math.min(1.0, throttle + 0.5 * 0.016);
        else if (S) throttle = Math.max(0.0, throttle - 0.5 * 0.016);

        targetRoll = lerp(targetRoll, 0, 0.04);
        targetPitch = lerp(targetPitch, 0, 0.04);
        targetRoll = clamp(targetRoll, -1, 1);
        targetPitch = clamp(targetPitch, -1, 1);

        const kbPitch = keys["arrowup"] ? -1 : keys["arrowdown"] ? 1 : 0;
        const kbRoll = keys["arrowleft"] ? -1 : keys["arrowright"] ? 1 : 0;

        pitch.val = lerp(pitch.val, clamp(kbPitch + targetPitch, -1, 1), 0.1);
        roll.val = lerp(roll.val, clamp(kbRoll + targetRoll, -1, 1), 0.1);
        yaw.val = lerp(yaw.val, keys["a"] ? 1 : keys["d"] ? -1 : 0, 0.1);

        if (!modelLoaded) {
            renderer.render(scene, camera);
            return;
        }

        const targetSpeed = boostActive
            ? MAX_SPD * 1.5
            : MIN_SPD + throttle * (MAX_SPD - MIN_SPD);
        prevSpeed = speed;
        speed = lerp(speed, targetSpeed, dt * (boostActive ? 5 : 2));
        const accel = dt > 0 ? (speed - prevSpeed) / dt : 0;

        const eff = clamp(speed / MIN_SPD, 0, 1);
        planeQ
            .multiply(
                new THREE.Quaternion().setFromAxisAngle(
                    Y,
                    yaw.val * YAW_R * dt * eff,
                ),
            )
            .multiply(
                new THREE.Quaternion().setFromAxisAngle(
                    X,
                    pitch.val * PITCH_R * dt * eff,
                ),
            )
            .multiply(
                new THREE.Quaternion().setFromAxisAngle(
                    Z,
                    roll.val * ROLL_R * dt * eff,
                ),
            )
            .normalize();

        if (boostActive) {
            boostTimer += dt;
            if (boostTimer >= BOOST_DUR) {
                boostActive = false;
                boostCooldown = BOOST_CD;
            }
            planeQ.multiply(
                new THREE.Quaternion().setFromAxisAngle(
                    Z,
                    ((Math.PI * 4) / BOOST_DUR) * dt * boostDir,
                ),
            );
        }
        if (boostCooldown > 0) boostCooldown -= dt;

        const inputAmt =
            Math.abs(pitch.val) + Math.abs(roll.val) + Math.abs(yaw.val);
        if (inputAmt < 0.05) {
            const t = now * 0.001;
            planeQ
                .multiply(
                    new THREE.Quaternion().setFromAxisAngle(
                        X,
                        Math.sin(t * 0.5) * 0.004 * dt * 60,
                    ),
                )
                .multiply(
                    new THREE.Quaternion().setFromAxisAngle(
                        Z,
                        Math.sin(t * 0.7) * 0.006 * dt * 60,
                    ),
                )
                .normalize();
        }

        const fwd = new THREE.Vector3(0, 0, 1).applyQuaternion(planeQ);
        planeGroup.position.addScaledVector(fwd, speed * dt);

        const currentGround = tH(planeGroup.position.x, planeGroup.position.z);
        const currentSurface = Math.max(currentGround, WATER_HEIGHT);

        if (planeGroup.position.y < currentSurface + 0.2) {
            emit("exit");
            return;
        }

        planeGroup.position.y = Math.max(
            planeGroup.position.y,
            currentSurface + 0.5,
        );
        planeGroup.quaternion.copy(planeQ);

        stepTerrain(planeGroup.position.x, planeGroup.position.z);
        stepClouds(planeGroup.position.x, planeGroup.position.z);
        stepEnemies(dt);

        const isRearView = keys["c"];

        if (isShooting && fireTimer <= 0) {
            let targetPoint;
            if (!isRearView) {
                targetPoint = getTargetPoint();
            } else {
                targetPoint = planeGroup.position
                    .clone()
                    .add(new THREE.Vector3(0, 0, 500).applyQuaternion(planeQ));
            }
            fireBullet(false, planeGroup.position, targetPoint, speed, planeQ);
            fireTimer = FIRE_RATE;
        }
        if (fireTimer > 0) fireTimer -= dt;
        stepBullets(dt);

        // ── Camera Update ────────────────────────────────────────────────────────
        const zPull = clamp(-accel * 0.055, -1.8, 0.4);
        let targetCamPos = planeGroup.position.clone();

        if (isRearView) {
            const camLocalOffset = new THREE.Vector3(0, 1.6, 6.0 - zPull);
            targetCamPos.add(camLocalOffset.applyQuaternion(planeQ));

            if (!prevRearView) camera.position.copy(targetCamPos);
            else camera.position.lerp(targetCamPos, clamp(dt * 15, 0, 1));

            const lookAt = planeGroup.position
                .clone()
                .add(new THREE.Vector3(0, 0.2, -100).applyQuaternion(planeQ));
            camera.lookAt(lookAt);
        } else {
            const camLocalOffset = new THREE.Vector3(0, 1.6, -(4.0 + zPull));
            targetCamPos.add(camLocalOffset.applyQuaternion(planeQ));

            const camGround = tH(targetCamPos.x, targetCamPos.z);
            const camSurface = Math.max(camGround, WATER_HEIGHT);
            targetCamPos.y = Math.max(targetCamPos.y, camSurface + 1.2);

            if (prevRearView) camera.position.copy(targetCamPos);
            else camera.position.lerp(targetCamPos, clamp(dt * 7, 0, 1));

            const lookAt = planeGroup.position
                .clone()
                .add(new THREE.Vector3(0, 0.2, 4).applyQuaternion(planeQ));
            camera.lookAt(lookAt);
        }
        prevRearView = isRearView;

        const baseFov = 45;
        const maxFov = 75;
        const targetFov = boostActive ? maxFov : baseFov + throttle * 15;
        camera.fov = lerp(camera.fov, targetFov, dt * 4);
        camera.updateProjectionMatrix();

        flameMat.size = 1.0 + (boostActive ? 1.0 : throttle) * 0.8;

        hudSpeed.value = Math.round(speed * 22);
        hudThrottle.value = Math.round(throttle * 100);
        hudBoostReady.value = !boostActive && boostCooldown <= 0;

        renderer.render(scene, camera);
    };
    loop();

    cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("keydown", onKD);
        window.removeEventListener("keyup", onKU);
        window.removeEventListener("click", onClick);
        window.removeEventListener("mousedown", onMD);
        window.removeEventListener("mouseup", onMU);
        window.removeEventListener("mousemove", onMM);
        window.removeEventListener("resize", onResize);
        document.removeEventListener("pointerlockchange", onPointerLockChange);

        document.exitPointerLock();
        renderer.dispose();
        renderer.domElement.remove();
        scene.clear();
        cleanup = null;
    };
}

onMounted(async () => {
    await nextTick();
    requestAnimationFrame(() => {
        isExpanded.value = true;
        setTimeout(() => {
            isVisible.value = true;
            buildScene(overlayRef.value!);
        }, 430);
    });
});
onBeforeUnmount(() => {
    cleanup?.();
});
</script>

<template>
    <Teleport to="body">
        <div
            ref="overlayRef"
            class="game-overlay"
            :class="{ expanded: isExpanded }"
            :style="
                !isExpanded
                    ? {
                          top: props.sourceRect.top + 'px',
                          left: props.sourceRect.left + 'px',
                          width: props.sourceRect.width + 'px',
                          height: props.sourceRect.height + 'px',
                          borderRadius: '12px',
                      }
                    : {}
            "
        >
            <Transition name="fade">
                <div v-if="isLoading" class="loading-screen">
                    <div class="radar"></div>
                    <span class="loading-text">INITIALIZING AVIONICS</span>
                </div>
            </Transition>

            <Transition name="hud">
                <div v-if="isVisible && !isLoading" class="hud-container">
                    <div class="crosshair">
                        <div class="crosshair-center"></div>
                    </div>

                    <div
                        v-for="eh in enemyHUDs"
                        :key="eh.id"
                        class="enemy-hp-bar"
                        :style="{ left: eh.x + 'px', top: eh.y + 'px' }"
                    >
                        <div class="fill" :style="{ width: eh.hp + '%' }"></div>
                    </div>

                    <div class="hud">
                        <div class="hud-spd">
                            <span class="lbl">SPD</span>
                            <span
                                class="val"
                                :class="{ hot: hudThrottle > 75 }"
                                >{{ hudSpeed }}</span
                            >
                            <span class="unit">kn</span>
                        </div>
                        <div class="hud-bar-row">
                            <span class="lbl">HP</span>
                            <div class="bar">
                                <div
                                    class="fill hp"
                                    :style="{ width: hudHealth + '%' }"
                                ></div>
                            </div>
                        </div>
                        <div class="hud-bar-row">
                            <span class="lbl">THR</span>
                            <div class="bar">
                                <div
                                    class="fill"
                                    :style="{ width: hudThrottle + '%' }"
                                ></div>
                            </div>
                        </div>
                        <div class="hud-bar-row">
                            <span class="lbl" :class="{ ready: hudBoostReady }"
                                >BST</span
                            >
                            <div class="bar">
                                <div
                                    class="fill boost"
                                    :class="{ ready: hudBoostReady }"
                                ></div>
                            </div>
                        </div>
                        <p class="keys">
                            L-CLICK SHOOT · MOUSE STEER · A/D YAW · C REAR VIEW
                            · W/S THR · SPC BOOST · ESC EXIT
                        </p>
                    </div>
                </div>
            </Transition>
        </div>
    </Teleport>
</template>

<style scoped>
.game-overlay {
    position: fixed;
    z-index: 900;
    background: #6ab2ff;
    overflow: hidden;
    transition:
        top 0.42s cubic-bezier(0.16, 1, 0.3, 1),
        left 0.42s cubic-bezier(0.16, 1, 0.3, 1),
        width 0.42s cubic-bezier(0.16, 1, 0.3, 1),
        height 0.42s cubic-bezier(0.16, 1, 0.3, 1),
        border-radius 0.42s cubic-bezier(0.16, 1, 0.3, 1);
}
.game-overlay.expanded {
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    border-radius: 0 !important;
}

.loading-screen {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000411;
    z-index: 50;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.radar {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid rgba(239, 203, 104, 0.3);
    overflow: hidden;
}
.radar::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    background: linear-gradient(
        45deg,
        rgba(239, 203, 104, 0) 0%,
        rgba(239, 203, 104, 0.8) 100%
    );
    transform-origin: 0% 0%;
    animation: radar-spin 1.5s linear infinite;
}
.loading-text {
    margin-top: 1.2rem;
    color: #efcb68;
    font:
        600 0.65rem "JetBrains Mono",
        monospace;
    letter-spacing: 0.25em;
    animation: pulse 1.5s ease-in-out infinite;
}
@keyframes radar-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes pulse {
    50% {
        opacity: 0.4;
    }
}
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-leave-to {
    opacity: 0;
}

.hud-container {
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
}
.crosshair {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    opacity: 0.6;
}
.crosshair::before,
.crosshair::after {
    content: "";
    position: absolute;
    background: #efcb68;
}
.crosshair::before {
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    transform: translateY(-50%);
}
.crosshair::after {
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
    transform: translateX(-50%);
}
.crosshair-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    background: transparent;
    border: 1px solid #efcb68;
    border-radius: 50%;
    z-index: 10;
}
.enemy-hp-bar {
    position: absolute;
    width: 30px;
    height: 3px;
    background: rgba(0, 0, 0, 0.5);
    transform: translate(-50%, -50%);
    border: 1px solid rgba(0, 0, 0, 0.8);
}
.enemy-hp-bar .fill {
    height: 100%;
    background: #cc3333;
    transition: width 0.1s;
}
.hud {
    position: absolute;
    top: 1.4rem;
    right: 1.6rem;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.2rem;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}
.hud-spd {
    display: flex;
    align-items: baseline;
    gap: 0.35rem;
}
.lbl {
    font:
        600 0.57rem "JetBrains Mono",
        monospace;
    color: #ffffff;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.8;
}
.lbl.ready {
    color: #efcb68;
    opacity: 1;
}
.val {
    font:
        700 1.55rem "JetBrains Mono",
        monospace;
    color: #efcb68;
    line-height: 1;
    letter-spacing: -0.02em;
    transition: color 0.2s;
}
.val.hot {
    color: #fff8b0;
    text-shadow:
        0 0 10px #efcb68,
        0 1px 4px rgba(0, 0, 0, 0.5);
}
.unit {
    font:
        0.58rem "JetBrains Mono",
        monospace;
    color: #ffffff;
    opacity: 0.6;
}
.hud-bar-row {
    display: flex;
    align-items: center;
    gap: 0.45rem;
}
.bar {
    width: 76px;
    height: 3px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    overflow: hidden;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
}
.fill {
    height: 100%;
    background: #efcb68;
    border-radius: 2px;
    transition: width 0.08s;
}
.fill.hp {
    background: #ff5555;
}
.fill.boost {
    width: 100%;
    background: rgba(255, 255, 255, 0.4);
}
.fill.boost.ready {
    background: #efcb68;
}
.keys {
    font:
        0.5rem "JetBrains Mono",
        monospace;
    color: #ffffff;
    opacity: 0.5;
    letter-spacing: 0.05em;
    margin-top: 0.4rem;
    text-align: right;
}
.hud-enter-active {
    transition: opacity 0.5s ease 0.1s;
}
.hud-enter-from {
    opacity: 0;
}
</style>
