<template>
  <div class="flex w-full h-screen p-12 space-x-8">
    <new-feed-card @click="openModal" />
    <div v-for="(item, index) in entries" :key="index">

      <feed-card @click="openModal(item.id)" :heading="item.heading" />

    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "~/store/useStore";
import { useJournal } from "~/composables/useJournal";

const { entries, deletePost } = useJournal();

function openModal(id: string) {
  const store = useStore();
  store.entryId = id
  store.showModal = true;
}
</script>
