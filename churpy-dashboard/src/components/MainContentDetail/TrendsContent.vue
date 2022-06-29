<script>
  import TrendsGraph from "./TrendsGraph.vue";
  export default {
    components: {
      TrendsGraph,
    },
  };
</script>

<template>
  <div
    class="trends-content shadow-2xl rounded mb-3 p-2 flex flex-col gap-3 md:w-1/2 overflow-y-scroll h-full"
  >
    <p class="justify-self-end">
      Show Data:
      <span class="trends-title-highlight"
        >This Week <i class="fa-solid fa-caret-down"></i
      ></span>
    </p>
    <TrendsGraph />
  </div>
</template>

<style scoped>
  .trends-title-highlight {
    color: #4ed582;
  }
</style>
