<template>
  <div
    class="bg-[#f9f9f9] p-12 w-full grid grid-cols-2 lg:grid-cols-4 h-full gap-8"
  >
    <new-feed-card @click="openModal" />
    <div v-for="(item, index) in entries" :key="index">
      <feed-card />
    </div>

    <!-- <input type="text" v-model="newMessage" />
    <button @click="insertData()">post</button> -->
  </div>
</template>

<script setup lang="ts">
import { useStore } from "~/store/useStore.ts";
const supabase = useSupabaseClient();
const entries = ref();

onMounted(async () => {
  await fetchData();
});

const fetchData = async () => {
  let { data, error } = await supabase.from("journal").select();
  entries.value = data;
};

const deletePost = async (item) => {
  const { data, error } = await supabase
    .from("journal")
    .delete()
    .match({ id: item });
  fetchData();
};

const newMessage = ref();
const insertData = async () => {
  const { data, error } = await supabase
    .from("journal")
    .insert([{ entry: newMessage.value }]);

  newMessage.value = "";
  fetchData();
};

function openModal() {
  const store = useStore();
  store.showModal = true;
}
</script>
