<script setup>
import { computed, defineEmits, onMounted, ref } from "vue";
const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  value: { type: [Boolean, Object] },
  checked: { type: [Boolean, Object] },

});
const emit = defineEmits(["update:modelValue"]);
const checked = ref();
const onChnage = (event) => {
  checked.value = event.target.checked;
};

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },

});
defineOptions({
    inheritAttrs:false
})
</script>

<template>
  <span class="relative" >
    <span v-if="model"
      class="bg-gray-50 border dark:border-gray-600 chekbx dark:bg-gray-800 rounded-md text-gray-900 w-6 h-6 flex flex-shrink-0 justify-center items-center focus-within:border-primary"
      :class="{ 'border-gray-300 dark:border-primary': model }">
      <svg class="fill-current  w-3 h-3 text-gray-900 pointer-events-none" version="1.1" viewBox="0 0 17 12"
        xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(-9 -11)" fill="#555" fill-rule="nonzero">
            <path
              d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
          </g>
        </g>
      </svg>
    </span>
    <span v-else
    class="bg-gray-50 border dark:border-gray-600 chekbx dark:bg-gray-800 rounded-md text-gray-900 w-6 h-6 flex flex-shrink-0 justify-center items-center focus-within:border-primary"
  
    >
    </span>
    <input type="checkbox" @change="onChnage($event)" v-bind="$attrs" v-model="model" :value="value"
      class="w-6 h-6  top-0 left-0 absolute  opacity-0">
  </span>
</template>
<style scoped></style>
