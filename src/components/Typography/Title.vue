<script setup>
import {defineProps, ref} from 'vue';

defineProps({
    type:String
})


const sizes = ref({
    h1 : 'text-5xl text-dark dark:text-light',	
    h2 : 'text-4xl text-dark dark:text-light',	
    h3 : 'text-3xl text-dark dark:text-light',	
    h4 : 'text-2xl text-dark dark:text-light',	
    h5 : 'text-xl text-dark dark:text-light',	
    
})

const getHeadingSize = (type) => {
  return sizes.value[type] || sizes.value.md;
}

</script>

<template>
    <div>
        <component :is="type" :class="[getHeadingSize(type)]" v-bind="$attrs">
           <slot/>
        </component>
    </div>
</template>
<style lang="scss" scoped>

</style>