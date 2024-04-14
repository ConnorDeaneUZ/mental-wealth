<template>
  <section
    class="relative w-36 h-36 bg-white rounded-md shadow-md hover:shadow-xl duration-300 flex flex-col items-center justify-center cursor-pointer"
  >
    <div>
      <p class="capitalize text-lg font-medium">{{ heading }}</p>
    </div>
    <div class="absolute bottom-0 bg-green-400 w-full h-2 rounded-b-md"></div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ heading: string }>();
</script>
