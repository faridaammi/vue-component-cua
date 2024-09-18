<template>
    <div class="relative">
        <div class="absolute inset-y-0 end-0 flex items-center pe-2">
            
            <ColorPicker v-bind="$attrs" class="ms-2"  v-model="model"
        :pt="{
            input:{class:'rounded-md'}
        }"/>
        </div>
        <input v-model="formattedColor" 
        :class="['bg-white border ps-5 border-gray-300 pe-10 text-gray-900 shadow-sm rounded-lg focus:ring-primary focus:border-primary focus:ring-1 block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary',getSize(size)]"  
        />
    </div>
</template>
<script setup>
import ColorPicker from 'primevue/colorpicker';
import { ref, watch } from 'vue';

const props = defineProps(['inputModel','size']);
const emit = defineEmits(['update:modelValue']);

// Internal model for the ColorPicker
const model = ref(props.inputModel);

// Computed property to format the color with a # prefix
const formattedColor = ref(`#${model.value}`);

// Watch the ColorPicker model and update the formattedColor and emit the update
watch(model, (newValue) => {
    const formatted = `#${newValue}`;
    formattedColor.value = formatted;
    emit('update:modelValue', formatted);
});

// Watch the input model and update the internal model
watch(() => props.inputModel, (newVal) => {
    model.value = newVal.replace('#', '');
});
const sizes = ref({
    xs : "text-xs !h-6",
    sm : "text-sm !h-8",
    md : "text-md !h-10",
    lg : "text-lg !h-12",
    xl : "text-xl !h-14",
})
const getSize = (size) => {
  return sizes.value[size] || sizes.value.md;
}
</script>


