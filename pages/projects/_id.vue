<script>
import feather from "feather-icons";
import ProjectRelatedProjects from "../../components/projects/ProjectRelatedProjects.vue";
import ProjectsDetail from "../../components/projects/ProjectsDetail.vue";
export default {
  scrollToTop: true,
  data: () => {
    return {
      // @todo
    };
  },
  computed: {
    project() {
      return this.$store.getters.getProjectById(this.$route.params.id);
    },
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });

    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
  components: { ProjectRelatedProjects, ProjectsDetail },
};
</script>

<template>
  <div class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <projects-detail v-if="project" :project="project" />
    <!-- Load not found components if no project found -->
    <div v-else class="font-general-medium container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
