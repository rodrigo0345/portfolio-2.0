
<script setup lang="ts">
const props = defineProps<{
    skill: string
}>()
</script>

<template>
    <div class="px-2 py-1 bg-sky-800/60 rounded-xl flex items-center justify-center">
        <p class="text-sky-400 text-sm font-semibold m-0 p-0 min-h-0 inline">{{ skill }}</p>
    </div>
</template>