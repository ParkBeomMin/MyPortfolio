<template>
  <div>
    <projects-detail
      style="height: 1280px; margin: auto"
      v-for="(project, i) in projects"
      :key="i"
      :project="project"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProjectsDetail from "~/components/projects/ProjectsDetail";
export default {
  components: {
    ProjectsDetail,
  },
  computed: {
    ...mapState(["projects"]),
  },
};
</script>

<style scoped>
@page {
  size: A4 landscape;
}
</style>
