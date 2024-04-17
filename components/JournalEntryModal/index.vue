<template>
    <section>
      <div class="fixed inset-0 z-[100] bg-black/75"></div>
  
      <div
        class="fixed overflow-hidden py-12 px-8 flex flex-col justify-end z-[1000] top-5 left-5 right-5 bottom-5 lg:top-[150px] lg:left-[150px] lg:right-[150px] lg:bottom-[150px] bg-white rounded-xl shadow-2xl"
      >
        <button
          @click="closeModal"
          class="absolute right-4 top-4 bg-blue-400 h-8 w-8 rounded-full text-white"
        >
          X
        </button>
  
        <div class="flex flex-col justify-center h-full">
          <input
            type="input"
            placeholder="Title"
            class="focus:outline-none resize-none mb-8 w-full"
            v-model="heading"
          />
          <textarea
            placeholder="What's on your mind?..."
            class="h-full w-full focus:outline-none resize-none"
            v-model="message"
          />
        </div>
        <div class="w-full flex justify-end">
          <button
          v-if="!showDelete"
            class="bg-green-400 px-8 py-2 rounded-3xl uppercase font-bold text-white hover:shadow-lg duration-300"
            @click="buildMessage"
          >
            Post
          </button>
          <button
          v-if="showDelete"
            class="bg-red-400 px-8 py-2 ml-4 rounded-3xl uppercase font-bold text-white hover:shadow-lg duration-300"
            @click="deletePost(id)"
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useStore } from "~/store/useStore";
  import { useJournal } from "~/composables/useJournal";
  
  const store = useStore();
  const { insertData, fetchSingle, deletePost } = useJournal();
  
  const heading = ref('');
  const message = ref('');
  const showDelete = ref(false)
  const id = ref();
  
  function closeModal() {
    store.showModal = false;
  }
  
  function buildMessage() {
    const builtMessage = {
      title: heading.value,
      body: message.value,
    };
    insertData(builtMessage);
  }

  onMounted(async () => {
      if (store.entryId) {
          id.value = store.entryId;
          const single = await fetchSingle(id.value);
          if (single) {
              message.value = single.entry;
              heading.value = single.heading;
              showDelete.value = true;
          }
      }
  });
  </script>
