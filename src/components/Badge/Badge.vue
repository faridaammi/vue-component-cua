<script setup>

defineProps({
    label:{
        type:String
    },
    icon:{
        type:String,
        default:'',
    },
    color:{
        type:String
    },
    size:{
        type:String
    },
    font:{
        type:String
    },
})
import { ref } from 'vue'

const colors = ref({
  primary: " bg-blue-100 text-primary flex-row items-center rounded dark:bg-blue-900 dark:text-blue-300",
  success: " bg-green-100 text-success flex-row items-center  rounded dark:bg-green-900 dark:text-green-300",
  dark: " bg-gray-100 text-dark  flex-row items-center rounded dark:bg-gray-700 dark:text-gray-300",
  error: " bg-red-100 text-error flex-row items-center  rounded dark:bg-red-900 dark:text-red-300",
  warning: " bg-yellow-100 text-warning  flex-row items-center rounded dark:bg-yellow-900 dark:text-yellow-300",
})
const sizes = ref({
  xs : "px-1.5 py-0.5 text-xs",
  sm : "px-1.5 py-1 text-sm",
  md : "px-2 py-1.5 text-md",
  lg : "px-2.5 py-2 text-base",
  xl : "px-2.5 py-2.5 text-base",
})
const fonts = ref({
  thin : "font-thin",
  normal : "font-normal",
  medium : "font-medium",
  bold : "font-bold",
  extrabold : "font-extrabold",
  
})
const sizesIcons = ref({
    xs : "text-xs",
    sm : "text-xs",
    md : "text-sm",
    lg : "text-sm",
    xl : "text-md",
})

const getBgColor = (color) => {
  return colors.value[color] || colors.value.primary;
}
const getSize = (size) => {
  return sizes.value[size] || sizes.value.md;
}
const getFont = (font) => {
  return fonts.value[font] || fonts.value.md;
}
const getSizeIcon = (size) => {
  return sizesIcons.value[size] || sizesIcons.value.md;
}
</script>

<template>
    
        <span  v-bind="$attrs" :class="[getBgColor(color),getSize(size),getFont(font),'']">
          <component v-if="icon"  :is="icon" :class="[getSizeIcon(size),'pi ', icon ]"/>
           {{label}}
        </span>

   
</template>


<style lang="scss" scoped>

</style>