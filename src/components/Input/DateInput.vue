<template>
  <div>
    <div class="relative" >
      <Calendar v-bind="$attrs" iconDisplay="input" v-model="model"
      :pt="{
        panel : {class : 'min-w-min w-10rem dark:bg-gray-800 dark:text-light dark:hover:bg-gray-800 dark:hover:text-gray-400'},
        root: { class : 'border-0 block w-ful shadow-none' },
        inputIcon :{ class:'text-error end-3 right-none'},	
        header :{ class:' dark:text-light dark:bg-gray-800'},	
        input: { class: getSize(size) },}"
      />
 
    
</div>
  </div>
</template>

<script setup>
const model = defineModel()
import Calendar from 'primevue/calendar';
import { ref } from 'vue';
defineProps(
  ['size']
);
defineOptions({
    inheritAttrs:false
})

const sizes = ref({
    xs : "text-xs !h-6 bg-white shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
    sm : "text-sm !h-8 bg-white shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
    md : "text-md !h-10 bg-white shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
    lg : "text-lg !h-12 bg-white shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
    xl : "text-xl !h-14 bg-white shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
})
const getSize = (size) => {
  return sizes.value[size] || sizes.value.md;
}
</script>
