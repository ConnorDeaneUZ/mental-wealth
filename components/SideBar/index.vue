<template>
  <section class="flex hidden lg:flex h-screen">
    <div class="relative bg-green-400 h-full w-[16px]"></div>
    <div
      class="relative z-10 h-full w-[300px] right-side-shadow flex flex-col items-center"
    >
      <img class="h-28" src="/logo.png" />

      <div class="mt-8 text-center space-y-8">
        <p class="font-bold bg-green-400 text-white px-12 py-2 rounded-3xl">
          Journal
        </p>
        <p class="font-bold bg-green-400 text-white px-12 py-2 rounded-3xl">
          Mood Tracker
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style>
.right-side-shadow {
  box-shadow: 15px 0 30px -20px rgba(0, 0, 0, 0.1);
}
</style>
