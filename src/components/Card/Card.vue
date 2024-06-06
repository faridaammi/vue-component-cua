
<script setup>
 
</script>


<template>
    <div  v-bind="$attrs" class="block p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
       <header class="pb-3">
         <slot name="header"></slot>
       </header>
       
       <main class="pb-3">
            <slot name="body" > </slot>
       </main>
       <footer >
        <slot name="footer"> </slot>
       </footer>
       <slot/>
      
   
    </div>

</template>


<style>


</style>