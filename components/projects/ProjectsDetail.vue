<template>
  <div>
    <!-- Project heading and meta info -->
    <div>
      <p
        class="
          font-general-medium
          text-left text-3xl
          sm:text-4xl
          font-bold
          text-primary-dark
          dark:text-primary-light
          mt-14
          sm:mt-20
          mb-7
        "
      >
        {{ project.title }}
      </p>
      <div class="flex">
        <div class="flex items-center mr-10">
          <i
            data-feather="clock"
            class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
          ></i>
          <span
            class="
              font-general-medium
              ml-2
              leading-none
              text-primary-dark
              dark:text-primary-light
            "
            >{{ project.publishDate }}</span
          >
        </div>
        <div class="flex items-center">
          <i
            data-feather="tag"
            class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
          ></i>
          <span
            class="
              font-general-medium
              ml-2
              leading-none
              text-primary-dark
              dark:text-primary-light
            "
            >{{ project.tag }}</span
          >
        </div>
      </div>
    </div>

    <!-- Project gallery -->
    <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      <div
        class="mb-10 sm:mb-0"
        v-for="projectImage in project.projectImages"
        :key="projectImage.id"
        @click="$nuxt.$emit('showDetailLayer', projectImage.img)"
      >
        <img
          :src="`../${projectImage.img}`"
          class="
            rounded-xl
            cursor-pointer
            shadow-lg
            sm:shadow-none
            object-cover
            w-64
            h-36
          "
        />
      </div>
    </div>

    <!-- Project info -->
    <div class="block sm:flex gap-0 sm:gap-10 mt-14">
      <!-- Single project left section details -->
      <div class="w-full sm:w-1/3 text-left">
        <!-- Single project link -->
        <div v-if="project.link" class="mb-7">
          <p
            class="
              font-general-medium
              text-2xl text-ternary-dark
              dark:text-ternary-light
              mb-2
            "
          >
            Link
          </p>
          <a :href="project.link" target="_blank">
            <p
              class="
                font-general-regular
                text-primary-dark
                dark:text-ternary-light
              "
            >
              {{ project.link }}
            </p>
          </a>
        </div>
        <div v-if="project.github" class="mb-7">
          <p
            class="
              font-general-medium
              text-2xl text-ternary-dark
              dark:text-ternary-light
              mb-2
            "
          >
            <i data-feather="github" class="w-6 sm:w-8 h-6 sm:h-8"></i>
          </p>
          <a :href="project.github" target="_blank">
            <p
              class="
                font-general-regular
                text-primary-dark
                dark:text-ternary-light
              "
            >
              {{ project.github }}
            </p>
          </a>
        </div>
        <!-- Single project objectives -->
        <div v-if="project.workPeriod" class="mb-7">
          <p
            class="
              font-general-medium
              text-2xl text-ternary-dark
              dark:text-ternary-light
              mb-2
            "
          >
            Work Period
          </p>
          <p
            class="
              font-general-regular
              text-primary-dark
              dark:text-ternary-light
            "
            v-html="project.workPeriod"
          ></p>
        </div>
        <div class="mb-7">
          <p
            class="
              font-general-medium
              text-2xl text-ternary-dark
              dark:text-ternary-light
              mb-2
            "
          >
            {{ project.objectivesTitle }}
          </p>
          <p
            class="
              font-general-regular
              text-primary-dark
              dark:text-ternary-light
            "
            v-html="project.objectivesDetails"
          ></p>
        </div>
      </div>

      <!-- Single project right section details -->
      <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p
          class="
            font-general-medium
            text-primary-dark
            dark:text-primary-light
            text-2xl
            font-bold
            mb-7
          "
        >
          {{ project.detailsTitle }}
        </p>
        <p
          v-for="projectDetail in project.projectDetails"
          :key="projectDetail.id"
          class="
            font-general-regular
            mb-5
            text-lg text-ternary-dark
            dark:text-ternary-light
          "
          v-html="projectDetail.details"
        ></p>
      </div>
    </div>

    <!-- Project related projects -->
    <!-- <ProjectRelatedProjects /> -->
  </div>
</template>

<script>
export default {
  props: {
    project: { type: Object, default: () => ({}) },
  },
};
</script>
