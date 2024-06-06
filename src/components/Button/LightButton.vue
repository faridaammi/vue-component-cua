<template>
    <!-- <Button label="Submit" icon="pi pi-check" /> -->
    <button
      v-bind="$attrs"
      type="button"
      :class="[getColor(color), getSize(size)]" :disabled="isLoading">
      <i v-show="isLoading" v-if="!endIcon"  :class="['pi pi-spin pi-spinner me-2',getSizeIcon(size)]" ></i>
      <component v-if="!isLoading" :is="startIcon" :class="[getSizeIcon(size),'me-2 pi ', startIcon,{'invisible': isLoading }]"/>

      <slot/>
      <i v-show="isLoading" v-if="endIcon"  :class="['pi pi-spin pi-spinner ms-2',getSizeIcon(size)]" ></i>
      <component v-if="! isLoading" :is="endIcon" :class="[getSizeIcon(size),'ms-2',{'invisible': isLoading }]" />
    <component v-if="!isLoading" :is="endIcon" :class="[getSizeIcon(size),'ms-2 pi ', endIcon,{'invisible': isLoading }]" />

    </button>
  </template>
  
  <script setup>
  // import Button from 'primevue/button';
  import { ref } from 'vue'
  
  const colors = ref({
  light: "text-dark bg-light border hover:bg-light hover:opacity-70 disabled:cursor-not-allowed focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center  items-center dark:bg-transparent dark:text-light dark:hover:bg-transparent dark:focus:ring-light  me-2 mb-2 shadow-sm",
  primary: "text-primary bg-light border hover:bg-light hover:opacity-70 disabled:cursor-not-allowed focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center  items-center dark:bg-transparent dark:text-light dark:hover:bg-transparent dark:focus:ring-light  me-2 mb-2 shadow-sm",
  success: "text-success bg-light border hover:bg-light hover:opacity-70 disabled:cursor-not-allowed focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center  items-center dark:bg-transparent dark:text-light dark:hover:bg-transparent dark:focus:ring-light  me-2 mb-2 shadow-sm",
  dark: "text-dark bg-light border hover:bg-light hover:opacity-70 disabled:cursor-not-allowed focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center  items-center dark:bg-transparent dark:text-light dark:hover:bg-transparent dark:focus:ring-light  me-2 mb-2 shadow-sm",
  error: "text-error bg-light border hover:bg-light hover:opacity-70 disabled:cursor-not-allowed focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center  items-center dark:bg-transparent dark:text-light dark:hover:bg-transparent dark:focus:ring-light  me-2 mb-2 shadow-sm",
  accent: "text-accent bg-light border hover:bg-light hover:opacity-70 disabled:cursor-not-allowed focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center  items-center dark:bg-transparent dark:text-light dark:hover:bg-transparent dark:focus:ring-light  me-2 mb-2 shadow-sm",
  warning: "text-warning bg-light border hover:bg-light hover:opacity-70 disabled:cursor-not-allowed focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center  items-center dark:bg-transparent dark:text-light dark:hover:bg-transparent dark:focus:ring-light  me-2 mb-2 shadow-sm",
 
  // primary: "text-primary opacity-75 border disabled:cursor-not-allowed border-primary hover:border hover:border-primary hover:opacity-100 font-medium rounded-lg text-sm p-2.5 text-center  items-center me-2 mb-2 shadow-sm",
  //  success: "text-success opacity-75 border disabled:cursor-not-allowed border-success hover:border hover:border-success hover:opacity-100 hover:text-success font-medium rounded-lg text-sm p-2.5 text-center  items-center me-2 mb-2 shadow-sm",
  //  dark: "text-dark opacity-75 border disabled:cursor-not-allowed border-dark hover:border hover:border-dark hover:opacity-100 hover:text-dark font-medium rounded-lg text-sm p-2.5 text-center  items-center me-2 mb-2 shadow-sm",
  //  error: "text-error opacity-75 border disabled:cursor-not-allowed border-error hover:border hover:border-error hover:opacity-100 hover:text-error font-medium rounded-lg text-sm p-2.5 text-center  items-center me-2 mb-2 shadow-sm",
  //  accent: "text-accent opacity-75 border disabled:cursor-not-allowed border-accent hover:border hover:opacity-100 hover:border-accent hover:text-accent font-medium rounded-lg text-sm p-2.5 text-center  items-center me-2 mb-2 shadow-sm",
  //  warning: "text-warning opacity-75 border disabled:cursor-not-allowed border-warning hover:border hover:opacity-100 hover:border-warning hover:text-warning font-medium rounded-lg text-sm p-2.5 text-center  items-center me-2 mb-2 shadow-sm",
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
    ['startIcon','endIcon','color','size','isLoading']
  );
  </script>
  
  <script>
  
  </script>