<template>
  <div class="font-inter relative min-h-screen bg-transparent">
    <div class="absolute flex h-full w-full flex-col">
      <NavBar />
      <div class="h-full w-full grow">
        <slot />
      </div>
    </div>
  </div>
</template>
