


<template>
<div class="relative" >
    <div class="absolute inset-y-0 start-0 ps-3 pointer-events-none">
        <component :is="startIcon" :class="['text-gray-700 me-2 pi ', startIcon,getSizeIcon(size) ]"/>
    </div>
    <div class="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
        <component :is="endIcon" :class="['ms-2 pi ', endIcon,getSizeIcon(size)]" />
    </div>
    <div >
        <input v-bind="$attrs" v-model="model"
        :class="['bg-white border border-gray-300 text-gray-900  shadow-sm rounded-lg focus:ring-primary focus:border-primary focus:ring-1 block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary',{ 'ps-10': startIcon,'ps-14': prefix,'pe-14': prefix,'pe-14':suffix,'pe-10': endIcon },getSize(size)]"  />
    </div>
    <div v-if="$props.suffix" class="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none text-gray-500">
          {{ $props.suffix }}
    </div>
    <div v-if="$props.prefix" class="absolute inset-y-0 start-4 flex items-center pe-4 pointer-events-none text-gray-500">
          {{ $props.prefix }}
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
  ['startIcon','endIcon','prefix','suffix','size']
);
const sizes = ref({
    xs : "text-xs !h-6",
    sm : "text-sm !h-8",
    md : "text-md !h-10",
    lg : "text-lg !h-12",
    xl : "text-xl !h-14",
})
const sizesIcons = ref({
    xs : "text-xs",
    sm : "text-sm my-1.5",
    md : "text-md my-3",
    lg : "text-lg my-2.5",
    xl : "text-xl my-3",
})
const getSize = (size) => {
  return sizes.value[size] || sizes.value.md;
}
const getSizeIcon = (size) => {
  return sizesIcons.value[size] || sizesIcons.value.md;
}

</script>
