<template>
    <button type="button" :class="[getColor(color),getSize(size)]" v-bind="$attrs">
      <i v-show="isLoading"  :class="['pi pi-spin pi-spinner',getSizeIcon(size)]" ></i>
      <component v-if="!isLoading" :is="icon" :class="[getSizeIcon(size),'pi ', icon]" />

    </button>
 </template>
 
 <script setup>
 import { ref } from "vue";
 
 
 const colors = ref({
  primary2: "text-primary bg-transparent border disabled:cursor-not-allowed border-primary hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:border border-primary dark:focus:ring-primary   shadow-sm",
  primary: "text-primary bg-light border border-gray-300 disabled:cursor-not-allowed hover:bg-light hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-transparent dark:text-light dark:hover:bg-transparent dark:focus:ring-light shadow-sm  ",
  light: "text-dark bg-light border border-gray-300 disabled:cursor-not-allowed hover:bg-light hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-transparent dark:text-light dark:hover:bg-transparent dark:focus:ring-light shadow-sm  ",
  success2: "text-success bg-transparent border disabled:cursor-not-allowed border-success hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex  items-center  dark:border border-success dark:focus:ring-success  shadow-sm",
  success: "text-success bg-light border border-gray-300 disabled:cursor-not-allowed hover:bg-light hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-transparent dark:text-light dark:hover:bg-transparent dark:focus:ring-light shadow-sm  ",
  dark: "text-dark bg-light border border-gray-300 disabled:cursor-not-allowed hover:bg-light hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-transparent dark:text-light dark:hover:bg-transparent dark:focus:ring-light shadow-sm  ",
  dark2: "text-dark bg-transparent border disabled:cursor-not-allowed border-dark hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex  items-center  dark:border border-dark dark:focus:ring-dark dark:border-dark  shadow-sm",
  error2: "text-error bg-transparent border disabled:cursor-not-allowed border-error  hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex  items-center  dark:border border-error dark:focus:ring-error  shadow-sm",
  error: "text-error bg-light border border-gray-300 disabled:cursor-not-allowed hover:bg-light hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-transparent dark:text-light dark:hover:bg-transparent dark:focus:ring-light shadow-sm  ",
  accent: "text-accent bg-transparent border disabled:cursor-not-allowed border-accent hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex  items-center dark:focus:ring-accent ",
  warning2: "text-warning bg-transparent border disabled:cursor-not-allowed border-warning hover:opacity-70 rounded-lg border border-warning focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex  items-center  dark:border border-warning dark:focus:ring-warning me-2 mb-2 shadow-sm",
  warning: "text-warning bg-light border border-gray-300 disabled:cursor-not-allowed hover:bg-light hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-transparent dark:text-light dark:hover:bg-transparent dark:focus:ring-light shadow-sm  ",

})
const sizes = ref({
    xs : "px-2 h-6 text-xs rounded-md",
    sm : "px-3 h-8 text-sm rounded-md",
    md : "px-4 h-10 text-sm rounded-lg",
    lg : "px-5 h-12 text-base rounded-lg",
    xl : "px-6 h-14 text-base rounded-xl",
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
 