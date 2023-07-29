<template>
  <ul>
    <li
      v-for="(des, i) of description"
      :key="`des-${i}`"
      class="description-container"
    >
      <h3>
        {{ des.company }}
      </h3>
      <div>
        <span class="summary">Summary</span>
        <p v-html="des.summary"></p>
        <Project
          v-for="(project, j) of des.projects"
          :key="`project-${i}-${j}`"
          :project="project"
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Project from "./Project.vue";
export default {
  props: {
    description: { type: Array },
  },
  components: {
    Project,
  },
};
</script>

<style scoped>
.description-container {
  display: flex;
}

.description-container > :nth-child(1) {
  flex: 0.2;
  font-size: 24px;
}
.description-container > :nth-child(2) {
  flex: 0.8;
}

.summary {
  font-weight: bold;
}
</style>
