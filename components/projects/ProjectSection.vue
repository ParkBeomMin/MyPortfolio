<template>
  <div class="w-full text-left mt-10 sm:mt-0">
    <p
      class="
        font-general-medium
        text-primary-dark
        dark:text-primary-light
        text-2xl
        font-bold
        mb-2
      "
    >
      {{ label }}
    </p>
    <p
      class="
        font-general-regular
        mb-5
        text-lg text-ternary-dark
        dark:text-ternary-light
      "
      v-html="contents"
    ></p>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, default: () => ({}) },
  },
  computed: {
    label() {
      return this.data.title?.toUpperCase();
    },
    contents() {
      return `- ${
        typeof this.data.contents === "string"
          ? this.data.contents
          : this.data.contents.join("<br>- ")
      }`;
    },
  },
};
</script>
