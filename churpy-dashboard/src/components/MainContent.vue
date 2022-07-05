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
      <div class="content-footer mt-40 flex justify-between">
        <p>Churpy Admin Console</p>
        <p><span>Powered by </span>Churpy Inc.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .content-wrapper {
    background-color: #1f3162;
  }

  .content-footer {
    color: #1f3162;
    margin-bottom: 0 !important;
  }
  span {
    color: #a1a6ad;
  }
</style>
