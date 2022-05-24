<script>
export default {
  props: ["projectImage"],
};
</script>

<template>
  <div class="mb-10 sm:mb-0">
    <img
      :src="projectImage.img"
      class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
      :alt="projectImage.title"
    />
  </div>
</template>
