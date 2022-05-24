<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
import projects from "../data/projects";
export default {
  name: "Projects",
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
  },
  data: () => {
    return {
      project: {},
    };
  },
  beforeMount() {
    this.project = projects.find((p) => p.id == this.$route.params.id);
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="project" />
    <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">

      <!-- Project gallery -->
      <ProjectGallery :projectImage="project" />

      <!-- Project information -->
      <ProjectInfo :projectInfo="project" />
    </div>
  </div>
</template>

<style scoped></style>
