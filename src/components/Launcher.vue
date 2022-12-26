<script setup lang="ts">
defineProps({
  label: { type: String, required: true },
  icon: { type: String, default: "ic:baseline-web-asset" },
});
</script>

<template>
  <button class="group flex h-32 w-32 flex-col items-center justify-center">
    <span class="h-10 w-10 transition-all group-hover:h-14 group-hover:w-14">
      <Icon class="h-full w-full" :name="icon" />
    </span>
    <span class="font-bold">{{ label }}</span>
  </button>
</template>
