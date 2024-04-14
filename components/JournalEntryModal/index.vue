<template>
  <section>
    <div class="fixed inset-0 z-[100] bg-black/75"></div>

    <div
      class="fixed overflow-hidden py-12 px-8 flex flex-col justify-end z-[1000] top-5 left-5 right-5 bottom-5 lg:top-[150px] lg:left-[150px] lg:right-[150px] lg:bottom-[150px] bg-white rounded-xl shadow-2xl"
    >
      <button
        @click="closeModal"
        class="absolute right-4 top-4 bg-red-400 h-8 w-8 rounded-full text-white"
      >
        X
      </button>

      <div class="bg-red-500 flex justify-center h-full">
        <textarea
          placeholder="What's on your mind?..."
          class="h-full w-full focus:outline-none resize-none"
          type="text"
          v-model="newMessage"
        />
      </div>
      <div class="w-full flex justify-end">
        <button
          class="bg-green-400 px-8 py-2 rounded-3xl uppercase font-bold text-white hover:shadow-lg duration-300"
          @click="insertData(newMessage)"
        >
          post
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStore } from "~/store/useStore";
import { useJournal } from "~/composables/useJournal";

const newMessage = ref();
const { insertData } = useJournal();

function closeModal() {
  const store = useStore();
  store.showModal = false;
}
</script>
