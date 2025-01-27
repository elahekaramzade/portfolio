<script>
import AboutSkillSingle from "./AboutSkillSingle.vue";

export default {
  components: {
    AboutSkillSingle,
  },
  data: () => {
    return {
      heading: "Some of the tech stacks that I worked with",
      skills: [
        {
          id: 1,
          title: "vue",
          img: require("@/assets/images/skills/vue.png"),
        },
        {
          id: 2,
          title: "react",
          img: require("@/assets/images/skills/react.png"),
        },
        {
          id: 3,
          title: "vuenative",
          img: require("@/assets/images/skills/vuenative.png"),
        },
        {
          id: 4,
          title: "nuxtjs",
          img: require("@/assets/images/skills/nuxtjs.png"),
        },
        {
          id: 5,
          title: "pwa",
          img: require("@/assets/images/skills/pwa.png"),
        },

        {
          id: 6,
          title: "tailwind",
          img: require("@/assets/images/skills/tailwind.png"),
        },

        {
          id: 7,
          title: "angularjs",
          img: require("@/assets/images/skills/angularjs.png"),
        },
        {
          id: 8,
          title: "htmlcss",
          img: require("@/assets/images/skills/htmlcss.png"),
        },
        {
          id: 9,
          title: "bootstrap",
          img: require("@/assets/images/skills/bootstrap.png"),
        },
        {
          id: 10,
          title: "git",
          img: require("@/assets/images/skills/git.png"),
        },
        {
          id: 11,
          title: "JavaSript",
          img: require("@/assets/images/skills/js.png"),
        },
        {
          id: 12,
          title: "pinia",
          img: require("@/assets/images/skills/Pinia.png"),
        },
        {
          id: 13,
          title: "redux",
          img: require("@/assets/images/skills/Redux.png"),
        },
        {
          id: 14,
          title: "graphql",
          img: require("@/assets/images/skills/GraphQL.png"),
        }
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
      {{ heading }}
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
      <AboutSkillSingle
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      />
    </div>
  </div>
</template>
