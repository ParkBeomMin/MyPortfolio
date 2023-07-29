<template>
  <div>
    <h1 class="line">{{ title }}</h1>
    <p v-html="content" />
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "" },
    content: { type: String, default: "" },
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
}

.line {
  width: 100%;
  margin: 20px 0px;
  border-bottom: 2px dotted gray;
  padding-bottom: 10px;
}

::v-deep b {
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  border-radius: 4px;
  padding: 2px;
  -webkit-print-color-adjust: exact;
}
</style>
