<script></script>
<template>
  <div class="flex mx-10 sm:my-5 justify-between items-center cursor-pointer">
    <i class="sm:hidden fa-solid fa-bars p-0 m-0 text-2xl"></i>
    <img
      class="invisible sm:visible w-24 h-24"
      src="./../assets/images/churpy.svg"
    />
    <div class="invisible sm:visible flex items-center gap-4">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input class="rounded-lg px-5 py-2" type="search" name="dashboard-search" id="search" placeholder="search tickets, sales and clients" />
    </div>
    <div class="flex gap-8 items-center">
        <i class="fa-solid fa-bell p-0 m-0 text-2xl cursor-pointer"></i>
        <img class="w-14 h-14 rounded-full" src="./../assets/images/avatar.svg" alt="User profile avatar" />
    </div>
</div>
<div class="sm:invisible flex justify-center items-center gap-4">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input class="rounded-lg px-5 py-2" type="search" name="dashboard-search" id="search" placeholder="search tickets, sales and clients" />
    </div>
</template>


<style></style>