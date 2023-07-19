<script>
import feather from "feather-icons";
import Portfolio from "~/components/download/Portfolio";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import axios from "axios";
import { mapState } from "vuex";

export default {
  components: {
    Portfolio,
  },
  data: () => {
    return {
      // Todo
      initBody: "",
      isShowPortfolio: false,
    };
  },
  computed: {
    ...mapState(["projects"]),
  },

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {
    async download() {
      const pdf = jsPDF("l", "mm", "a4");
      const ds = await axios.get("/malgun.txt");
      console.log(ds.data);
      pdf.addFileToVFS("malgun.ttf", ds.data); //_fonts 변수는 Base64 형태로 변환된 내용입니다.
      pdf.addFont("malgun.ttf", "malgun", "normal");
      pdf.setFont("malgun");
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();

      this.projects.forEach((project) => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const img = new Image(); // Create new img element
        img.src = project.img; // Set source path
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
        const myData = context.getImageData(0, 0, img.width, img.height);
        pdf.addPage();
        pdf.addImage(myData, "PNG", 0, 0, width, height);
        pdf.addPage();
        let y = 40;
        const needs =
          typeof project.needs.contents == "string"
            ? project.needs.contents
            : project.needs.contents.join("\n");
        pdf.text(15, y, "NEEDS"); // 글씨입력(시작x, 시작y, 내용)
        y += 10;
        pdf.text(15, y, needs); // 글씨입력(시작x, 시작y, 내용)
        y += 10;
        const problem =
          typeof project.problem.contents == "string"
            ? project.problem.contents
            : project.problem.contents.join("\n");
        pdf.text(15, y, "PROBLEM"); // 글씨입력(시작x, 시작y, 내용)
        y += 10;
        pdf.text(15, y, problem); // 글씨입력(시작x, 시작y, 내용)
      });
      pdf.save("test");
      return;
      // const doc = new jsPDF({
      //   //orientation: "landscape",
      //   orientation: "portrait",
      //   //format: "a4"
      //   format: [4, 2],
      // });
      // doc.html(this.$refs.portfolio.$el, {
      //   callback: function () {
      //     doc.save("html.pdf");
      //   },
      // });
      var canvas = document.createElement("canvas");
      canvas.width = 1920;
      canvas.height = 1280;
      html2canvas(this.$refs.portfolio.$el, {
        canvas,
        scale: 1.2,
        width: 1920,
        height: 1280,
        windowWidth: 1920,
        windowHeight: 1280,
      }).then((canvas) => {
        console.log(canvas);
        const imgData = canvas.toDataURL("image/png");
        console.log(imgData);
        var pdf = new jsPDF("l", "mm", "a4");

        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, "PNG", 1, 1, width, height);
        pdf.save("test");
        // this.isShowPortfolio = false;
      });
      return;
      window.onbeforeprint = this.beforePrint;
      window.onafterprint = this.afterPrint;
      window.print();
      window.onbeforeprint = window.onafterprint = null;
    },
    beforePrint() {
      const prtContent = this.$refs.portfolio.$el;
      this.initBody = document.body.innerHTML;
      document.body.innerHTML = prtContent.innerHTML;
    },

    afterPrint() {
      document.body.innerHTML = this.initBody;
    },
  },
};
</script>

<template>
  <section
    class="
      flex flex-col
      sm:justify-between
      items-center
      sm:flex-row
      mt-12
      sm:mt-10
    "
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="
          font-general-semibold
          text-3xl
          md:text-3xl
          xl:text-4xl
          text-center
          sm:text-left
          text-ternary-dark
          dark:text-primary-light
          uppercase
        "
      >
        Hi, I'm BeomMin
      </h1>
      <p
        class="
          font-general-medium
          mt-2
          text-lg
          sm:text-xl
          xl:text-2xl
          text-center
          sm:text-left
          leading-none
          text-gray-400
        "
      >
        Web Developer
      </p>
      <div class="flex justify-center sm:block">
        <a
          href="/MyPortfolio/박범민_이력서.pdf"
          download=""
          class="
            flex
            justify-center
            items-center
            w-36
            sm:w-48
            mt-12
            mb-6
            sm:mb-0
            text-lg
            border border-indigo-200
            dark:border-ternary-dark
            py-2.5
            sm:py-3
            shadow-lg
            rounded-lg
            bg-indigo-50
            focus:ring-1 focus:ring-indigo-900
            hover:bg-indigo-500
            text-gray-500
            hover:text-white
            duration-500
          "
          aria-label="Download Resume"
        >
          <i
            data-feather="arrow-down-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i>
          <span class="text-sm sm:text-lg font-general-medium duration-100"
            >Download CV</span
          ></a
        >
        <a
          href="javascript:void(0)"
          class="
            flex
            justify-center
            items-center
            w-36
            sm:w-48
            mt-12
            mb-6
            sm:mb-0
            text-lg
            border border-indigo-200
            dark:border-ternary-dark
            py-2.5
            sm:py-3
            shadow-lg
            rounded-lg
            bg-indigo-50
            focus:ring-1 focus:ring-indigo-900
            hover:bg-indigo-500
            text-gray-500
            hover:text-white
            duration-500
            z-0
          "
          aria-label="Download Career Descrition"
          @click.prevent="download"
        >
          <i
            data-feather="arrow-down-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          />
          <span class="text-sm sm:text-lg font-general-medium duration-100">
            Download Portfolio
          </span>
        </a>
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <img
        v-if="this.$colorMode.value == 'dark'"
        src="~/static/developer.jpg"
        alt="Developer Dark"
      />
      <img v-else src="~/static/developer.jpg" alt="Developer Light" />
    </div>
    <portfolio class="absolute" ref="portfolio" v-show="isShowPortfolio" />
  </section>
</template>

<style lang="scss" scoped></style>
