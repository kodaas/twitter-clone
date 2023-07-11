<script setup>
const { twitterBorderColour, defaultTransition } = useTailwindConfig();
</script>

<template>
  <div
    class="p-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300 border-b"
    :class="[twitterBorderColour, defaultTransition]"
  >
    <slot />
  </div>
</template>
