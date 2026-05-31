<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import type { DiagramNode, DiagramEdge } from '@/data/diagrams'

const props = defineProps<{
  nodes: DiagramNode[]
  edges: DiagramEdge[]
  title?: string
}>()

const containerRef = ref<HTMLElement | null>(null)

const NODE_COLORS: Record<string, number> = {
  client:  0xe1efe6,
  gateway: 0xefcb68,
  service: 0x2a1a44,
  storage: 0x0d0820,
  infra:   0x3a3d40,
}

const NODE_BORDER: Record<string, number> = {
  client:  0xa0a8a4,
  gateway: 0xefcb68,
  service: 0xaeb7b3,
  storage: 0xefcb68,
  infra:   0x6a7070,
}

function makeLabel(text: string, sub: string | undefined, type: string): THREE.Sprite {
  const W = 512, H = sub ? 128 : 80
  const canvas = document.createElement('canvas')
  canvas.width = W; canvas.height = H
  const ctx = canvas.getContext('2d')!

  const mainColor = type === 'gateway' ? '#EFCB68'
    : type === 'client' ? '#E1EFE6'
    : '#AEB7B3'

  ctx.clearRect(0, 0, W, H)
  ctx.fillStyle = mainColor
  ctx.font = 'bold 36px "JetBrains Mono", monospace'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, W / 2, sub ? H * 0.38 : H / 2)

  if (sub) {
    ctx.fillStyle = 'rgba(174,183,179,0.75)'
    ctx.font = '22px "JetBrains Mono", monospace'
    ctx.fillText(sub.split('\n')[0], W / 2, H * 0.68)
    if (sub.includes('\n')) {
      ctx.fillText(sub.split('\n')[1], W / 2, H * 0.85)
    }
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  const mat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false })
  const sprite = new THREE.Sprite(mat)
  const aspect = W / H
  sprite.scale.set(aspect * 0.55, 0.55, 1)
  return sprite
}

function makeNode(node: DiagramNode): THREE.Group {
  const group = new THREE.Group()
  group.position.set(node.x, node.y, node.z)

  // Box
  const geo = new THREE.BoxGeometry(1.1, 0.52, 0.18)
  const mat = new THREE.MeshStandardMaterial({
    color: NODE_COLORS[node.type] ?? 0x2a1a44,
    transparent: true,
    opacity: node.type === 'storage' ? 0.85 : 0.9,
    roughness: 0.6,
    metalness: 0.2,
  })
  const mesh = new THREE.Mesh(geo, mat)
  group.add(mesh)

  // Wireframe edge highlight
  const edges = new THREE.EdgesGeometry(geo)
  const lineMat = new THREE.LineBasicMaterial({ color: NODE_BORDER[node.type] ?? 0xaeb7b3, transparent: true, opacity: 0.7 })
  const wireframe = new THREE.LineSegments(edges, lineMat)
  group.add(wireframe)

  // Label sprite (above box)
  const sprite = makeLabel(node.label, node.sublabel, node.type)
  sprite.position.set(0, 0.55, 0)
  group.add(sprite)

  return group
}

function makeDashedLine(start: THREE.Vector3, end: THREE.Vector3): THREE.Line {
  const points = [start, end]
  const geo = new THREE.BufferGeometry().setFromPoints(points)
  const mat = new THREE.LineDashedMaterial({
    color: 0xaeb7b3,
    dashSize: 0.12,
    gapSize: 0.08,
    transparent: true,
    opacity: 0.4,
  })
  const line = new THREE.Line(geo, mat)
  line.computeLineDistances()
  return line
}

function makeSolidLine(start: THREE.Vector3, end: THREE.Vector3): THREE.Line {
  const points = [start, end]
  const geo = new THREE.BufferGeometry().setFromPoints(points)
  const mat = new THREE.LineBasicMaterial({ color: 0xefcb68, transparent: true, opacity: 0.35 })
  return new THREE.Line(geo, mat)
}

let renderer: THREE.WebGLRenderer | null = null
let animFrameId: number

function buildScene() {
  const el = containerRef.value
  if (!el) return

  const w = el.clientWidth
  const h = el.clientHeight

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(50, w / h, 0.01, 100)

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(w, h)
  renderer.setPixelRatio(window.devicePixelRatio)
  el.appendChild(renderer.domElement)

  // Lighting
  scene.add(new THREE.AmbientLight(0xffffff, 0.6))
  const dirLight = new THREE.DirectionalLight(0xefcb68, 0.8)
  dirLight.position.set(3, 5, 3)
  scene.add(dirLight)
  const fillLight = new THREE.DirectionalLight(0xe1efe6, 0.3)
  fillLight.position.set(-3, -2, -2)
  scene.add(fillLight)

  // OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.06
  controls.enablePan = false
  controls.minDistance = 2
  controls.maxDistance = 14
  controls.autoRotate = true
  controls.autoRotateSpeed = 0.4

  // Build node map for edge lookup
  const nodeMap = new Map<string, { group: THREE.Group; data: DiagramNode }>()

  for (const node of props.nodes) {
    const group = makeNode(node)
    scene.add(group)
    nodeMap.set(node.id, { group, data: node })
  }

  // Edges
  for (const edge of props.edges) {
    const a = nodeMap.get(edge.from)
    const b = nodeMap.get(edge.to)
    if (!a || !b) continue

    const start = new THREE.Vector3(a.data.x, a.data.y, a.data.z)
    const end   = new THREE.Vector3(b.data.x, b.data.y, b.data.z)

    const line = edge.dashed ? makeDashedLine(start, end) : makeSolidLine(start, end)
    scene.add(line)
  }

  // Auto-fit camera to bounding sphere of all nodes
  const allPositions = props.nodes.map(n => new THREE.Vector3(n.x, n.y, n.z))
  const box = new THREE.Box3()
  allPositions.forEach(p => box.expandByPoint(p))
  const center = new THREE.Vector3()
  box.getCenter(center)
  const sphere = new THREE.Sphere()
  box.getBoundingSphere(sphere)
  camera.position.set(center.x, center.y, center.z + sphere.radius * 2.2)
  controls.target.copy(center)
  controls.update()

  // Resize handler
  const onResize = () => {
    if (!el || !renderer) return
    const nw = el.clientWidth, nh = el.clientHeight
    camera.aspect = nw / nh
    camera.updateProjectionMatrix()
    renderer.setSize(nw, nh)
  }
  window.addEventListener('resize', onResize)

  // Interaction: stop autoRotate on user drag
  renderer.domElement.addEventListener('pointerdown', () => { controls.autoRotate = false })

  const animate = () => {
    animFrameId = requestAnimationFrame(animate)
    controls.update()
    renderer!.render(scene, camera)
  }
  animate()

  // Cleanup stored for unmount
  ;(el as any).__cleanup = () => {
    cancelAnimationFrame(animFrameId)
    window.removeEventListener('resize', onResize)
    controls.dispose()
    renderer?.dispose()
    renderer?.domElement.remove()
    renderer = null
    scene.clear()
  }
}

onMounted(() => buildScene())

onBeforeUnmount(() => {
  const el = containerRef.value as any
  el?.__cleanup?.()
})

watch([() => props.nodes, () => props.edges], () => {
  const el = containerRef.value as any
  el?.__cleanup?.()
  renderer = null
  buildScene()
}, { deep: true })
</script>

<template>
  <div ref="containerRef" class="diagram-3d-container"></div>
</template>

<style scoped>
.diagram-3d-container {
  width: 100%;
  height: 100%;
  min-height: 280px;
  cursor: grab;
}
.diagram-3d-container:active {
  cursor: grabbing;
}
</style>
