<script>
  // https://vuejs.org/guide/essentials/component-basics.html#passing-props
  export default {
    props: ["title", "summary", "monthlyStats", "progressVal"],
  };
</script>

<template>
  <div class="muted-text flex flex-col mr-2 mb-4">
    <div class="text-inherit flex justify-between items-center">
      <small class="text-inherit text-lg">{{ title }}</small>
      <small class="text-inherit text-lg">{{ monthlyStats }}</small>
    </div>
    <small class="text-inherit text-md">{{ summary }}</small>
    <progress
      class="mt-1 rounded h-1 product-progress"
      name="progress"
      id="progress"
      max="100"
      :value="progressVal"
    />
  </div>
</template>

<style scoped>
  /* adapted from https://stackoverflow.com/a/18368275/10774498 */
  progress::-moz-progress-bar {
    background: #4dff91;
  }
  progress::-webkit-progress-value {
    background: #4dff91;
  }
  progress {
    color: #4dff91;
  }
</style>
