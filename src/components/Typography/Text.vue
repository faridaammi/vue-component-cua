<script setup>
import {defineProps, ref} from 'vue';

defineProps({
    fontSize:String,
})
const fontSizes = ref({
  xs : "text-xs text-dark dark:text-light",
  base:"text-base text-dark dark:text-light",
  sm : "text-sm text-dark dark:text-light",
  md : "text-md text-dark dark:text-light",
  lg : "text-lg text-dark dark:text-light",
  xl : "text-xl text-dark dark:text-light",
})

const getFontSize = (fontSize) => {
  return fontSizes.value[fontSize] || fontSizes.value.md;
}

</script>

<template>
    <div>
        <p :class="[getFontSize(fontSize)]"  v-bind="$attrs">
            <slot/>
        </p>
    </div>
</template>
<style lang="scss" scoped>

</style>