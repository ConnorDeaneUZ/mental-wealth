<template>
  <div
    class="bg-[#f9f9f9] p-12 w-full grid grid-cols-2 lg:grid-cols-4 h-full gap-8"
  >
    <new-feed-card @click="openModal" />
    <div v-for="(item, index) in entries" :key="index">
      <feed-card />

      <button @click="deletePost(item.id)">delete</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "~/store/useStore";
import { useJournal } from "~/composables/useJournal";

const { entries, deletePost } = useJournal();

function openModal() {
  const store = useStore();
  store.showModal = true;
}
</script>
