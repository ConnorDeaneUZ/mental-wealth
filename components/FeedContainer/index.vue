<template>
  <div class="bg-[#f9f9f9] w-full">
    <div v-for="(item, index) in entries" :key="index">
      <p>{{ item.entry }}</p>

      <button @click="deletePost(item.id)">delete</button>
    </div>

    <input type="text" v-model="newMessage" />
    <button @click="insertData()">post</button>
  </div>
</template>

<script setup lang="ts">
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
</script>
