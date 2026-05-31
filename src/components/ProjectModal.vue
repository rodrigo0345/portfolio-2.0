<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onBeforeUnmount, computed } from 'vue'
import type { Project } from '@/data/projects'
import ThreeDDiagram from './ThreeDDiagram.vue'
import { diagrams } from '@/data/diagrams'

const props = defineProps<{
  project: Project | null
  sourceRect: DOMRect | null
}>()

const emit = defineEmits<{ close: [] }>()

const isExpanded = ref(false)
const isContentVisible = ref(false)

const diagramData = computed(() => {
  const id = props.project?.detail?.diagramId
  return id ? diagrams[id] ?? null : null
})

watch(() => props.project, async (val) => {
  if (val && props.sourceRect) {
    isExpanded.value = false
    isContentVisible.value = false
    await nextTick()
    requestAnimationFrame(() => {
      isExpanded.value = true
      setTimeout(() => { isContentVisible.value = true }, 320)
    })
  }
})

function close() {
  isContentVisible.value = false
  isExpanded.value = false
  setTimeout(() => emit('close'), 460)
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <Teleport to="body">
    <div
      v-if="project"
      class="modal-overlay"
      :class="{ expanded: isExpanded }"
      :style="!isExpanded && sourceRect ? {
        top:    sourceRect.top    + 'px',
        left:   sourceRect.left   + 'px',
        width:  sourceRect.width  + 'px',
        height: sourceRect.height + 'px',
        borderRadius: '8px',
      } : {}"
    >
      <div class="modal-content" :class="{ visible: isContentVisible }">

        <!-- Header bar -->
        <div class="modal-header">
          <div class="min-w-0 flex-1">
            <h2 class="modal-title">{{ project.title }}</h2>
            <p class="modal-meta">{{ project.role }} · {{ project.date }}</p>
          </div>
          <div class="flex items-center gap-4 flex-shrink-0">
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="modal-link"
              @click.stop
            >
              GitHub
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3">
                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"/>
              </svg>
            </a>
            <button class="close-btn" @click="close" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="modal-divider"></div>

        <!-- Body: left info + right 3D diagram -->
        <div class="modal-body">

          <!-- Left panel -->
          <div class="modal-left">
            <p class="modal-description" v-html="project.description"></p>

            <div v-if="project.detail?.keyPoints?.length" class="mt-6">
              <p class="section-label mb-3">Architecture Notes</p>
              <ul class="key-points">
                <li
                  v-for="(point, i) in project.detail.keyPoints.slice(0, 4)"
                  :key="i"
                  class="key-point"
                >
                  <span class="key-point-marker">▸</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-6">
              <p class="section-label mb-3">Tech Stack</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="skill in project.skills" :key="skill" class="skill-badge">{{ skill }}</span>
              </div>
            </div>
          </div>

          <!-- Right: 3D diagram -->
          <div class="modal-right">
            <div class="diagram-header">
              <p class="section-label">{{ diagramData?.title ?? 'Architecture' }}</p>
              <p class="diagram-hint">drag to rotate · scroll to zoom</p>
            </div>
            <div class="diagram-wrapper">
              <ThreeDDiagram
                v-if="diagramData && isContentVisible"
                :nodes="diagramData.nodes"
                :edges="diagramData.edges"
                :title="diagramData.title"
              />
              <div v-else-if="!diagramData" class="no-diagram">
                <p class="text-ash font-mono text-sm">No diagram available.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  z-index: 1000;
  background: #0b0618;
  overflow: hidden;
  transition:
    top    0.46s cubic-bezier(0.16, 1, 0.3, 1),
    left   0.46s cubic-bezier(0.16, 1, 0.3, 1),
    width  0.46s cubic-bezier(0.16, 1, 0.3, 1),
    height 0.46s cubic-bezier(0.16, 1, 0.3, 1),
    border-radius 0.46s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-overlay.expanded {
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  border-radius: 0 !important;
}

.modal-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.28s ease;
  overflow: hidden;
}

.modal-content.visible { opacity: 1; }

/* ── Header ── */
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.5rem 2.5rem 1.25rem;
  flex-shrink: 0;
}

.modal-title {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: #E1EFE6;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.modal-meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: #AEB7B3;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 0.2rem;
}

.modal-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: #EFCB68;
  opacity: 0.65;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  transition: opacity 0.2s;
}

.modal-link:hover { opacity: 1; }

.close-btn {
  color: #AEB7B3;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.35rem;
  border-radius: 4px;
  line-height: 0;
  transition: color 0.2s, background 0.2s;
}
.close-btn:hover {
  color: #E1EFE6;
  background: rgba(239, 203, 104, 0.08);
}

.modal-divider {
  height: 1px;
  background: rgba(174, 183, 179, 0.1);
  flex-shrink: 0;
  margin: 0 2.5rem;
}

/* ── Body ── */
.modal-body {
  display: grid;
  grid-template-columns: 38% 62%;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

@media (max-width: 860px) {
  .modal-body { grid-template-columns: 1fr; overflow-y: auto; }
}

/* ── Left Panel ── */
.modal-left {
  padding: 1.75rem 2rem 1.75rem 2.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(174, 183, 179, 0.08);
}

.modal-description {
  color: #AEB7B3;
  font-size: 0.85rem;
  line-height: 1.7;
}

.modal-description :deep(strong) {
  color: #E1EFE6;
  font-weight: 600;
}

.section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  font-weight: 600;
  color: #EFCB68;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  opacity: 0.85;
}

.key-points {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.key-point {
  display: flex;
  gap: 0.6rem;
  font-size: 0.78rem;
  color: #AEB7B3;
  line-height: 1.55;
}

.key-point-marker {
  color: #EFCB68;
  flex-shrink: 0;
  font-size: 0.7rem;
  margin-top: 0.2rem;
}

.skill-badge {
  background: rgba(239, 203, 104, 0.07);
  border: 1px solid rgba(239, 203, 104, 0.2);
  color: #EFCB68;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  font-weight: 500;
}

/* ── Right Panel ── */
.modal-right {
  display: flex;
  flex-direction: column;
  padding: 1.75rem 2rem 1.75rem 1.75rem;
  overflow: hidden;
}

.diagram-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  flex-shrink: 0;
}

.diagram-hint {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  color: #AEB7B3;
  opacity: 0.45;
  letter-spacing: 0.06em;
}

.diagram-wrapper {
  flex: 1;
  min-height: 0;
  border: 1px solid rgba(174, 183, 179, 0.08);
  border-radius: 8px;
  background: rgba(11, 6, 24, 0.6);
  overflow: hidden;
  position: relative;
}

.no-diagram {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
