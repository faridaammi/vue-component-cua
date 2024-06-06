<script setup>
    import Button from '../Button/Button.vue'
    defineProps({
        label: {
            type: String
        },
        RoundedBorder: {
            type: String
        }

    })
</script>

<template>
    <div class="inline-flex shadow-sm ">
        <button 
            v-bind="$attrs"
            :class="RoundedBorder"
            class="inline-flex items-center border dark:border-gray-600 border-gray-900  px-4 py-2 text-sm font-medium text-gray-900 bg-transparent  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <div class="me-2">
                <slot></slot>
            </div>
            {{ label }}

        </button>

    </div>
</template>
<style lang="scss" scoped>

</style>