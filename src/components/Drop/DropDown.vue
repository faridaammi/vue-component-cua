



<template>
    <Dropdown v-model="model" v-bind="$attrs" 
    :pt="{
        panel:{class:'border border-gray !mt-1  dark:border-gray-600 dark:bg-gray-800 dark:text-white'},
        item:{class:'rounded-none dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'},
        root:{class:getSize(size)},
        filterIcon: {class:'absolute end-4 rtl:right-auto '},
        filterInput:{class:'relative bg-gray-50 !h-10 shadow-none flex mb-2 border focus:ring-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary'},
        header:{class:'dark:bg-gray-800 dark:text-white'},
        emptyMessage: {class:'dark:text-gray-400'},
        input: {class: getSizeText(size)},
     }">
</Dropdown>
</template>

<script setup>
import Dropdown from 'primevue/dropdown';
import { ref } from 'vue';

const model = defineModel()

defineOptions({
 inheritAttrs:false
})
defineProps(
['startIcon','size']
);
const sizesText = ref({
 xs : "text-xs",
 sm : "text-sm",
 md : "text-md ",
 lg : "text-lg ",
 xl : "text-xl ",
})
const sizes = ref({
 xs : "text-xs !h-6 flex items-center bg-white shadow-sm border border-gray-300 text-sm text-white rounded-lg focus:border-primary focus:ring-1 focus:ring-primary p-0.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary dark:focus:border-primary",
 sm : "text-sm !h-8 flex items-center bg-white shadow-sm border border-gray-300 text-sm text-white rounded-lg focus:border-primary focus:ring-1 focus:ring-primary p-0.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary dark:focus:border-primary",
 md : "text-md !h-10 flex items-center bg-white shadow-sm border border-gray-300 text-sm text-white rounded-lg focus:border-primary focus:ring-1 focus:ring-primary p-0.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary dark:focus:border-primary",
 lg : "text-lg !h-12 flex items-center bg-white shadow-sm border border-gray-300 text-sm text-white rounded-lg focus:border-primary focus:ring-1 focus:ring-primary p-0.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary dark:focus:border-primary",
 xl : "text-xl !h-14 flex items-center bg-white shadow-sm border border-gray-300 text-sm text-white rounded-lg focus:border-primary focus:ring-1 focus:ring-primary p-0.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary dark:focus:border-primary",
})
const getSize = (size) => {
return sizes.value[size] || sizes.value.md;
}
const getSizeText = (size) => {
return sizesText.value[size] || sizesText.value.md;
}
</script>

<style scoped> 
.p-inputwrapper-focus{
 outline:solid 2px theme('colors.primary');;
 border:   theme('colors.primary');;

}
</style>






<!-- class="p-dropdown p-component p-inputwrapper bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary  w-full p-0.5 dark:bg-gray-700 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" -->