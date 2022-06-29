<script>
  import ContentHeader from "./ContentHeader.vue";
  import ContentStats from "./ContentStats.vue";
  import ClientsAndTrendsContent from "./ClientsAndTrendsContent.vue";

  export default {
    components: {
      ContentHeader,
      ContentStats,
      ClientsAndTrendsContent,
    },
  };
</script>

<template>
  <div class="flex flex-col">
    <ContentHeader />
    <ContentStats />
    <ClientsAndTrendsContent />
  </div>
</template>
