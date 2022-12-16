<template>
  <div class="flex h-12 w-full items-center bg-blue-200 px-2">
    <NuxtLink v-if="$route.path !== localePath('/')" :to="localePath('/')">
      <Icon class="text-4xl" name="ic:baseline-arrow-back" />
    </NuxtLink>
  </div>
</template>
