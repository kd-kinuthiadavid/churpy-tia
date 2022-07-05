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
    <div class="flex flex-col mt-3 mb-3 gap-y-1">
      <div class="trend-footer-title flex justify-start items-center gap-x-3">
        <p>Your sales trend</p>
        <i class="fa-solid text-sm fa-angle-right"></i>
      </div>
      <div class="flex flex-wrap gap-y-1 justify-between items-center">
        <small>Gathered from periodical sales operations</small>
        <button class="text-white px-2 py-1 rounded">
          View Sales <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .trends-title-highlight {
    color: #4ed582;
  }

  small {
    color: #a1a6ad;
  }

  .trend-footer-title {
    color: #1f3162;
  }

  button {
    background-color: #4ed582;
  }
</style>
