<script setup lang="ts">
const props = defineProps<{
    title: string
    description: string
    date: string
    role: string
    last?: boolean
}>()
</script>

<template>
<div class="flex relative transition-all duration-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-none hover:border-1 hover:border-gray-100 rounded-md pl-4">
    <p class="text-sm pt-7 font-medium">{{ date }}</p>
    <div :class="{ 'border-l-2': last, 'p-0': true, 'pl-5': true, 'flex-1': true, 'pr-5': true, 'relative': true }">
        <!--Actual content-->
        <div class="flex flex-col items-start rounded-md mb-2 p-6 ease-in-out duration-300 transition-all">
            <h2 class="text-xl font-semibold text-white tracking-wide">{{ title }}</h2>
            <h3 class="text-base tracking-tight before:'-'">{{ role }}</h3>
            <p class="text-sm text-white/70 my-2" v-html="description"></p>
            <div class="flex items-start justify-start gap-3 flex-wrap">
                <slot></slot>
            </div>
        </div>
    </div>
</div>
</template>