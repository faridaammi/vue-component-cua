<template>
    <div class="relative">
        <div class="absolute inset-y-0 end-0 flex items-center pe-2">
            <ColorPicker v-bind="$attrs" class="ms-2"  v-model="model"
        :pt="{
            input:{class:'rounded-md'}
        }"/>
        </div>
        <input v-model="model"
        class="bg-white border border-gray-300 pe-10 text-gray-900 text-sm shadow-sm rounded-lg focus:ring-primary focus:border-primary focus:ring-1 block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"  
        />
    </div>
</template>
<script setup>
import ColorPicker from 'primevue/colorpicker';
import { ref } from 'vue';

// defineOptions({
//     inheritAttrs:false
// })

const model = defineModel()

const emit = defineEmits(['update:modelValue'])
</script>


<!-- :class="{ 'ps-10': start,'pe-10': end }"  -->
