<script>
export default {
  data: () => {
    return {
      copyrightDate: new Date().getFullYear(),
      author: "Elahe",
    };
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light">
      &copy; {{ copyrightDate }}
      . Developed by
      <span class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500">{{ author }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
