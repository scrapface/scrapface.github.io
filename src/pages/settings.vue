<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocale = computed(() => locales.value.find((i: { code: string }) => i.code !== locale.value));
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center gap-2">
    <ClientOnly>
      <div>
        <span>Switch language to: </span>
        <span class="text-blue-600">
          <NuxtLink :to="switchLocalePath(availableLocale.code)">
            {{ availableLocale.name }}
          </NuxtLink>
        </span>
      </div>
      <div class="flex gap-2">
        <h1>Color mode:</h1>
        <select v-model="$colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="sepia">Sepia</option>
        </select>
      </div>
      <NuxtLink :to="localePath('/')"> <span class="text-red-500">Go back</span> </NuxtLink>
    </ClientOnly>
  </div>
</template>
