<template>
  <div>
    <div>
      <h1>{{ careerDescription.name }}</h1>
      <span>Frontend Engineer</span>
    </div>
    <Section title="About Me" :content="careerDescription.intro" />
    <Section title="Skills">
      <ul>
        <li v-for="(skill, i) of careerDescription.skills" :key="`skill-${i}`">
          <Skill :skill="skill" />
        </li>
      </ul>
    </Section>
    <Section title="Careers">
      <ul>
        <li
          v-for="(career, i) of careerDescription.careers"
          :key="`career-${i}`"
        >
          <Career :career="career" />
        </li>
      </ul>
    </Section>
    <Section title="Projects">
      <Description :description="careerDescription.description" />
    </Section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Section from "./Section.vue";
import Skill from "./Skill.vue";
import Career from "./Career.vue";
import Description from "./Description.vue";
export default {
  components: {
    Section,
    Skill,
    Career,
    Description,
  },
  computed: {
    ...mapGetters({
      careerDescription: "careerDescription/getCareerDescription",
    }),
  },
};
</script>
