<script>
  import ContentHeader from "./ContentHeader.vue";
  import ContentStats from "./ContentStats.vue";

  export default {
    components: {
      ContentHeader,
      ContentStats,
    },
  };
</script>

<template>
  <div>
    <ContentHeader />
    <ContentStats />
  </div>
</template>
