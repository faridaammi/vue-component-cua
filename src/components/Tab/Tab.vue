<script setup>
</script>
<template>
   <div class="border-b  border-gray-200 dark:border-gray-700">
        <ul  v-bind="$attrs" class="flex lg:flex-row md:flex-row sm:flex-col md:overflow-auto -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <slot />
        </ul>
    </div>
</template>

<style>

</style>