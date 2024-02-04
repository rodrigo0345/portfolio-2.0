<script setup lang="ts">
const props = defineProps<{
    title: string
    description: string
    date: string
    role: string
    last?: boolean
    link?: string
}>()
</script>

<template>
<div v-on="mouse" tabindex="1" class="group bg-transparent flex relative transition-all duration-500 rounded-md pl-4">
    <p class="text-sm pt-7 font-medium">{{ date }}</p>
    <div :class="{ 'border-l-2': last, 'p-0': true, 'pl-5': true, 'flex-1': true, 'pr-5': true, 'relative': true }">
        <!--Actual content-->
        <div class="flex flex-col items-start rounded-md mb-2 p-6 ease-in-out duration-300 transition-all">
            <a href={{ link }} class="flex items-center gap-2 p-0">
                <h2 class="text-xl duration-150 group-hover:text-sky-200/80 font-semibold text-white tracking-wide">{{ title }}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                    </svg>
                
            </a>
            <h3 class="text-base tracking-tight before:'-'">{{ role }}</h3>
            <p class="text-sm text-white/70 my-2 font-light" v-html="description"></p>
            <div class="flex items-start justify-start gap-3 flex-wrap">
                <slot></slot>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.shadow-on-hover:hover {
    box-shadow: 5px 5px 0px 0px #38bff897;
}
.shadow-on-hover:focus {
    box-shadow: 5px 5px 0px 3px #38bdf8;
}
</style>