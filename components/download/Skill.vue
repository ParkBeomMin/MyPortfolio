<template>
  <div class="skill-container">
    <span>{{ skill.name }}</span>
    <ul>
      <li v-for="(des, i) of skill.description" :key="`${skill.name}-${i}`">
        <p v-html="des" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    skill: { type: Object },
  },
};
</script>

<style scoped>
.skill-container {
  display: flex;
  margin-top: 8px;
}

.skill-container > :nth-child(1) {
  flex: 0.2;
  font-weight: bold;
}

.skill-container > :nth-child(2) {
  flex: 0.8;
  margin-top: 4px;
}
</style>
