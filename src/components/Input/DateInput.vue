<template>
  <div>
    <div class="relative" >
      <Calendar v-bind="$attrs" type="text" iconDisplay="input" v-model="model"
      :pt="{
        panel : {class : 'min-w-min w-10rem dark:bg-gray-800 dark:text-light dark:hover:bg-gray-800 dark:hover:text-gray-400'},
        root: { class : 'border-0 block w-ful shadow-none' },
        inputIcon :{ class:'text-error end-3 right-none'},	
        header :{ class:' dark:text-light dark:bg-gray-800'},	
        input: { class: 'bg-white shadow-sm border border-gray-300 !h-10 text-gray-900 text-sm rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary' },}"
      />
 
    
</div>
  </div>
</template>

<script setup>
const model = defineModel()
import Calendar from 'primevue/calendar';

defineOptions({
    inheritAttrs:false
})
</script>
