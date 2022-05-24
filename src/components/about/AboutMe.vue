<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: "Front-end developer with proven experience in javascript frameworks such as vue and react, angularjs as well. Looking forward to improving my abilities in new techs and also being open to new experiences. I started coding in 2016. I chose to be a front-end developer as it is combining art and logic. I used to painting or searching on the internet in my spare time:)",
        },
        {
          id: 2,
          bio: "-willing to work and know about new technologies and share them with my teammates.",
        },
        {
          id: 3,
          bio: "-enthusiasm for team working.",
        },
        {
          id: 4,
          bio: "-open to accepting criticism in order to improve. ",
        },
        {
          id: 5,
          bio: "-friendly and flexible.",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img
        src="@/assets/images/profile.jpeg"
        class="rounded-xl w-96"
        alt=""
      />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
