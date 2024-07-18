
<template>
  <div class="relative mb-6">
    <div class="absolute z-10 inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
        <i class="pi-eye-slash h-4 w-4 text-gray-700" />
    </div>

        <Password v-model="value" toggleMask v-bind="$attrs"
        inputClass="bg-gray-50 ps-10 shadow-none border border-gray-300 !h-10 text-gray-900 text-sm rounded-lg focus:ring-primary focus:ring-1focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
        :pt="{
             input : {class : 'min-w-min w-10rem bg-error'},
            meterLabel : {class: 'text-error'},
            info : {class: 'text-xs'},
            panel : {class : 'min-w-min w-10rem '},
            hideIcon :{ class:'text-error end-3 right-none'},
            showIcon :{ class:'text-error end-3 right-none'},
            root: { class : 'border-0 block w-ful shadow-none' },}">
        
            <template #header>
                <p class="text-xs mb-2">Pick a password</p>
            </template>
            <template #footer>
                <Divider />
                <p class="mt-2 text-xs">Suggestions</p>
                <ul class="pl-2 ml-2 mt-0 text-xs list-disc	" style="line-height: 1.5">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                </ul>
            </template>
        </Password>
    </div>
</template>
  
  <script setup>

import Password from 'primevue/password';
const value = ref(null);
import { ref } from 'vue';

defineOptions({
      inheritAttrs:false
})
defineProps(
  ['startIcon']
)
</script>
