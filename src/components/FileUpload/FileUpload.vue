<script setup>
import { ref, defineEmits } from "vue"

defineProps({
    label:String,
    modelValue:String  // Define a prop to accept the value from the parent
})

const fileName = ref('');
const file = ref();
const emits = defineEmits('onChange');

// Function to handle file selection
function handleFileChange(event) {
    const fileList = event.target.files;
     if (fileList.length > 0) {
        if (fileList.length === 1) {
            // Update the file name and emit the file object directly if only one file is uploaded
            fileName.value = fileList[0].name;
            file.value = fileList[0];
            emits('onChange', file.value);
            updateFileName(fileList);
        } else {
            // If multiple files are selected, update the file name to display the length of files
            fileName.value = `(${fileList.length} files)`;
            file.value = fileList;
            emits('onChange', file.value);
        }
    } else {
        // Clear the file name if no file is selected
        fileName.value = '';
    }
    
  
   
}

// Function to handle file dropping
function handleFileDrop(event) {
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    updateFileName(fileList);
}

// Function to update file name
function updateFileName(fileList) {
     if (fileList.length > 0) {
        if (fileList.length === 1) {
            // Update the file name and emit the file object directly if only one file is uploaded
            fileName.value = fileList[0].name;
            file.value = fileList[0];
            emits('onChange', file.value);
        } else {
            // If multiple files are selected, update the file name to display the length of files
            fileName.value = `(${fileList.length} files)`;
            file.value = fileList;
            emits('onChange', file.value);
        }
    } else {
        // Clear the file name if no file is selected
        fileName.value = '';
    }
}
</script>
<template>
    <div class="flex items-center justify-center w-full"
     @dragover.prevent
     @drop="handleFileDrop"
    >
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white shadow-sm dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <span>{{label }}</span> 
                 <span  class="text-xs text-gray-500 font-semibold mt-1 dark:text-gray-400">  Max. 2 Mb</span>
                <p class="text-xs text-green-500 font-semibold mt-1 dark:text-green-400">
                    <span v-if="fileName">{{ fileName}}</span>
                 
                 
                </p>
                
            </div>
            <input id="dropzone-file" type="file" v-bind="$attrs" @change="handleFileChange" multiple class="hidden" />
        </label>
    </div> 

</template>
<style lang="scss" scoped>

</style>