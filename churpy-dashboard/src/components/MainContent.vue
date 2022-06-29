<script>
  import HighLightsNav from "./HighLightsNav.vue";
  import NavBar from "./NavBar.vue";
  import ContentDetail from "./MainContentDetail/ContentDetail.vue";

  export default {
    components: {
      HighLightsNav,
      NavBar,
      ContentDetail,
    },
  };
</script>

<template>
  <div
    class="content-wrapper w-11/12 bg-purple-900 my-5 rounded flex overflow-y-scroll"
  >
    <HighLightsNav />
    <div class="bg-white rounded-2xl shadow-2xl p-10 overflow-y-scroll w-full">
      <NavBar />
      <ContentDetail />
    </div>
  </div>
</template>

<style scoped>
  .content-wrapper {
    background-color: #1f3162;
  }
</style>
