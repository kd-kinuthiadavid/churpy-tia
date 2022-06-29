<script>
  import ClientContentItem from "./ClientContentItem.vue";
  export default {
    data() {
      return {
        clientsData: [
          {
            id: 1,
            initials: "JZ",
            name: "John Zest",
            clientStat: "2.34M",
            moreInfo: "volume",
          },
          {
            id: 2,
            initials: "CY",
            name: "Company Y",
            clientStat: "1.70M",
            moreInfo: "volume",
          },
          {
            id: 3,
            initials: "CJ",
            name: "Company J",
            clientStat: "1.30M",
            moreInfo: "spent",
          },
        ],
      };
    },
    components: { ClientContentItem },
  };
</script>

<template>
  <div
    class="client-content shadow-2xl rounded mb-3 p-2 flex flex-col gap-3 md:w-1/2 pb-20 h-full"
  >
    <div class="client-content-header flex justify-between items-center m-5">
      <h1 class="text-inherit text-xl font-light tracking-tight">
        Top Clients
      </h1>
      <h1 class="text-inherit text-xl font-light tracking-tight">Show All</h1>
    </div>
    <ClientContentItem
      v-for="client in clientsData"
      :key="client.id"
      :initials="client.initials"
      :name="client.name"
      :clientStat="client.clientStat"
      :moreInfo="client.moreInfo"
    />
  </div>
</template>

<style scoped>
  .client-content {
    color: #1f3162;
  }
</style>
