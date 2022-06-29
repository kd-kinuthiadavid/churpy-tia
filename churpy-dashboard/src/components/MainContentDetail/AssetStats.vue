<script></script>

<template>
  <div
    class="asset-stats shadow-2xl rounded mb-3 p-2 flex flex-col gap-3 md:w-1/2"
  >
    <p class="text-inherit">People Stats</p>

    <div class="flex flex-wrap justify-between gap-4 mb-3">
      <div class="flex flex-wrap justify-center items-center gap-2">
        <img
          class="rounded-full w-10 h-10 p-2"
          src="../../assets/images/Tickets icon.svg"
          alt="Tickets Icon"
        />
        <div class="flex flex-wrap flex-col">
          <h1 class="text-2xl font-bold">32 Tickets</h1>
          <small class="text-inherit font-semibold"
            >Unresolved support tickets</small
          >
        </div>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-2">
        <img
          class="rounded-full w-10 h-10 p-2"
          src="../../assets/images/Leads-icon.svg"
          alt="Tickets Icon"
        />
        <div class="flex flex-wrap flex-col">
          <h1 class="text-2xl font-bold">12 Leads</h1>
          <small class="text-inherit font-semibold"
            >Leads from support email</small
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .asset-stats {
    color: #13224a;
  }
</style>
