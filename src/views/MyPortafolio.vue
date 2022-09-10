<template>
  <div class="section portafolio">
    <div class="portafolio-title">
      <p>My <span>Portafolio</span></p>
    </div>
    <div class="portafolio-text">
      Here is some of my work that I've done in various languajes.
    </div>
    <div class="portafolio-items-cont">
      <portafolio-item
        v-for="(item, index) in itemsData"
        :key="index"
        :imgSrc="item.imgSrc"
        :appSrc="item.appSrc"
        :codeSrc="item.codeSrc"
      >
      </portafolio-item>
    </div>
  </div>
</template>

<script>
import PortafolioItem from "@/components/PortafolioItem.vue";

export default {
  components: {
    PortafolioItem,
  },
  data() {
    return {
      itemsData: [
        {
          imgSrc: "img/App-10.webp",
          appSrc: "https://iwannatocode.github.io/My-Shop/#/",
          codeSrc: "https://github.com/iwannatocode/My-Shop",
        },
        {
          imgSrc: "img/App-9.webp",
          appSrc: "https://iwannatocode.github.io/Todo-List/",
          codeSrc: "https://github.com/iwannatocode/Todo-List",
        },
        {
          imgSrc: "img/App-8.webp",
          appSrc: "https://iwannatocode.github.io/GabiApp/#/",
          codeSrc: "https://github.com/iwannatocode/GabiApp",
        },
        {
          imgSrc: "img/App-7.webp",
          appSrc: "https://iwannatocode.github.io/Ip-address-track/",
          codeSrc: "https://github.com/iwannatocode/Ip-address-track",
        },
        {
          imgSrc: "img/App-6.webp",
          appSrc:
            "https://iwannatocode.github.io/rest-countries-api/index.html",
          codeSrc: "https://github.com/iwannatocode/rest-countries-api",
        },
        {
          imgSrc: "img/App-5.webp",
          appSrc: "https://iwannatocode.github.io/rock-paper-scissors-master/",
          codeSrc: "https://github.com/iwannatocode/rock-paper-scissors-master",
        },
        {
          imgSrc: "img/App-4.webp",
          appSrc:
            "https://iwannatocode.github.io/launch-countdown-timer-challenge/",
          codeSrc:
            "https://github.com/iwannatocode/launch-countdown-timer-challenge",
        },
        {
          imgSrc: "img/App-3.webp",
          appSrc:
            "https://iwannatocode.github.io/pricing-component-with-toggle/",
          codeSrc:
            "https://github.com/iwannatocode/pricing-component-with-toggle",
        },
        {
          imgSrc: "img/App-2.webp",
          appSrc:
            "https://iwannatocode.github.io/intro-component-with-signup-form/",
          codeSrc:
            "https://github.com/iwannatocode/intro-component-with-signup-form",
        },
        {
          imgSrc: "img/App-1.webp",
          appSrc:
            "https://iwannatocode.github.io/interactive-pricing-challenge/",
          codeSrc:
            "https://github.com/iwannatocode/interactive-pricing-challenge/",
        },
        {
          imgSrc: "img/App-0.webp",
          appSrc:
            "https://iwannatocode.github.io/base-apparel-coming-soon-challenge/",
          codeSrc:
            "https://github.com/iwannatocode/base-apparel-coming-soon-challenge",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.portafolio-title {
  margin: 40px 0 20px 3%;
  text-align: center;
  font-size: 34px;
  font-weight: 600;
  text-transform: uppercase;
  span {
    color: var(--color-secondary);
  }
}
.portafolio-text {
  text-align: center;
  margin: 25px;
  font-size: 18px;
}
.portafolio-items-cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
}
</style>
