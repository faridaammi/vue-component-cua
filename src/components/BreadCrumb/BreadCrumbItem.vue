
<script setup>

defineProps(
    
   {
    icon:{
        type:String
    },
    href:{
        type:String
    },
    title:{
        type:String
    },
    last:{
        type:Boolean,
        default:false
    },
   }
)
</script>


<template>
    

        <!-- hover:font-semibold hover:md:font-medium  -->
    
        <a :href="href"  v-bind="$attrs" class="flex  font-medium  justify-center items-center text-sm  text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <component v-if="icon"  :is="icon" :class="['me-2 pi ', icon ]"/>
                {{title}}
        </a>

    <div class="flex  items-center my-2  me-2" v-if="!last">
         <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg> 

    </div>
  

  

</template>


<style >

</style>
