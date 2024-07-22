



<template>
    <Dropdown v-model="model" v-bind="$attrs" 
    :pt="{
        panel:{class:'border border-gray dark:border-gray-600 dark:bg-gray-800 dark:text-white'},
        item:{class:'rounded-none dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'},
        root:{class:'bg-white shadow-sm border border-gray-300 text-sm text-white rounded-lg !h-10 focus:border-primary focus:ring-1 focus:ring-primary p-0.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary dark:focus:border-primary'},
        filterInput:{class:'bg-gray-50  shadow-none mb-2 border focus:ring-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary'},
        header:{class:'dark:bg-gray-800 dark:text-white'},
        emptyMessage: {class:'dark:text-gray-400'},
        input: {class:'dark:text-white'},
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
['startIcon']
);
</script>

<style scoped> 
.p-inputwrapper-focus{
 outline:solid 2px theme('colors.primary');;
 border:   theme('colors.primary');;

}
</style>






<!-- class="p-dropdown p-component p-inputwrapper bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary  w-full p-0.5 dark:bg-gray-700 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" -->