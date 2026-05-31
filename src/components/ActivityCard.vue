<script setup lang="ts">
defineProps<{
  title: string
  description: string
  date: string
  role: string
  last?: boolean
  link?: string
}>()
</script>

<template>
  <div
    tabindex="0"
    class="activity-card group relative flex md:flex-row flex-col md:gap-0 gap-4 rounded-lg px-4 py-5 transition-all duration-300 hover:!opacity-100 lg:group-hover/card:opacity-40"
  >
    <p class="date-label text-xs pt-1 md:w-[105px] shrink-0 uppercase tracking-widest">{{ date }}</p>

    <div class="flex-1 pl-1 pr-2">
      <a :href="link" :target="link ? '_blank' : undefined" class="inline-flex items-center gap-2 group/link mb-1">
        <h2 class="card-title text-base font-semibold tracking-tight leading-snug">{{ title }}</h2>
        <svg
          v-if="link"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="link-arrow h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          aria-hidden="true"
        >
          <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"/>
        </svg>
      </a>
      <p class="role-label text-xs mb-3 tracking-wide font-mono">{{ role }}</p>
      <p class="description-text text-sm leading-relaxed font-light" v-html="description"></p>
      <div class="flex flex-wrap gap-2 mt-4">
        <slot></slot>
      </div>
    </div>

    <!-- gold left-border accent on hover -->
    <span class="accent-bar"></span>
  </div>
</template>

<style scoped>
.activity-card {
  position: relative;
  overflow: hidden;
}

.activity-card:hover {
  background: rgba(22, 12, 40, 0.6);
}

.accent-bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #EFCB68;
  opacity: 0;
  border-radius: 0 2px 2px 0;
  transition: opacity 0.25s ease;
}

.activity-card:hover .accent-bar {
  opacity: 1;
}

.date-label {
  color: #AEB7B3;
  font-family: 'JetBrains Mono', monospace;
}

.card-title {
  color: #E1EFE6;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  transition: color 0.2s;
}

.activity-card:hover .card-title {
  color: #EFCB68;
}

.link-arrow {
  color: #AEB7B3;
  transition: color 0.2s;
}

.activity-card:hover .link-arrow {
  color: #EFCB68;
}

.role-label {
  color: #AEB7B3;
  font-family: 'JetBrains Mono', monospace;
}

.description-text {
  color: #AEB7B3;
}
</style>
