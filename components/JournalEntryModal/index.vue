<template>
    <client-only>
        <section>
          <div class="fixed inset-0 z-[100] bg-black/75"></div>
      
        <div
            class="fixed overflow-hidden py-12 px-8 flex flex-col justify-end z-[1000] top-5 left-5 right-5 bottom-5 lg:top-[150px] lg:left-[150px] lg:right-[150px] lg:bottom-[150px] bg-white rounded-xl shadow-2xl"
          >
            <button
              @click="closeModal"
              class="absolute w-6 h-6 text-white bg-red-600 rounded-full right-4 top-4"
            >
              X
            </button>
      
            <div class="flex flex-col justify-center h-full">
              <input
                type="input"
                placeholder="Title"
                class="w-full mb-8 resize-none focus:outline-none"
                v-model="heading"
              />
              <textarea
                placeholder="What's on your mind?..."
                class="w-full h-full resize-none focus:outline-none"
                v-model="message"
              />
              <div class="mt-2 text-sm" :class="{
                'text-green-600': positiveWordCount > negativeWordCount,
                'text-red-600': negativeWordCount > positiveWordCount,
                'text-gray-400': positiveWordCount === negativeWordCount
                }">{{ sentimentFeedback }}</div>
            </div>
            <div class="flex justify-end w-full">
              <button
              v-if="!showDelete"
                class="bg-[#123524] px-8 py-2 rounded-3xl uppercase font-bold text-white hover:shadow-lg duration-300"
                @click="buildMessage"
              >
                Post
              </button>
              <button
              v-if="showDelete"
                class="px-8 py-2 ml-4 font-bold text-white uppercase duration-300 bg-red-400 rounded-3xl hover:shadow-lg"
                @click="deletePost(id)"
              >
                Delete
              </button>
            </div>
          </div>
        </section>
    </client-only>
  </template>
  
  <script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useStore } from "~/store/useStore";
import { useJournal } from "~/composables/useJournal";
import { analyzeSentiment } from '~/composables/useAnalysis';

const store = useStore();
const { insertData, fetchSingle, deletePost } = useJournal();

const heading = ref('');
const message = ref('');
const showDelete = ref(false);
const id = ref();
const sentimentFeedback = ref('Type something to see sentiment analysis...');

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

const positiveWordCount = ref(0);
const negativeWordCount = ref(0);

async function analyse() {
    const { positiveCount, negativeCount } = await analyzeSentiment(message.value);
    positiveWordCount.value = positiveCount;
    negativeWordCount.value = negativeCount;
    updateSentimentFeedback();
}

function updateSentimentFeedback() {
  if (positiveWordCount.value > negativeWordCount.value) {
    sentimentFeedback.value = 'Your entry seems positive!';
  } else if (negativeWordCount.value > positiveWordCount.value) {
    sentimentFeedback.value = 'Your entry seems negative. Do you want to talk about it?';
  } else {
    sentimentFeedback.value = 'Your entry seems neutral.';
  }
}

watch(message, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    analyse();
  }
});

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

