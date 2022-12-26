<script setup lang="ts">
const navigation = [
  { name: "editor", icon: "ic:baseline-post-add", label: "Editor", href: "/editor" },
  { name: "scenes", icon: "ic:baseline-ondemand-video", label: "Scenes", href: "/scenes" },
  { name: "settings", icon: "ic:outline-settings", label: "Settings", href: "/settings" },
];
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center">
    <div class="flex flex-wrap items-center justify-center">
      <NuxtLink v-for="page in navigation" :key="page.name" :to="page.href">
        <Launcher :label="page.label" :icon="page.icon" />
      </NuxtLink>
    </div>
  </div>
</template>
