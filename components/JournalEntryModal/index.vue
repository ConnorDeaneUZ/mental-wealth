<template>
  <section>
    <div class="fixed inset-0 z-[100] bg-black/75"></div>

    <div
      class="fixed z-[1000] top-5 left-5 right-5 bottom-5 lg:top-[150px] lg:left-[150px] lg:right-[150px] lg:bottom-[150px] bg-white rounded-xl shadow-2xl"
    >
      <button
        @click="closeModal"
        class="absolute right-4 top-4 bg-slate-400 h-8 w-8 rounded-full text-white"
      >
        X
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStore } from "~/store/useStore.ts";

function closeModal() {
  const store = useStore();
  store.showModal = false;
}
</script>
