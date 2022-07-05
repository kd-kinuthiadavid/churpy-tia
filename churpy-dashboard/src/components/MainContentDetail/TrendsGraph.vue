<script>
  import Chart from "chart.js";
  import chartData from "../../chart-data.js";

  export default {
    name: "TrendsChart",

    data() {
      return {
        chartData: chartData,
      };
    },
    mounted() {
      const ctx = document.getElementById("trends-chart");
      new Chart(ctx, this.chartData);
    },
  };
</script>

<template>
  <div>
    <canvas id="trends-chart"></canvas>
  </div>
</template>
