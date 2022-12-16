<template>
  <div class="flex h-full flex-col items-center justify-center">
    <div class="flex h-[300px] w-[600px] flex-wrap items-center justify-center gap-12">
      <NuxtLink :to="localePath('/')"><PageBox name="Feature" /></NuxtLink>
      <NuxtLink :to="localePath('/')"><PageBox name="Navigation" /></NuxtLink>
      <NuxtLink :to="localePath('/settings')"><PageBox name="Settings" /></NuxtLink>
    </div>
  </div>
</template>
