<script setup lang="ts">
defineProps<{
  title: string
  issuer: string
  date: string
  link?: string
  skills: string[]
}>()
</script>

<template>
  <a
    :href="link"
    :target="link ? '_blank' : undefined"
    class="cert-card group flex flex-col gap-3 p-5 rounded-lg transition-all duration-300"
  >
    <div class="flex items-start justify-between gap-2">
      <div class="flex-1 min-w-0">
        <p class="cert-date font-mono text-xs tracking-widest uppercase mb-1">{{ date }}</p>
        <h3 class="cert-title text-sm font-semibold leading-snug">{{ title }}</h3>
        <p class="cert-issuer font-mono text-xs mt-1">{{ issuer }}</p>
      </div>
      <svg
        v-if="link"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="cert-arrow h-3.5 w-3.5 shrink-0 mt-0.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      >
        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"/>
      </svg>
    </div>

    <div class="flex flex-wrap gap-1.5 mt-auto">
      <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
    </div>

    <span class="cert-accent-bar"></span>
  </a>
</template>

<style scoped>
.cert-card {
  position: relative;
  overflow: hidden;
  background: rgba(22, 12, 40, 0.35);
  border: 1px solid rgba(174, 183, 179, 0.1);
  min-height: 140px;
  text-decoration: none;
}

.cert-card:hover {
  background: rgba(22, 12, 40, 0.65);
  border-color: rgba(239, 203, 104, 0.3);
}

.cert-date {
  color: #AEB7B3;
  letter-spacing: 0.12em;
}

.cert-title {
  color: #E1EFE6;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  transition: color 0.2s;
}

.cert-card:hover .cert-title {
  color: #EFCB68;
}

.cert-issuer {
  color: #AEB7B3;
}

.cert-arrow {
  color: #AEB7B3;
  flex-shrink: 0;
}

.cert-card:hover .cert-arrow {
  color: #EFCB68;
}

.skill-tag {
  background: rgba(239, 203, 104, 0.07);
  border: 1px solid rgba(239, 203, 104, 0.18);
  color: #EFCB68;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  padding: 0.15rem 0.5rem;
  border-radius: 3px;
  font-weight: 500;
}

.cert-accent-bar {
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

.cert-card:hover .cert-accent-bar {
  opacity: 1;
}
</style>
