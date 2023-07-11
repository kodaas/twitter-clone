<script setup>
const { defaultTransition } = useTailwindConfig();

const prop = defineProps({
  active: {
    type: Boolean,
    desault: false,
  },
});

const textClasses = computed(() =>
  prop.active ? "font-semibold" : "font-normal"
);
</script>

<template>
  <div>
    <NuxtLink
      to="/home"
      class="flex items-center p-3 w-min hover:bg-gray-200 text-black dark:hover:bg-dim-200 dark:text-white rounded-full gap-x-4 text-xl"
      :class="[defaultTransition, textClasses]"
    >
      <div class="w-6 h-6 text-dark">
        <slot name="icon" />
      </div>
      <div class="hidden xl:block">
        <slot name="name" />
      </div>
    </NuxtLink>
  </div>
</template>
