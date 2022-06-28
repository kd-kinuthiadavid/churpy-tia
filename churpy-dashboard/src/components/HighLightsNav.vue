<script>
  import ProfileSummary from "./HighLightsSideNav/ProfileSummary.vue";
  import ProfileActions from "./HighLightsSideNav/ProfileActions.vue";
  import ClientsSummary from "./HighLightsSideNav/ClientsSummary.vue";
  import ProductSummary from "./HighLightsSideNav/ProductSummary.vue";

  export default {
    components: {
      ProfileSummary,
      ProfileActions,
      ClientsSummary,
      ProductSummary,
    },
  };
</script>

<template>
  <div class="highlights-nav-wrapper invisible sm:visible w-4/12 h-full">
    <ProfileSummary />
    <ProfileActions />
    <ClientsSummary />
    <ProductSummary />
  </div>
</template>

<style scoped>
  .highlights-nav-wrapper {
    background-color: #1f3162;
  }

  @media (max-width: 850px) {
    .highlights-nav-wrapper {
      display: none;
    }
  }
</style>
