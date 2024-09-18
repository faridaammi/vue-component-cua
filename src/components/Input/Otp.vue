<template>
    <div class="card flex justify-content-center">
        <InputOtp v-model="value" v-bind="$attrs">
            <template #default="{ attrs, events }">
                <input type="text" v-bind="attrs" v-on="events" class="bg-white shadow-sm text-center text-lg  font-semibold border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full h-12  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" />
            </template>
        </InputOtp>
    </div>
</template>

<script setup>
import InputOtp from "primevue/inputotp";
import { ref, computed } from "vue";
const props = defineProps(['defaultValue'])

const value = ref(props.defaultValue);

const otpValue = computed(() => {
      return value.value + ' - dynamic part';
    });
</script>

