<script>
  import MainContent from "./components/MainContent.vue";
  import IconsNav from "./components/IconsNav.vue";

  export default {
    components: {
      MainContent,
      IconsNav,
    },
  };
</script>

<template>
  <!-- <NavBar /> -->
  <div class="appWrapper h-screen flex overflow-y-scroll">
    <IconsNav />
    <MainContent />
  </div>
</template>

<style scoped>
  .appWrapper {
    background-color: #13224a;
  }
</style>
