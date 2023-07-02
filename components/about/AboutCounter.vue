<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      aboutMeCounter: "getAboutMeCounter",
    }),
  },
  data: () => {
    return {
      // @todo
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
    <!-- About me counters start -->
    <div
      class="
        font-general-regular
        container
        mx-auto
        py-20
        block
        sm:flex sm:justify-between sm:items-center
        text-center
      "
    >
      <!-- Years of experience counter -->
      <div class="mb-20 sm:mb-0">
        <span
          class="
            font-general-medium
            text-4xl
            font-bold
            text-secondary-dark
            dark:text-secondary-light
            mb-2
          "
          >{{ aboutMeCounter.year }}+</span
        >
        <span class="block text-md text-ternary-dark dark:text-ternary-light"
          >Years of experience</span
        >
      </div>

      <!-- GitHub stars counter -->
      <div class="mb-20 sm:mb-0">
        <span
          class="
            font-general-medium
            text-4xl
            font-bold
            text-secondary-dark
            dark:text-secondary-light
            mb-2
          "
          >{{ aboutMeCounter.projectOfCompany }}</span
        >
        <span class="block text-md text-ternary-dark dark:text-ternary-light"
          >Project of Company</span
        >
      </div>

      <!-- Positive feedback counter -->
      <div class="mb-20 sm:mb-0">
        <span
          class="
            font-general-medium
            text-4xl
            font-bold
            text-secondary-dark
            dark:text-secondary-light
            mb-2
          "
          >{{ aboutMeCounter.projectOfPersonal }}</span
        >
        <span class="block text-md text-ternary-dark dark:text-ternary-light"
          >Project of Personal</span
        >
      </div>

      <!-- Projects completed counter -->
      <!-- <div class="mb-20 sm:mb-0">
        <span
          class="
            font-general-medium
            text-4xl
            font-bold
            text-secondary-dark
            dark:text-secondary-light
            mb-2
          "
          >77</span
        >
        <span class="block text-md text-ternary-dark dark:text-ternary-light"
          >Projects completed</span
        >
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
