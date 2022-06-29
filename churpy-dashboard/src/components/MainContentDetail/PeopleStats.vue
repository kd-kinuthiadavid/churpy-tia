<script></script>

<template>
  <div
    class="people-stats rounded mb-3 p-2 flex flex-wrap flex-col gap-3 text-white md:w-1/2"
  >
    <p class="text-inherit">People Stats</p>

    <div class="flex flex-wrap justify-between gap-4 mb-3">
      <div class="flex flex-wrap justify-center items-center gap-2">
        <i class="fa-solid fa-user-shield text-xl px-2 py-2 rounded-full"></i>
        <div class="flex flex-wrap flex-col">
          <h1 class="text-2xl">6 Users</h1>
          <small class="text-inherit">Administrators</small>
        </div>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-2">
        <i class="fa-solid fa-users text-xl p-2 rounded-full"></i>
        <div class="flex flex-wrap flex-col">
          <h1 class="text-2xl">17 Churpy Users</h1>
          <small class="text-inherit">Dev, Sales & Marketing, Support</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .people-stats {
    background-image: linear-gradient(to right, #4ed582, #233b7b);
  }

  i {
    background-color: #4ed582;
  }
</style>
