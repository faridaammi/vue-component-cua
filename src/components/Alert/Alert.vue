<script setup>
    defineProps({
        color: {
            type: String
        },
        icon: {
            type: String
        },
        titleAlert: {
            type: String
        },

    })


    import {
        ref
    } from 'vue'
    const getBgColor = (color) => {
        return types.value[color] || types.value.info;
    }

    const types = ref({
        info: "p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800",
        success: "p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800",
        error: "p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",
        warning: "p-4 mb-4 text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800",
    })

    const isOpen = ref(true);
    const closeAlert = () => {

        isOpen.value = false;
    }
</script>

<template>

    <transition name="alert-transition">
        <div id="alert-additional-content-1" v-if="isOpen" :class="getBgColor(color)" role="alert" v-bind="$attrs">
            <div class="flex justify-between mb-2">

                <div class="flex items-center">
                    <!-- <FontAwesomeIcon :icon="icon" /> -->
                    <component :is="icon" :class="['me-2 pi ',icon ]"/>
                    <h3 class="text-lg font-medium mx-3 ">{{ titleAlert }}</h3>
                </div>
                <div class="  flex items-end">
                    <button @click="closeAlert" class="text-lg font-medium mx-3 ">
                        <!-- <FontAwesomeIcon :icon="faXmarkCircle" /> -->
                        <component :is="icon" :class="['me-2 pi pi-times-circle' ]"/>

                    </button>
                </div>
            </div>

            <div class="">
                <slot />
            </div>

        </div>
    </transition>
</template>
<style scoped>
    .alert-transition-enter-active,
    .alert-transition-leave-active {
        transition: opacity 0.3s ease;
    }

    .alert-transition-enter,
    .alert-transition-leave-to {
        opacity: 0;
    }
</style>