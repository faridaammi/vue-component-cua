<template>
    <!-- //npm install quill --required -->
  <div class="card">
        <Editor v-model="value" v-bind="$attrs"
        :pt="{
        root : {class : 'bg-gray-50 shadow-none border border-gray-300 text-gray-900 dark:text-white text-sm rounded-lg focus:border-2 focus:ring-primary focus:border-primary block w-full dark:bg-gray-600 dark:placeholder-white dark:focus:ring-primary dark:focus:border-primary'},
    }"/>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Editor from 'primevue/editor';

const value = ref()
</script>

<style>

@media (prefers-color-scheme: dark) {
/* custom css */
.p-editor-container .p-editor-toolbar {
    background: #1e293b !important;
    color: #fbfdff !important;
}
.p-editor-container .ql-editor {
    background: #1e293b !important;
    color: #ffffff !important;
}

}

</style>