

<template>
  <span v-click-away="onClickAway" v-bind="$attrs" class="relative">
      <span @click="toggle">
        <slot name="drop"></slot>
      </span>
      <div id="dropdownHelper" class="z-10 end-0 border border-gray bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:border-gray-600 dark:bg-gray-800 dark:divide-gray-600 absolute "  :class="{ hidden: !state }">
        <slot name="panel"/>
      </div>
  </span>
</template>

<script setup>
import { ref } from 'vue';

const positions = ref({
  start:"",
  end:'end-0'
})
const state = ref(false);
const toggle = ()=>{
  state.value = !state.value;
 }
 const onClickAway = (event)=>{
  state.value = false;
  console.log("away");
 }
 const getPosition = (position) => {
  return positions.value[position] || positions.value.start;
}
 defineProps(['start','end'])
</script>




