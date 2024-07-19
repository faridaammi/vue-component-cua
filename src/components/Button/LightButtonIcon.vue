<template>
  <button type="button" :class="[getColor(color),getSize(size)]" v-bind="$attrs">
    <i v-show="isLoading"  :class="['pi pi-spin pi-spinner',getSizeIcon(size)]" ></i>
    <component v-if="!isLoading" :is="icon" :class="[getSizeIcon(size),'pi ', icon]" />

  </button>
</template>

<script setup>
import { ref } from "vue";


const colors = ref({
primary: "text-primary bg-light border border-gray-300 disabled:cursor-not-allowed hover:bg-light hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-transparent dark:text-primary dark:border-gray-600 dark:hover:bg-transparent dark:focus:ring-light shadow-sm  ",
light: "text-dark bg-light border border-gray-300 disabled:cursor-not-allowed hover:bg-light hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-transparent dark:text-light dark:border-gray-600 dark:hover:bg-transparent dark:focus:ring-light shadow-sm  ",
success: "text-success bg-light border border-gray-300 disabled:cursor-not-allowed hover:bg-light hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-transparent dark:border-gray-600 dark:text-success dark:hover:bg-transparent dark:focus:ring-light shadow-sm  ",
dark: "text-dark bg-light border border-gray-300 disabled:cursor-not-allowed hover:bg-light hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-transparent dark:border-gray-600 dark:text-dark dark:hover:bg-transparent dark:focus:ring-light shadow-sm  ",
error: "text-error bg-light border border-gray-300 disabled:cursor-not-allowed hover:bg-light hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-transparent dark:border-gray-600 dark:text-error dark:hover:bg-transparent dark:focus:ring-light shadow-sm  ",
accent: "text-accent bg-transparent border disabled:cursor-not-allowed border-accent hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm text-center inline-flex  dark:text-accent items-center dark:border-gray-600 dark:focus:ring-accent ",
warning: "text-warning bg-light border border-gray-300 disabled:cursor-not-allowed hover:bg-light hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center dark:border-gray-600 dark:bg-transparent dark:text-warning dark:hover:bg-transparent dark:focus:ring-light shadow-sm  ",

})
const sizes = ref({
  xs : "px-2 h-7 text-xs rounded-md",
  sm : "px-3 h-9 text-sm rounded-md",
  md : "px-3.5 h-10 text-sm rounded-lg",
  lg : "px-5 h-12 text-base rounded-lg",
  xl : "px-6 h-14 text-base rounded-xl",
})
const sizesIcons = ref({
  xs : " text-xs",
  sm : " text-sm",
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
 ['color','icon','size','isLoading']
);
</script>
