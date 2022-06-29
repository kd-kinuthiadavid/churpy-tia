<script>
  import PeopleStats from "./PeopleStats.vue";
  import AssetStats from "./AssetStats.vue";

  export default {
    components: {
      PeopleStats,
      AssetStats,
    },
  };
</script>

<template>
  <div
    class="flex flex-col md:flex-row md:justify-between md:gap-7 md:items-center my-5"
  >
    <PeopleStats />
    <AssetStats />
  </div>
</template>

<style scoped></style>
