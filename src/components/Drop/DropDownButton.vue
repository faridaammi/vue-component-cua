

<template>
  <span v-click-away="onClickAway" v-bind="$attrs" class="relative">
      <span  @click="togglePanel">
        <slot name="drop"></slot>
      </span>
      <div v-if="modelValue" id="dropdownHelper" class="z-10 flex items-center end-0 border mt-1 border-gray bg-white divide-y divide-gray-100 rounded-lg shadow  dark:border-gray-600 dark:bg-gray-800 dark:divide-gray-600 absolute " >
        <slot name="panel"/>
      </div>
  </span>
</template>

<script setup>

import { defineProps, defineEmits } from 'vue';
  
  // Props and emits setup
  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true
    },
      isClickAway:{
    type:Boolean,
    default: true
 },
  });
   const onClickAway = (event)=>{
      if(props.isClickAway === true)
        emit('update:modelValue', false);

  // console.log("away");
 }
  const emit = defineEmits(['update:modelValue']);
  
  // Function to toggle panel visibility
  const togglePanel = () => {
    emit('update:modelValue', !props.modelValue);
  };

</script>




