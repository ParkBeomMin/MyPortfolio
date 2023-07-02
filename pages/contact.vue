<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Seoul",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "club20608@gmail.com",
          icon: "mail",
          link: "mailto:club20608@gmail.com",
        },
        {
          id: 3,
          name: "010 2434 7280",
          icon: "phone",
          link: "tel:+821024347280",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact form -->
    <!-- <ContactForm /> -->

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
