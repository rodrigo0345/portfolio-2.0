<script setup lang="ts">
defineProps<{ skill: string }>()
</script>

<template>
  <span class="skill-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-xs font-medium tracking-wide">
    <slot></slot>
    {{ skill }}
  </span>
</template>

<style scoped>
.skill-badge {
  background: rgba(239, 203, 104, 0.07);
  border: 1px solid rgba(239, 203, 104, 0.22);
  color: #EFCB68;
  font-family: 'JetBrains Mono', monospace;
  transition: background 0.2s, border-color 0.2s;
}
.skill-badge:hover {
  background: rgba(239, 203, 104, 0.14);
  border-color: rgba(239, 203, 104, 0.4);
}
</style>
