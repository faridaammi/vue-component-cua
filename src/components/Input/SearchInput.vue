<script setup>
import InputText from '../Input/TextInput.vue';
import Button from '../Button/Button.vue';
import { ref } from 'vue';
const model = defineModel()
const emits = defineEmits(['formSubmit']);
function submitForm(search) {
  // Emit an event to notify the parent component about the form submission
  emits('formSubmit',model.value);
}
defineProps({
      labelButton:String
})
defineOptions({
      inheritAttrs:false
})

</script>

<template>
        <form class="flex items-center"  v-bind="$attrs" @submit.prevent="submitForm">   

            <div class="relative w-full">
                <InputText v-model="model" v-bind="$attrs" type='text'></InputText>
            </div>
            <slot/>

        </form>
</template>
<style lang="scss" scoped>

</style>