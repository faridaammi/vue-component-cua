<script setup>
import { ref } from "vue";

defineProps({
    type:String,
    text:String,
    src:String,
    alt:String,
    size:String,
    rounded:String,
})
const sizes = ref({
  xs : "w-6 h-6",
  sm : "w-8 h-8",
  md : "w-12 h-12",
  lg : "w-20 h-20",
  xl : "w-36 h-36",
})
const rounds = ref({
  xs : " border rounded-xs",
  sm : " border rounded-sm",
  md : " border rounded-md",
  lg : " border rounded-lg",
  xl : " border rounded-xl",
  full:" border rounded-full",
})

const getSize = (size) => {
  return sizes.value[size] || sizes.value.md;
}

const getRound = (rounded) => {
  return rounds.value[rounded] || rounds.value.md;
}
function getInitials(text) {
    const words = text.split(' '); // Split the input text into words
    let initials = '';

    if (words.length == 1) {
         // If there's only one word, get the first two letters
        initials = words[0].substring(0, 2);
    } else  { 
      
         // If there are multiple words, get the first letter of each word
        initials =words[0].substring(0, 1)+""+words[1].substring(0, 1);
    }

    return initials.toUpperCase(); // Convert to uppercase before returning
}

</script>
<template>
   <div >
     <img v-if="type === 'img'" :class="[getSize(size),getRound(rounded)]"  :src="src" :alt="alt"  v-bind="$attrs">

    <div  v-bind="$attrs" v-else :class="[getSize(size),getRound(rounded),'relative  inline-flex  items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600']">
        <span class="font-medium text-gray-600 uppercase dark:text-gray-300">{{ getInitials(text) }}</span>
    </div>

   </div>
</template>

<style lang="scss" scoped>

</style>