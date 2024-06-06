<template>
    <p :class="getType(type)"  v-bind="$attrs">
        <slot/>
    </p>
</template>

<script setup>
import { ref } from 'vue';
const types = ref({
    success: "text-xs text-success dark:text-success",
    warning:"text-xs text-warning dark:text-warning",
    error:"text-xs text-error dark:text-error",
    info:"text-xs text-info dark:text-info",
}) 
const getType = (type) => {
    console.log(type)
  return types.value[type] || types.value.warning;
}
defineProps(['type'])
</script>
