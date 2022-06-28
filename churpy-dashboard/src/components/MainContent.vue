<script>
  import HighLightsNav from "./HighLightsNav.vue";

  export default {
    components: {
      HighLightsNav,
    },
  };
</script>

<template>
  <div class="content-wrapper w-11/12 bg-purple-900 my-5 rounded">
    <HighLightsNav />
  </div>
</template>

<style scoped>
  .content-wrapper {
    background-color: #edeef1;
  }
</style>
