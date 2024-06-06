


<template>
<div class="relative" >
    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <component :is="startIcon" :class="['text-gray-700 me-2 pi ', startIcon ]"/>
    </div>
    <div class="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
        <component :is="endIcon" :class="['ms-2 pi ', endIcon]" />
    </div>
    <div >
        <input v-bind="$attrs" v-model="model"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary focus:ring-1 block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"  
        :class="{ 'ps-10': startIcon,'pe-10': endIcon }" />
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const model = defineModel()
defineOptions({
    inheritAttrs:false
})
const emit = defineEmits(['update:modelValue'])
defineProps(
  ['startIcon','endIcon']
);
</script>
