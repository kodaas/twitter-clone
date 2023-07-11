<script setup>
const WhatsHappingItems = ref([
  {
    tittle: "Space X",
    count: "18.8k Tweets",
  },

  {
    tittle: "#CoddingIsFun",
    count: "18.8k Tweets",
  },

  {
    tittle: "Space X",
    count: "18.8k Tweets",
  },

  {
    tittle: "#ArtForall",
    count: "18.8k Tweets",
  },
]);

const WhoToFollowItems = ref([
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    img: "https://picsum.photos/200/200",
  },
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    img: "https://picsum.photos/200/200",
  },
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    img: "https://picsum.photos/200/200",
  },
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    img: "https://picsum.photos/200/200",
  },
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    img: "https://picsum.photos/200/200",
  },
]);
</script>

<template>
  <div class="flex flex-col">
    <!-- Preview Card: Whats Happening -->
    <SidebarRightPreviewCard title="What's Happening">
      <SidebarRightPreviewCardItem v-for="item of WhatsHappingItems">
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ item.tittle }}
          </h2>

          <p class="text-xs text-gray-400">{{ item.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!-- Preview Card: Who to Follow -->
    <SidebarRightPreviewCard title="Who To Follow">
      <SidebarRightPreviewCardItem v-for="item of WhoToFollowItems">
        <div class="flex flex-row justify-between items-center p-2">
          <div class="flex flex-row">
            <img
              :src="item.img"
              :alt="item.name"
              class="h-10 w-10 rounded-full"
            />

            <div class="flex flex-col ml-2">
              <h3 class="text-sm text-gray-900 font-bold dark:text-white">
                {{ item.name }}
              </h3>
              <p class="text-xs text-gray-400">{{ item.handle }}</p>
            </div>
          </div>

          <div class="flex h-full">
            <button
              class="px-4 py-2 font-bold text-xs text-white data:text-black bg-black dark:bg-white rounded-full"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>
