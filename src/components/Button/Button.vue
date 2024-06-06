<template>
  <!-- <Button label="Submit" icon="pi pi-check" /> -->
  <button
    v-bind="$attrs"
    type="button"
    :class="[getColor(color), getSize(size)]" :disabled="isLoading">
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
  light:"text-dark bg-white hover:bg-secondary hover:bg-opacity-20 hover:text-dark focus:outline-none  font-medium  disabled:cursor-not-allowed text-center items-center dark:bg-transparent dark:hover:bg-transparent dark:  shadow-sm",
  primary: "text-white bg-primary hover:bg-primary hover:opacity-80 focus:outline-none  font-medium  disabled:cursor-not-allowed text-center items-center dark:bg-primary dark:hover:bg-primary dark:  shadow-sm",
  success: "text-white bg-success hover:bg-success hover:opacity-80 focus:outline-none font-medium disabled:cursor-not-allowed  text-center items-center  dark:bg-success dark:hover:bg-success dark:focus:ring-success shadow-sm",
  dark: "text-white bg-dark hover:bg-gray-800 hover:opacity-80 focus:outline-none  font-medium disabled:cursor-not-allowed   text-center items-center  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 shadow-sm",
  error: "text-white bg-error hover:bg-error hover:opacity-80 focus:outline-none font-medium  disabled:cursor-not-allowed  text-center items-center  dark:bg-error dark:hover:bg-red-700 dark:focus:ring-error shadow-sm",
  accent: "text-white bg-accent hover:bg-accent hover:opacity-80  focus:outline-none font-medium disabled:cursor-not-allowed   text-center items-center  dark:focus:ring-accent shadow-sm",
  warning: "text-white bg-warning hover:bg-warning hover:opacity-80  focus:outline-none font-medium  disabled:cursor-not-allowed  text-center items-center  dark:focus:ring-warning shadow-sm",
  secondary: "text-gray-900 bg-secondary hover:bg-secondary disabled:cursor-not-allowed   hover:opacity-80 focus:outline-none font-medium rounded-lg text-center items-center  dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary shadow-sm border border border-secondary",
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

<script>

</script>