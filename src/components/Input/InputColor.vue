<template>
    <div class="relative">
        <div class="absolute inset-y-0 end-0 flex items-center pe-2">
            
            <ColorPicker v-bind="$attrs" class="ms-2"  v-model="model"
        :pt="{
            input:{class:'rounded-md'}
        }"/>
        </div>
        <input v-model="formattedColor" 

        
        class="bg-white border ps-5 border-gray-300 !h-10 pe-10 text-gray-900 text-sm shadow-sm rounded-lg focus:ring-primary focus:border-primary focus:ring-1 block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"  
        />
    </div>
</template>
<script setup>
import ColorPicker from 'primevue/colorpicker';
import { ref, watch } from 'vue';

const props = defineProps(['inputModel']);
const emit = defineEmits(['update:modelValue']);

const model = ref(props.inputModel);

const formattedColor = ref(`#${model.value}`);

watch(model, (newValue) => {
    const formatted = `#${newValue}`;
    formattedColor.value = formatted;
    emit('update:modelValue', formatted);
});

watch(() => props.inputModel, (newVal) => {
    model.value = newVal.replace('#', '');
});
</script>


