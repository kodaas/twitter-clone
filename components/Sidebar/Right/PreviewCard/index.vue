<script setup>
const { twitterBorderColour, defaultTransition } = useTailwindConfig();
const prop = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="m-2 border rounded-2xl bg-gray-50 dark:bg-dim-700 overflow-hidden"
    :class="twitterBorderColour"
  >
    <h1
      class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white"
      :class="twitterBorderColour"
    >
      {{ $props.title }}
    </h1>

    <slot></slot>

    <div
      class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:bg-dim-300"
      :class="defaultTransition"
    >
      Show More
    </div>
  </div>
</template>
