<template lang="">
   
   <div class="dark:bg-dark-mode" >
        <div class="container mx-auto">
            <article class="px-12 py-6" id="section-1">
                <header class="">
                    <h1 class="text-6xl text-dark font-bold text-center dark:text-light">Components</h1>
                </header>
            
                <!-- BUTTON -->
                <section class="mt-8 mb-4" id="item-1-1">
                    <h2 class="text-3xl text-dark font-semibold dark:text-light">Button</h2>

                    <p class="text-dark  dark:text-light py-4">The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.</p>
                            <div class="flex flex-wrap flex-row">
                                <Button class="m-2 w-full" startIcon="pi-plus" color="secondary" >Secondary</Button>
                                <Button class="m-2">Primary</Button>
                                <Button class="m-2" startIcon="pi-credit-card" color="light" disabled>LIGHT</Button>
                                <Button class="m-2" endIcon="pi-arrow-right-arrow-left" color="dark" :isLoading="flase">Dark</Button>
                                <Button class="m-2" startIcon="pi-plus" color="secondary" >Secondary</Button>
                                <Button class="m-2" startIcon="pi-download" :isLoading="isLoading"  type="submit" color="success">Success</Button>
                                <Button class="m-2" endIcon="pi-plus" color="accent"  :isLoading="true">Accent</Button>
                                <Button class="m-2" startIcon="pi-plus" color="error" :is-loading="false">Error</Button>
                                <Button class="m-2" startIcon="pi-heart-fill" color="warning">warning</Button>
                            </div>
                            
                    
                </section>
</article>
</div>
</div>
</template>
<script setup>
import DateInput from './components/Input/DateInput.vue';
import Button from './components/Button/Button.vue';
</script>
<style lang="">
    
</style>