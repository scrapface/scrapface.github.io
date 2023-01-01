<script setup lang="ts">
import { invoke } from "@tauri-apps/api/tauri";
import { emit, listen } from "@tauri-apps/api/event";
import { appWindow } from "@tauri-apps/api/window";

const navigation = [
  { name: "editor", icon: "ic:baseline-post-add", label: "Editor", href: "/editor" },
  { name: "scenes", icon: "ic:baseline-ondemand-video", label: "Scenes", href: "/scenes" },
  { name: "settings", icon: "ic:outline-settings", label: "Settings", href: "/settings" },
];

// Handle events and listeners.
const onNavigate = (href: string) => emit("navigate", { href });
const unlisten = await listen("navigate", (event) => {
  if (appWindow.label === "main") {
    const { href } = event.payload as { href: string };

    const router = useRouter();
    router.push(href);
  }
});

onMounted(() => invoke("open_launcher"));
onUnmounted(() => {
  invoke("close_launcher");
  unlisten();
});
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center">
    <div class="flex flex-wrap items-center justify-center">
      <button v-for="page in navigation" :key="page.name" @click="onNavigate(localePath(page.href))">
        <Launcher :label="page.label" :icon="page.icon" />
      </button>
    </div>
  </div>
</template>
