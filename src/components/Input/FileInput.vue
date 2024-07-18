<template>
    <form>
        <input v-bind="$attrs" type="file" class="block w-full border !h-10 bg-white border-gray-300 shadow-sm rounded-lg text-sm focus:z-10 focus:ring-primary focus:ring-1 focus:border-primary  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:py-2.5 file:bg-gray-50 file:border-0 file:me-4 file:px-4">
    </form>
</template>
<script setup>


defineOptions({
    inheritAttrs:false
})
// const model = defineModel()
</script>
