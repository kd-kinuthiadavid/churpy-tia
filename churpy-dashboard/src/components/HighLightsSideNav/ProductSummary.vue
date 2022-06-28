<script>
  import ProductPerformanceItem from "./ProductPerformanceItem.vue";
  export default {
    data() {
      return {
        productItems: [
          {
            id: 1,
            title: "Churpy Trade Finance",
            summary: "2098 transactions",
            monthlyStats: "400K/mo",
            progressVal: 50,
          },
          {
            id: 2,
            title: "Churpy Reconcilliation",
            summary: "58 Clients",
            monthlyStats: "1.18M/mo",
            progressVal: 80,
          },
          {
            id: 3,
            title: "Churpy FinData",
            summary: "2000 requests/mo",
            monthlyStats: "80k/mo",
            progressVal: 60,
          },
        ],
      };
    },
    components: { ProductPerformanceItem },
  };
</script>

<template>
  <div class="text-white pl-10 mt-10">
    <h2 class="text-xl">Product Performance</h2>
    <ProductPerformanceItem
      v-for="product in productItems"
      :key="product.id"
      :title="product.title"
      :summary="product.summary"
      :monthlyStats="product.monthlyStats"
      :progressVal="product.progressVal"
    />
  </div>
</template>

<style></style>
