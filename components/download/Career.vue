<template>
  <div class="career-container">
    <h3>{{ career.company }}</h3>
    <span>{{ career.workDate }}</span>
    <span>{{ career.department }}</span>
    <span>{{ career.description }}</span>
  </div>
</template>

<script>
export default {
  props: {
    career: { type: Object },
  },
};
</script>

<style scoped>
.career-container {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}

.career-container > h3 {
  font-size: 24px;
}
</style>
