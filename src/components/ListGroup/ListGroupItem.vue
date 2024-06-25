<script setup>
import { ref } from 'vue';

defineProps(['last'])
</script>

<template>
      <li v-if="last" v-bind="$attrs" class="w-full px-4 py-2 border-gray-200 rounded-t-lg dark:border-gray-600">
        <slot/>
      </li>
      <li v-else v-bind="$attrs" class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <slot/>
      </li>
   
</template>



<style lang="scss" scoped>

</style>