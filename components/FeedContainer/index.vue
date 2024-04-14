<template>
  <div class="w-full h-screen p-12 flex space-x-8">
    <new-feed-card @click="openModal" />
    <div v-for="(item, index) in entries" :key="index">
      <feed-card @click="openModal()" />

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
