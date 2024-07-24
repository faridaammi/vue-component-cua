<script setup>
import Button from '../Button/Button.vue'
defineProps
(
    ['title','icon','isActive','isDisabled']
)

</script>
<template>
    <li class="me-2">
        <a v-bind="$attrs"
            :class="[
                'inline-flex items-center w-full   justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-primary hover:border-primary dark:hover:text-gray-300 group',
                isActive ?
                'inline-flex active border-b-primary items-center justify-center p-4 text-primary border-b-2 border-primary rounded-t-lg active dark:text-primary dark:border-primary group' :
                '',
                isDisabled ? 'inline-block  cursor-not-allowed p-4   text-gray-400 rounded-t-lg dark:text-gray-500 hover:!text-gray-600 hover:!border-gray-300' : '',
            ]">
                <component  :is="icon" :class="['me-2 pi ', icon ]"/>
            {{ title }}
            
        </a>

    </li>
</template>

<style scoped>

</style>