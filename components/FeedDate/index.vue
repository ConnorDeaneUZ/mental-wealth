<template>
  <div class="h-60 flex flex flex-col justify-center p-12">
    <div class="flex mb-8">
      <p class="text-5xl font-bold">{{ currentDate.day }}</p>
      <div class="font-thin ml-2">
        <p>{{ currentDate.weekday }}</p>
        <p>{{ currentDate.month }} {{ currentDate.year }}</p>
      </div>
    </div>
    <div>
      <p class="font-thin italic">"Do or do not, there is no try."</p>
      <span class="italic font-thin">- Yodo</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentDate = ref({
  day: "",
  weekday: "",
  month: "",
  year: "",
});

onMounted(() => {
  const populateCurrentDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const parts = new Intl.DateTimeFormat("en-US", options).formatToParts(now);

    const dateParts = parts.reduce((acc, part) => {
      if (part.type !== "literal") {
        acc[part.type] = part.value;
      }
      return acc;
    }, {} as Record<string, string>);

    currentDate.value = {
      day: dateParts.day,
      weekday: dateParts.weekday,
      month: dateParts.month,
      year: dateParts.year,
    };
  };

  populateCurrentDate();
});
</script>
