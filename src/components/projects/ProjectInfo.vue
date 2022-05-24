<script>
import feather from "feather-icons";

export default {
  props: ["projectInfo"],

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="w-full text-left col-span-2">
    <!-- Single project client details -->
    <div class="mb-7">
      <p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">
        {{ projectInfo.description }}
      </p>

    </div>

  </div>
</template>
