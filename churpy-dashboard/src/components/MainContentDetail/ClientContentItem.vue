<script>
  export default {
    props: ["initials", "name", "clientStat", "moreInfo"],
  };
</script>

<template>
  <div
    class="rounded-md shadow-md flex flex-wrap gap-5 justify-between items-center text-lg font-light tracking-tight text-inherit px-5 py-4"
  >
    <div
      class="flex flex-wrap justify-center gap-3 items-center text-inherit font-semibold"
    >
      <h1 class="px-4 py-3 rounded-full client-avatar">
        {{ initials }}
      </h1>
      <h1>{{ name }}</h1>
    </div>

    <div
      class="flex flex-wrap justify-center gap-3 items-center text-inherit font-semibold"
    >
      <h1 class="client-content-item-stats">
        {{ clientStat }}
      </h1>
      <p class="font-light text-sm">{{ moreInfo }}</p>
    </div>
  </div>
</template>

<style scoped>
  .client-avatar {
    border: 2px solid #4ed582;
  }

  .client-content-item-stats {
    color: #4ed582;
  }
</style>
