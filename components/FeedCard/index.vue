<template>
  <section
    class="relative flex flex-col items-center justify-center w-48 h-48 duration-300 bg-white rounded-md shadow-md cursor-pointer hover:shadow-xl"
  >
    <div>
      <p class="text-lg font-medium text-center capitalize">{{ heading }}</p>
    </div>
    <div class="absolute bottom-0 bg-[#123524] w-full h-2 rounded-b-md"></div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ heading: string }>();
</script>
