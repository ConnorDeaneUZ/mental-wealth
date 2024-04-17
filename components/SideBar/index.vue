<template>
  <section class="flex hidden lg:flex h-screen">
    <div class="relative bg-green-400 h-full w-[16px]"></div>
    <div
      class="relative z-10 h-full w-[300px] right-side-shadow flex flex-col items-center"
    >
    <img class="h-28" src="/public/mental-wealth.svg" alt="">

      <div class="mt-8 text-center space-y-8">
        <button
          v-for="(section, index) in sections"
          class="font-bold w-full py-2 rounded-3xl duration-300"
          :class="getActive(index) ? 'bg-green-400 text-white' : 'text-black'"
          @click="updateSection(section.id, index)"
        >
          {{ section.title }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStore } from "~/store/useStore";

const sections = ref();

sections.value = [
  {
    title: "Journal",
    id: 1,
  },
  {
    title: "Mood tracker",
    id: 2,
  },
];

const activeIndex = ref(0);
function updateSection(id: number, index: number) {
  const store = useStore();

  activeIndex.value = index;

  if (id == 1) {
    store.showFeed = true;
    store.showMood = false;
  } else if (id == 2) {
    store.showMood = true;
    store.showFeed = false;
  }
}

function getActive(index: number) {
  return index === activeIndex.value;
}
</script>

<style>
.right-side-shadow {
  box-shadow: 15px 0 30px -20px rgba(0, 0, 0, 0.1);
}
</style>
