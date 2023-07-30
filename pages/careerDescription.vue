<template>
  <div ref="container" class="container">
    <CareerDescription />
  </div>
</template>

<script>
import CareerDescription from "../components/download/CareerDescription.vue";
export default {
  components: {
    CareerDescription,
  },
  data() {
    return {
      initHTML: "",
    };
  },
  mounted() {
    window.addEventListener("beforeprint", (event) => {
      this.initHTML = document.body.innerHTML;
      document.body.innerHTML = this.$refs.container.innerHTML;
    });
    window.addEventListener("afterprint", (event) => {
      //   window.location.reload();
      document.body.innerHTML = this.initHTML;
      console.log(document.body.innerHTML);
    });
  },
};
</script>

<style scoped>
.container {
  margin: auto;
  padding: 64px;
}
@page {
  size: A4;
  margin: 16px 64px;
  padding: 64px;
}
</style>
