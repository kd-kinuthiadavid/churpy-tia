<template>
  <div
    class="bg-inherit flex flex-col justify-between gap-y-10 mx-4 my-3 w-1/12"
  >
    <img
      class="h-20 w-20 mt-10 ml-4"
      src="../assets/images/Logo-icon.svg"
      alt="logo"
    />
    <div class="flex flex-col justify-center mb-60 gap-y-10">
      <i
        class="cursor-pointer fa-solid fa-building-columns text-3xl text-white flex justify-center"
      ></i>
      <i
        class="cursor-pointer fa-solid fa-boxes-stacked text-3xl text-white flex justify-center"
      ></i>
      <i
        class="cursor-pointer fa-solid fa-chart-column text-3xl text-white flex justify-center"
      ></i>
      <i
        class="cursor-pointer fa-solid fa-users text-3xl text-white flex justify-center"
      ></i>
    </div>
  </div>
</template>

<style scoped>
  .fa-building-columns {
    color: #4dff91;
  }

  i:hover {
    color: #4dff91;
  }
</style>
