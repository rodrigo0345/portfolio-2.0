<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

const props = defineProps<{ paused?: boolean }>();
const emit = defineEmits<{ enterGame: [rect: DOMRect] }>();
const containerRef = ref<HTMLElement | null>(null);

onMounted(() => {
    const el = containerRef.value!;
    let raf: number;
    let renderer: THREE.WebGLRenderer | null = null;
    let f22: THREE.Object3D | null = null;

    // ── Scene ──────────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        60,
        el.clientWidth / el.clientHeight,
        0.1,
        1000,
    );
    camera.position.z = 3;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearAlpha(0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    el.appendChild(renderer.domElement);

    const onResize = () => {
        camera.aspect = el.clientWidth / el.clientHeight;
        camera.updateProjectionMatrix();
        renderer!.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Lighting ───────────────────────────────────────────────────────────────
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.2));
    const goldLight = new THREE.PointLight(0xefcb68, 0.4, 8);
    goldLight.position.set(-2, 1, 2);
    scene.add(goldLight);

    // ── Grid floor ─────────────────────────────────────────────────────────────
    const grid = new THREE.GridHelper(4, 6, 0xefcb68, 0xefcb68);
    (grid.material as THREE.LineBasicMaterial).opacity = 0.02;
    (grid.material as THREE.LineBasicMaterial).transparent = true;
    grid.position.y = -0.8;
    scene.add(grid);

    // ── Radar pulse rings ──────────────────────────────────────────────────────
    const rings: THREE.Mesh[] = [];
    const ringTimers: number[] = [];
    const PULSE_DURATION = 6.0;
    const MAX_RADIUS = 4.0;

    for (let i = 0; i < 2; i++) {
        const mat = new THREE.MeshBasicMaterial({
            color: 0xefcb68,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide,
            depthWrite: false,
        });

        const ring = new THREE.Mesh(new THREE.RingGeometry(0.98, 1.0, 64), mat);
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = -0.79;
        scene.add(ring);
        rings.push(ring);

        ringTimers.push(i * (PULSE_DURATION / 2));
    }

    // ── F22 model ──────────────────────────────────────────────────────────────
    const planeTexture = new THREE.TextureLoader().load("f22.png");
    new OBJLoader().load("f22.obj", (obj) => {
        obj.traverse((c) => {
            if (c instanceof THREE.Mesh)
                c.material = new THREE.MeshStandardMaterial({
                    map: planeTexture,
                });
        });
        obj.scale.set(0.4, 0.4, 0.4);
        scene.add(obj);
        f22 = obj;
    });

    // ── Mouse tracking ─────────────────────────────────────────────────────────
    let mouseX = 0,
        mouseY = 0;
    let targetRX = 0,
        targetRY = 0;
    const onMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── W key → enter game ─────────────────────────────────────────────────────
    const onKeyDown = (e: KeyboardEvent) => {
        if ((e.key === "w" || e.key === "W") && !props.paused) {
            const rect = containerRef.value?.getBoundingClientRect();
            if (rect) emit("enterGame", rect);
        }
    };
    window.addEventListener("keydown", onKeyDown);

    // ── Animation ──────────────────────────────────────────────────────────────
    let prev = performance.now();

    const loop = () => {
        raf = requestAnimationFrame(loop);
        const now = performance.now();
        const dt = Math.min((now - prev) / 1000, 0.05);
        prev = now;

        // Radar rings
        for (let i = 0; i < rings.length; i++) {
            ringTimers[i] += dt;
            const t = (ringTimers[i] % PULSE_DURATION) / PULSE_DURATION;

            const s = Math.max(0.001, t * MAX_RADIUS);
            rings[i].scale.set(s, s, 1);

            const maxOpacity = 0.2;
            (rings[i].material as THREE.MeshBasicMaterial).opacity =
                t < 0.1 ? (t / 0.1) * maxOpacity : ((1 - t) / 0.9) * maxOpacity;
        }

        if (f22) {
            const inf = 0.8;
            targetRX += (mouseY * inf - targetRX) * 0.02;
            targetRY += (mouseX * inf - targetRY) * 0.02;
            const m = Math.PI / 12;
            targetRX = THREE.MathUtils.clamp(targetRX, -m, m);
            targetRY = THREE.MathUtils.clamp(targetRY, -m, m);

            f22.rotation.x += (targetRX - f22.rotation.x) * 0.02;
            f22.rotation.y += (targetRY - f22.rotation.y) * 0.02;

            const offset = new THREE.Vector3(0, 1.5, 1.5);
            camera.position.lerp(f22.position.clone().add(offset), 0.03);
            camera.lookAt(f22.position);
        }

        renderer!.render(scene, camera);
    };
    loop();
    (el as any).__cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("keydown", onKeyDown);
        renderer?.dispose();
        renderer?.domElement.remove();
        renderer = null;
        scene.clear();
    };
});

onBeforeUnmount(() => {
    (containerRef.value as any)?.__cleanup?.();
});
</script>

<template>
    <div ref="containerRef" class="showcase-canvas" />
</template>

<style scoped>
.showcase-canvas {
    width: 100%;
    height: 100%;
    display: block;
}
</style>
