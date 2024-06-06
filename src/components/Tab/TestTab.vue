<script setup>
import Button from '../Button/Button.vue'
import { ref } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  initialTab: {
    type: Number,
    default: 0,
  },
});
const selectedTab = ref(props.initialTab);

const setActiveTab = (index) => {
  selectedTab.value = index;
};
</script>
<template>
  <div class="mb-3 border-b border-gray-200 dark:border-gray-700">
    <ul  v-bind="$attrs" class="md:flex   gap-2  -mb-px text-sm font-medium text-center">
      <li v-for="(tab, index) in data" :key="index">
        <Button  

        :startIcon="tab.icon"
        v-if="selectedTab === index"
         color='primary'
         class="w-full "
        @click="setActiveTab(index)"
        >
        {{ tab.title }}
        </Button>
         <Button  

        :startIcon="tab.icon"
        v-else
         color='secondary'
         class="w-full "
        @click="setActiveTab(index)"
        >
        {{ tab.title }}
        </Button>
      </li>
    </ul>
    <div class=" text-gray-500 ">
      <div class="my-5 text-justify ">
        <slot :active="selectedTab"  />
      </div>
    </div>
  </div>
</template>

<style>

</style>