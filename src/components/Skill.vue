<script setup lang="ts">
const props = defineProps<{
  skill: string;
}>();
</script>

<template>
  <div
    class="px-2 py-1 bg-gradient-to-br from-sky-800/60 to-sky-900/80 rounded-xl flex items-center justify-center"
  >
    <p
      class="flex items-center gap-1 text-sky-300 text-sm font-semibold m-0 px-1 min-h-0"
    >
      <slot></slot>
      {{ skill }}
    </p>
  </div>
</template>
