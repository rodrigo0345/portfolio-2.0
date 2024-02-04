
<script setup lang="ts">
const props = defineProps<{
    skill: string
}>()
</script>

<template>
    <div class="px-2 py-1 bg-gradient-to-br from-sky-800/60 to-sky-900/80 rounded-xl flex items-center justify-center">
        <p class="text-sky-300 text-sm font-semibold m-0 p-0 min-h-0 inline">{{ skill }}</p>
    </div>
</template>