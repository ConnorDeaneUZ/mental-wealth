<template>
  <div class="flex bg-[#ededed]">
    <side-bar />

    <div>
      <feed-date />
      <feed-container v-if="store.showFeed" />
    </div>

    <journal-entry-modal v-if="store.showModal" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "~/store/useStore";
const store = useStore();
</script>
