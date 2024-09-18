



<template>
    <div class="">
        <MultiSelect v-model="model"  v-bind="$attrs"
        :pt="{
            panel:{class:'border border-gray dark:bg-gray-800 dark:text-light'},
            item:{class:'rounded-none dark:text-light dark:hover:text-gray-800'},
            root:{class: getSize(size)},
            filterInput:{class:'bg-white  p-focus shadow-none !h-10 border-2 focus:border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary'},
            token:{class:'dark:bg-gray-400'},
            header:{class:'p-3 order-bb dark:bg-gray-800'},
         }">
             
             <template #footer>
                 <div v-if="$props.Items != null && $props.selectItem != null " class=" p-3 px-3 border-t">
                     {{ selectItem ? selectItem.length : 0 }} / {{ Items.length }}
                 </div>
             </template>
         </MultiSelect>
    </div>
 </template>
 
 <script setup>
 import MultiSelect from 'primevue/multiselect';
 import { ref } from 'vue';
 
 const model = defineModel()
 
 defineOptions({
     inheritAttrs:false
 })
 defineProps(
   {
     selectItem : {
         type: Array,
         default: null
     } ,
     Items:{
         type: Array,
         default: null
     } ,
     size : {
         type: String,
     } ,
 }
 );
 const sizes = ref({
     xs : "text-xs !h-6 flex items-center bg-white border shadow-sm border-gray-300 text-gray-900 rounded-lg focus:border-primary  w-full p-0.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
     sm : "text-sm !h-8 flex items-center bg-white border shadow-sm border-gray-300 text-gray-900 rounded-lg focus:border-primary  w-full p-0.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
     md : "text-md !h-10 flex items-center bg-white border shadow-sm border-gray-300 text-gray-900 rounded-lg focus:border-primary  w-full p-0.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
     lg : "text-lg !h-12 flex items-center bg-white border shadow-sm border-gray-300 text-gray-900 rounded-lg focus:border-primary  w-full p-0.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
     xl : "text-xl !h-14 flex items-center bg-white border shadow-sm border-gray-300 text-gray-900 rounded-lg focus:border-primary  w-full p-0.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
 })
 const getSize = (size) => {
   return sizes.value[size] || sizes.value.md;
 }
 </script>
 
 <style scoped>
 
 .p-focus{
     outline-offset: 0px;
     outline: -webkit-focus-ring-color auto 1px;
 }
 .p-inputwrapper-focus{
     outline:solid 2px theme('colors.primary');;
     border:   theme('colors.primary');;
 
 }
 </style>