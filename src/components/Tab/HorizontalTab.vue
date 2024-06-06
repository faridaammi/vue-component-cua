<template>
   

    <div class="md:flex border dark:border-gray-600 p-3 rounded-lg ">
        <ul  v-bind="$attrs" class=" md:flex  space-y-2 md:space-y-0 md:space-x-4 flex-row space-y  text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
            <slot />
        </ul>
    </div>
    


</template>

<script setup></script>

<style lang="scss" scoped>

</style>