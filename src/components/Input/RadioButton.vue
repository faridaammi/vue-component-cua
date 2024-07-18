<script setup>
import radio from 'primevue/radiobutton';

</script>
<template>
    <radio :v-bind="$attrs" :pt="{
        box:'border border-gray-300',
        icon:'text-primary bg-primary'
    }" />
</template>