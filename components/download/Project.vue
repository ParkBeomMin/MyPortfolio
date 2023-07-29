<template>
  <div class="project-container">
    <h3>{{ project.title }}</h3>
    <span>{{ project.date }}</span>
    <span>{{ project.skill }}</span>
    <ul>
      <li
        v-for="(content, i) of project.content"
        :key="`${project.title}-${i}`"
      >
        <p v-html="content"></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    project: { type: Object },
  },
};
</script>

<style scoped>
.project-container {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}

h3 {
  font-weight: bold;
}

span {
  font-size: 14px;
}
</style>
