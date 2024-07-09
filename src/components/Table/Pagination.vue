<script setup>
defineProps({
  type: {
    type: String,
    default: "a"
  },
  links: {
    type: Array
  }
})


</script>
<template>


  <!-- Pagination -->
  <nav class="flex items-center -space-x-px" v-bind="$attrs" v-if="links.length > 3">
    <template v-for="(link, k) in links" :key="k">
      <button v-if="link.url === null" v-html="link.label" disabled="true" type="button"
        class="me-2 min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 border border-gray-200 py-2 px-3 text-sm rounded-s-lg rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:border-neutral-700 dark:text-white dark:focus:bg-neutral-500"
        aria-current="page" />
      <div v-else class="!me-2">
        <component :is="type" :href="link.url">
          <button type="button" v-html="link.label"
            class="min-h-[38px]  bg-white min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-s-lg rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            :class="{ 'rounded-l-lg': k === 0, 'rounded-r-lg': k === links.length - 1, '!text-white !bg-primary hover:bg-gray-100 hover:text-black': link.active }" />
        </component>
      </div>

    </template>

  </nav>
  <!-- End Pagination -->
</template>