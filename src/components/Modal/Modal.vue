
<template>
    <Dialog  modal :style="{ width: getSize($props.size) }"   v-bind="$attrs"
    :pt="{
        footer:{class: 'bg-gray-50 border-t p-4'},
        header:{class: 'border-b p-4'},}">
        <slot />
        <template #footer>
            <slot name="footer"/>
        </template>
    </Dialog>
</template>
<script setup>
import Dialog from 'primevue/dialog';
import { ref } from 'vue';
const visible1 = true
defineOptions({
 inheritAttrs:false
})
defineProps(['show','title','size'])
const sizes = ref({
sm : "30rem",
md : "50rem",
lg : "60rem",
})
const getSize = (size) => {
return sizes.value[size] || sizes.value.md;
}
</script>


