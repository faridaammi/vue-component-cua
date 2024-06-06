<script setup>
defineProps({
    title:String,
    icon:String,
    isActive:{
        type:Boolean,
        default:false
    }
})
</script>

<template>
   
    
    <li>
         <a  v-bind="$attrs" :class="[
         'inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900   w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white',
            isActive ? 'active hover:text-white  text-white  bg-blue-700 rounded-lg w-full hover:bg-blue-800' :  ' bg-gray-50 ',
         ]
         " aria-current="page">
          <component  :is="icon" :class="['me-2 pi ', icon ]"/>
            {{title}}
        </a>
    </li>
    
</template>



<style   scoped>

</style>