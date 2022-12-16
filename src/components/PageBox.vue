<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
});
</script>

<template>
  <div class="h-28 w-64 rounded-3xl bg-black/20 p-8 transition-transform hover:-translate-y-2">
    <div class="flex items-center justify-center">
      <p class="text-4xl font-semibold">{{ name }}</p>
    </div>
  </div>
</template>
