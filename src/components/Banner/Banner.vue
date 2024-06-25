<template>
    <Transition name="fade">
    <nav v-if="isOpen" :class="[getColor(color)]">

        <div class="flex flex-row">

            <div class="flex flex-1 h-[30px]  items-center justify-center">

                <div class="rtl:space-x-reverse flex  h-auto  content-center text-white  items-center justify-center">
                  <slot/>  
                </div>

            </div>


            <div class="flex flex-initial">

                <div class="flex pe-2 items-center me-2">

                    <!-- <button type="button" class="text-white dark:text-white">
                        <i class="fa-solid fa-xmark"></i>
                    </button> -->
                   
                    <button @click="closeAlert">
                        <i class="pi pi-times text-xs text-white pe-6"></i>
                    </button>

                   

                </div>

            </div>
        </div>

    </nav>
</Transition>
</template>

<script setup>
import { ref } from 'vue';
import Button from '../Button/Button.vue';
import ButtonIcon from '../Button/ButtonIcon.vue';
import Link from '../Button/Link.vue';

const isOpen = ref(true);

const closeAlert = () => {
    isOpen.value = false;
    emit('onClose')
}

const colors = ref({
//   light:"bg-light text-dark dark:bg-gray-900   h-[40px]  w-full border-gray-200 dark:border-gray-600",
  primary: "bg-primary dark:bg-gray-900   h-[30px]  w-full border-gray-200 dark:border-gray-600",
  success: "bg-success dark:bg-gray-900   h-[30px]  w-full border-gray-200 dark:border-gray-600",
  dark: "bg-dark dark:bg-gray-900   h-[30px]  w-full border-gray-200 dark:border-gray-600",
  error: "bg-error dark:bg-gray-900   h-[30px]  w-full border-gray-200 dark:border-gray-600",
  accent:"bg-accent dark:bg-gray-900   h-[30px]  w-full border-gray-200 dark:border-gray-600",
  warning: "bg-warning dark:bg-gray-900   h-[30px]  w-full border-gray-200 dark:border-gray-600",
  secondary: "bg-secondary dark:bg-gray-900  h-[30px]  w-full border-gray-200 dark:border-gray-600",
})
const getColor = (color) => {
  return colors.value[color] || colors.value.primary;
}
defineProps({
    text:String,
    title: String,
    icon: String,
    color:String
})
const emit = defineEmits('onClose')


</script>

<style lang="css" scoped>
  .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>