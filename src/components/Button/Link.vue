<template>
<a :href="to" v-if="to" v-bind="$attrs" >
    <slot/>
</a>
</template>


<script setup>
defineProps(['to'])
</script>