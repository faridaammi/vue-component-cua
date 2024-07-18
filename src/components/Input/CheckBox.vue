
<script setup>
import Checkbox from 'primevue/checkbox';

</script>
<template>
    <Checkbox v-model="checked"  :pt="{
      box:{class : 'bg-white border dark:border-gray-600 chekbx shadow-sm dark:bg-gray-800 !text-white rounded-md w-6 h-6 flex flex-shrink-0 justify-center items-center focus-within:border-primary'},
      input:{class : 'bg-error !p-4 w-6 h-6'},
      icon:{class : ' bg-primary border text-white p-1 dark:border-gray-600 shadow-sm chekbx dark:bg-gray-800  rounded-md !text-white w-6 h-6 flex flex-shrink-0 justify-center items-center focus-within:border-primary'}
    }" />


</template>

<style >

</style>
