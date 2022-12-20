<template>
  <div class="flex h-full items-center gap-4 p-4">
    <div class="h-full min-w-[350px] border-4 border-blue-300 bg-blue-100 text-2xl font-semibold text-blue-400">
      <div class="border-b-4 border-blue-300 bg-blue-200 p-2">
        <p class="text-center">Connected devices</p>
      </div>
      <button class="flex w-full items-center gap-1 p-2 text-xl hover:bg-blue-200">
        <Icon name="ic:baseline-add-circle" />
        <span>Add device</span>
      </button>
    </div>
    <div class="h-full w-full border-4 border-blue-300 bg-blue-100">
      <div class="border-b-4 border-blue-300 bg-blue-200 p-2">
        <p class="text-center text-2xl font-semibold text-blue-400">Configuration</p>
      </div>
    </div>
  </div>
</template>
