<script>
  import ClientsContent from "./ClientsContent.vue";
  import TrendsContent from "./TrendsContent.vue";

  export default {
    components: {
      ClientsContent,
      TrendsContent,
    },
  };
</script>

<template>
  <div
    class="flex flex-col md:flex-row md:justify-between md:gap-7 md:items-center mt-10 mb-5"
  >
    <ClientsContent />
    <TrendsContent />
  </div>
</template>

<style scoped></style>
