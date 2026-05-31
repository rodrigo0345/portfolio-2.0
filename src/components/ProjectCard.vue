<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '@/data/projects'

const props = defineProps<{ project: Project }>()
const emit = defineEmits<{ open: [project: Project, rect: DOMRect] }>()

const cardRef = ref<HTMLElement | null>(null)

function handleOpen() {
  if (!props.project.detail) {
    if (props.project.link) window.open(props.project.link, '_blank')
    return
  }
  const rect = cardRef.value?.getBoundingClientRect()
  if (rect) emit('open', props.project, rect)
}

function openLink(e: MouseEvent) {
  e.stopPropagation()
  if (props.project.link) window.open(props.project.link, '_blank')
}
</script>

<template>
  <div
    ref="cardRef"
    tabindex="0"
    class="project-card"
    :class="{ 'has-detail': !!project.detail }"
    @click="handleOpen"
    @keydown.enter="handleOpen"
    role="button"
    :aria-label="`Open ${project.title}`"
  >
    <!-- Top: date + link -->
    <div class="flex items-start justify-between mb-3">
      <span class="date-label">{{ project.date }}</span>
      <svg
        v-if="project.link"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="link-arrow h-3.5 w-3.5 shrink-0 mt-0.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
        @click="openLink"
      >
        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"/>
      </svg>
    </div>

    <!-- Title + role -->
    <h2 class="card-title mb-1">{{ project.title }}</h2>
    <p class="role-label mb-3">{{ project.role }}</p>

    <!-- Description (clamped 3 lines) -->
    <p class="description-text line-clamp-3 mb-4" v-html="project.description"></p>

    <!-- Skills -->
    <div class="flex flex-wrap gap-1.5 mt-auto">
      <span v-for="skill in project.skills.slice(0, 5)" :key="skill" class="skill-badge">{{ skill }}</span>
      <span v-if="project.skills.length > 5" class="skill-badge opacity-50">+{{ project.skills.length - 5 }}</span>
    </div>

    <!-- Explore badge -->
    <div v-if="project.detail" class="explore-hint">
      <span class="explore-text">⬡ Explore Architecture</span>
    </div>

    <span class="accent-bar"></span>
  </div>
</template>

<style scoped>
.project-card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border-radius: 8px;
  background: rgba(22, 12, 40, 0.35);
  border: 1px solid rgba(174, 183, 179, 0.1);
  cursor: default;
  min-height: 220px;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
  outline: none;
}

.project-card:focus-visible {
  box-shadow: 0 0 0 2px rgba(239, 203, 104, 0.5);
}

.project-card.has-detail {
  cursor: pointer;
}

.project-card:hover {
  background: rgba(22, 12, 40, 0.7);
  border-color: rgba(239, 203, 104, 0.28);
  transform: translateY(-2px);
}

.accent-bar {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 2px;
  background: #EFCB68;
  opacity: 0;
  border-radius: 0 2px 2px 0;
  transition: opacity 0.25s ease;
}

.project-card:hover .accent-bar { opacity: 1; }

.date-label {
  color: #AEB7B3;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.card-title {
  color: #E1EFE6;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1.3;
  transition: color 0.2s;
}

.project-card:hover .card-title { color: #EFCB68; }

.link-arrow { color: #AEB7B3; transition: color 0.2s; }
.project-card:hover .link-arrow { color: #EFCB68; }

.role-label {
  color: #AEB7B3;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.04em;
}

.description-text {
  color: #AEB7B3;
  font-size: 0.8rem;
  line-height: 1.55;
}

.description-text :deep(strong) { color: #E1EFE6; font-weight: 500; }

.skill-badge {
  background: rgba(239, 203, 104, 0.07);
  border: 1px solid rgba(239, 203, 104, 0.2);
  color: #EFCB68;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  padding: 0.15rem 0.5rem;
  border-radius: 3px;
  font-weight: 500;
}

.explore-hint {
  margin-top: 1rem;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.project-card:hover .explore-hint {
  opacity: 1;
  transform: translateY(0);
}

.explore-text {
  color: #EFCB68;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
</style>
