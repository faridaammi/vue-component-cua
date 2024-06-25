<template>
   <button type="button" :class="[getColor(color),getSize(size)]" :disabled="isLoading" v-bind="$attrs">
    <i v-show="isLoading" :class="['pi pi-spin pi-spinner',getSizeIcon(size)]" ></i>
        <!-- <component v-if="!isLoading" :is="icon"  :class="[getSizeIcon(size),]"/> -->
    <component v-if="!isLoading" :is="icon" :class="[getSizeIcon(size),'pi ', icon]" />

    </button>
</template>

<script setup>
import { ref } from "vue";

const colors = ref({
  primary: "text-white bg-primary hover:bg-primary hover:opacity-70 disabled:cursor-not-allowed focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary  shadow-sm",
  success: "text-white bg-success hover:bg-success hover:opacity-70 disabled:cursor-not-allowed focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex  items-center dark:bg-success dark:hover:bg-success dark:focus:ring-success shadow-sm",
  dark: "text-white bg-dark hover:bg-dark hover:opacity-70 disabled:cursor-not-allowed focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex  items-center dark:bg-dark dark:hover:bg-dark dark:focus:ring-dark dark:border-dark shadow-sm",
  error: "text-white bg-error hover:bg-error  hover:opacity-70 disabled:cursor-not-allowed focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex  items-center dark:bg-error dark:hover:bg-error dark:focus:ring-error shadow-sm",
  accent: "text-white bg-accent hover:bg-accent hover:opacity-70 disabled:cursor-not-allowed focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex  items-center dark:focus:ring-accent shadow-sm",
  warning: "text-white bg-warning hover:bg-warning hover:opacity-70 disabled:cursor-not-allowed rounded-lg border border-warning focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex  items-center dark:bg-warning dark:hover:bg-warning dark:focus:ring-warning shadow-sm",
})
const sizes = ref({
    xs : "py-3 px-2 h-6 text-xs rounded-md",
    sm : "py-4 px-3 h-8 text-sm rounded-md",
    md : "py-5 px-4 h-10 text-sm rounded-lg",
    lg : "py-6 px-5 h-12 text-base rounded-lg",
    xl : "py-7 px-6 h-14 text-base rounded-xl",
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
  ['color','icon','size','isLoading']
);
</script>
