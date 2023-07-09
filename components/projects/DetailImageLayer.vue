<template>
  <div
    class="absolute w-full h-full bg-white bg-opacity-50"
    @click="$emit('close')"
  >
    <img
      class="
        cursor-pointer
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
      "
      :src="url"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    url: { type: String, default: "" },
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.add("overflow-hidden");
  },
  beforeDestroy() {
    document.body.classList.remove("overflow-hidden");
  },
};
</script>
