

<template>
  <span v-click-away="onClickAway" v-bind="$attrs" class="relative">
      <span  @click="togglePanel">
        <slot name="drop"></slot>
      </span>
      <div v-if="showDropdown" id="dropdownHelper" class=" " 
      :class="['z-10 flex items-center border mt-1 border-gray bg-white divide-y divide-gray-100 rounded-lg shadow  dark:border-gray-600 dark:bg-gray-800 dark:divide-gray-600 absolute',getAlign(props.position)]">
        <slot name="panel"/>
      </div>
  </span>
</template>

<script setup>

import { defineProps, defineEmits, ref,watch } from 'vue';
const showDropdown = ref(false);

  // Props and emits setup
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: true
    },
    isClickAway:{
    type:Boolean,
    default: true
    },
    position:{
    type:String,
    default: 'end'
    }
  });
   const onClickAway = (event)=>{
      if(props.isClickAway === true){
        emit('update:modelValue', false);
        showDropdown.value = false;
      }

 }
  const emit = defineEmits(['update:modelValue']);
  watch(() => props.modelValue, (newValue,oldValue)=>{
    showDropdown.value = newValue;
  })
  const aligns = ref({
    start : "start-0",
    end : "end-0",
    
})
const getAlign = (align) => {
  return aligns.value[align] || aligns.value.end;
}

const togglePanel = () => {
    showDropdown.value = !showDropdown.value;
    emit('update:modelValue', !props.modelValue);
  };

</script>




