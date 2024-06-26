<template>
   <InputSwitch v-model="model" v-bind="$attrs" 
   :pt="{
        root: { class : 'border-0 block w-ful shadow-none' },
        input: { class: ''},
        slider: { class: getColor(color)},
    }"
        />
</template>
<script setup>
import InputSwitch from 'primevue/inputswitch';
import { ref } from 'vue';

const model = defineModel()
const colors = ref({
  primary: "bg-primary",
  success: " bg-success  dark:bg-success dark:hover:bg-success dark:focus:ring-success ",
  dark: "text-white bg-dark hover:bg-dark hover:opacity-70 disabled:cursor-not-allowed focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex  items-center dark:bg-dark dark:hover:bg-dark dark:focus:ring-dark dark:border-dark me-2 mb-2 shadow-sm",
  error: "text-white bg-error hover:bg-error  hover:opacity-70 disabled:cursor-not-allowed focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex  items-center dark:bg-error dark:hover:bg-error dark:focus:ring-error me-2 mb-2 shadow-sm",
  accent: "text-white bg-accent hover:bg-accent hover:opacity-70 disabled:cursor-not-allowed focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex  items-center dark:focus:ring-accent me-2 mb-2 shadow-sm",
  warning: "text-white bg-warning hover:bg-warning hover:opacity-70 disabled:cursor-not-allowed rounded-lg border border-warning focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex  items-center dark:bg-warning dark:hover:bg-warning dark:focus:ring-warning me-2 mb-2 shadow-sm",
})
const getColor = (color) => {
  return colors.value[color] || colors.value.primary;
}
defineProps(
  ['color']
);
</script>