<template>
  <div>mental wealth</div>

  <div v-for="(item, index) in entries" :key="index">
    <p>{{ item.entry }}</p>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const entries = ref();

onMounted(async () => {
  let { data, error } = await supabase.from("journal").select();

  entries.value = data;
  console.log("hit", data);
});
</script>
