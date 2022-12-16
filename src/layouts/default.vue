<script setup lang="ts">
const panelHidden = ref(false);
</script>

<template>
  <div class="font-inter relative min-h-screen bg-transparent">
    <div class="absolute z-50 h-full transition-all" :class="panelHidden ? '-translate-x-[350px]' : '-translate-x-0'">
      <div class="flex h-full items-center">
        <div class="h-full min-w-[350px] border-4 border-blue-300 bg-blue-100">
          <div class="border-b-4 border-blue-300 bg-blue-200 p-2">
            <p class="text-center text-2xl font-semibold text-blue-400">Connected devices</p>
          </div>
        </div>
        <div class="flex h-12 w-3 items-center rounded-r-full bg-blue-300" @click="panelHidden = !panelHidden">
          <div class="h-10 w-2 rounded-r-full bg-blue-200" />
        </div>
      </div>
    </div>
    <div class="absolute h-full w-full">
      <slot />
    </div>
  </div>
</template>
