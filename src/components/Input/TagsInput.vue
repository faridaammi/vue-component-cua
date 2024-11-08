
<script setup>
import Chips from 'primevue/chips';
import { ref } from "vue";
const model = defineModel()
const props = defineProps(
  ['size']
);
defineOptions({
  inheritAttrs: false
})
const sizes = ref({
    xs : "text-xs !min-h-6 rounded-lg",
    sm : "text-sm !min-h-8 rounded-lg",
    md : "text-md !min-h-10 rounded-lg",
    lg : "text-lg !min-h-12 rounded-lg",
    xl : "text-xl !min-h-14 rounded-lg",
})
const getSize = (size) => {
  return sizes.value[size] || sizes.value.md;
}
</script>



<template>
   <div class="card p-fluid">
        <Chips v-bind="$attrs" v-model="model" :pt="{
            root: { class: getSize(size) },
            container: {class:'px-2 border border-gray-300 rounded-lg focus:!border-1 focus:!border-primary'},
            token: {class:'text-sm my-1 h-6 px-2'},
            removeTokenIcon:{class:'h-3'}
        }"/>
    </div>
</template>

<style scoped>
    .p-focus  {
    outline-offset: 0px;
    outline: -webkit-focus-ring-color auto 1px;
}
.p-focus  input{
    outline-offset: 0px  !important;
    outline: -webkit-focus-ring-color auto 0px !important;
}
</style>