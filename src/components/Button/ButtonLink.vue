<template>
   <button type="button" :class="[getColor(color), getSize(size)]" :disabled="isLoading">
        <i v-show="isLoading" v-if="!endIcon"  :class="['pi pi-spin pi-spinner me-2',getSizeIcon(size)]" ></i>
        <component v-if="!isLoading" :is="startIcon" :class="[getSizeIcon(size),'me-2 pi ', startIcon ]"/>

        <slot/>
        <i v-show="isLoading" v-if="endIcon"  :class="['pi pi-spin pi-spinner ms-2',getSizeIcon(size)]" ></i>
        <component v-if="!isLoading" :is="endIcon" :class="[getSizeIcon(size),'ms-2 pi ', endIcon]" />
    </button>
</template>

<script setup>
// import Button from 'primevue/button';
import { ref } from 'vue'

const colors = ref({
  primary: "py-3 px-4  gap-x-2 text-sm rounded-lg border border-transparent text-primary hover:text-primary  hover:underline hover:underline-offset-1 disabled:opacity-50 disabled:pointer-events-none dark:text-primary dark:hover:text-primary",
  success: "py-3 px-4  gap-x-2 text-sm rounded-lg border border-transparent text-success hover:text-success  hover:underline hover:underline-offset-1 disabled:opacity-50 disabled:pointer-events-none dark:text-success dark:hover:text-success",
  dark: "py-3 px-4  gap-x-2 text-sm rounded-lg border border-transparent text-dark hover:text-dark  hover:underline hover:underline-offset-1 disabled:opacity-50 disabled:pointer-events-none dark:text-dark dark:hover:text-dark",
  error: "py-3 px-4  gap-x-2 text-sm rounded-lg border border-transparent text-error hover:text-error  hover:underline hover:underline-offset-1 disabled:opacity-50 disabled:pointer-events-none dark:text-error dark:hover:text-error",
  accent: "py-3 px-4  gap-x-2 text-sm rounded-lg border border-transparent text-accent hover:text-accent  hover:underline hover:underline-offset-1 disabled:opacity-50 disabled:pointer-events-none dark:text-accent dark:hover:text-accent",
  warning: "py-3 px-4  gap-x-2 text-sm rounded-lg border border-transparent text-warning hover:text-warning  hover:underline hover:underline-offset-1 disabled:opacity-50 disabled:pointer-events-none dark:text-warning dark:hover:text-warning",
  secondary: "py-3 px-4  gap-x-2 text-sm rounded-lg border border-transparent text-secondary hover:text-secondary  hover:underline hover:underline-offset-1 disabled:opacity-50 disabled:pointer-events-none dark:text-secondary dark:hover:text-secondary",
})
const sizes = ref({
    xs : "px-2 h-6 text-xs rounded-md",
    sm : "px-3 h-8 text-sm rounded-md",
    md : "px-4 h-10 text-md rounded-lg",
    lg : "px-5 h-12 text-lg rounded-lg",
    xl : "px-6 h-14 text-xl rounded-xl",
})
const sizesIcons = ref({
    xs : " text-xs",
    sm : "text-sm",
    md : " text-md",
    lg : " text-lg",
    xl : " text-xl",
})
const getColor = (color) => {
  return colors.value[color] || colors.value.primary;
}
const getSize = (size) => {
  return sizes.value[size] || sizes.value.md;
}
const getSizeIcon = (size) => {
  return sizesIcons.value[size] || sizesIcons.value.md;
}

defineProps(
  ['startIcon','endIcon','color','size','isLoading']
);
</script>