<template>
  <div class="flex h-full">
    <side-bar />

    <feed-container />

    <journal-entry-modal v-if="store.showModal" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "~/store/useStore.ts";
const store = useStore();
</script>
