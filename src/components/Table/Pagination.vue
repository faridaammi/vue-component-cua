

<script setup >
 import Button from "../Button/Button.vue"
defineProps({
   links: {
     type:Array
   }
 })


</script> 
<template>
 <nav class="flex items-center gap-x-1" v-bind="$attrs" v-if="links.length > 3">
  <ul  v-bind="$attrs" class=" inline-flex -space-x-px text-base h-10">
    <template v-for="(link, k) in links" :key="k" >
      <div class="flex items-center gap-x-1">
        <div v-if="link.url === null" class=" flex items-center gap-x-1" v-html="link.label" />
        <div v-else >
          <a 
            class="flex flex-row justify-center items-center  text-gray-800 hover:bg-gray-100 py-2 px-3 m-0.5 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-light dark:hover:bg-white/10 dark:focus:bg-white/10" 
            :class="{ 'rounded-l-lg': k === 0, 'rounded-r-lg': k === links.length - 1, 'text-white bg-primary': link.active }" 
            :href="link.url" v-html="link.label" />
        </div>
      </div>
      
      
    </template>
  </ul>
</nav>
</template>
 