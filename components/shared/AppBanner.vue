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
    ...mapState(["projects", "aboutMe"]),
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
      const ds = await axios.get("/MyPortfolio/malgun.txt");
      pdf.addFileToVFS("malgun.ttf", ds.data); //_fonts 변수는 Base64 형태로 변환된 내용입니다.
      pdf.addFont("malgun.ttf", "malgun", "normal");
      pdf.setFont("malgun");
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();

      this.setImage({
        pdf,
        imgUrl: "/MyPortfolio/profile.jpeg",
        x: 10,
        y: 10,
        width: 100,
        height: 150,
      });
      pdf.text(
        120,
        15,
        this.aboutMe[0].bio.replace(/\<br\>/g, "\n").replace(/\<\/?b\>/g, ""),
        {
          maxWidth: width - 130,
        }
      );

      this.projects.forEach((project, i) => {
        pdf.addPage();
        this.setImage({ pdf, imgUrl: project.img, width, height });
        pdf.addPage();
        let y = 40;
        const margin = 15;
        const textOption = {
          maxWidth: width - margin,
        };
        const needs =
          typeof project.needs.contents == "string"
            ? project.needs.contents
            : project.needs.contents.join("\n");
        pdf.text(margin, y, "NEEDS"); // 글씨입력(시작x, 시작y, 내용)
        y += 10;
        pdf.text(margin, y, needs, textOption); // 글씨입력(시작x, 시작y, 내용)
        y += 30;
        const problem =
          typeof project.problem.contents == "string"
            ? project.problem.contents
            : project.problem.contents.join("\n");
        pdf.text(margin, y, "PROBLEM"); // 글씨입력(시작x, 시작y, 내용)
        y += 10;
        pdf.text(margin, y, problem, textOption); // 글씨입력(시작x, 시작y, 내용)
        y += 30;
        const howToFix =
          typeof project.howToFix.contents == "string"
            ? project.howToFix.contents
            : project.howToFix.contents.join("\n");
        pdf.text(margin, y, "HOW TO FIX"); // 글씨입력(시작x, 시작y, 내용)
        y += 10;
        pdf.text(margin, y, howToFix, textOption); // 글씨입력(시작x, 시작y, 내용)
      });
      pdf.save("박범민_포트폴리오");
    },
    setImage({ pdf, imgUrl, width, height, x = 0, y = 0 }) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const img = new Image(); // Create new img element
      img.src = imgUrl; // Set source path
      console.log(img);
      console.log(img.width);
      console.log(img.height);
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
      const myData = context.getImageData(0, 0, img.width, img.height);
      pdf.addImage(myData, "PNG", x, y, width, height);
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
            >Resume PDF</span
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
            Portfolio PDF
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
