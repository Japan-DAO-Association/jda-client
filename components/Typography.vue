<template>
  <div v-if="font === 'hero-h2'">
    <h2 class="hero-text hero-h2-style">
      <slot />
    </h2>
  </div>
  <div
    v-else-if="font === 'hero-h3'"
  >
    <h3
      class="my-6 text-h4 font-weight-bold h3-style hero-text hero-h3-style"
    >
      <slot />
    </h3>
  </div>
  <div
    v-else-if="font === 'discordarea-h3'"
  >
    <h3
      class="my-6 text-h4 font-weight-bold h3-style discordarea-h3-style"
    >
      <slot />
    </h3>
  </div>
  <div
    v-else-if="font === 'conversion-h3'"
  >
    <h3
      class="my-6 text-h4 font-weight-bold h3-style conversion-h3-style"
    >
      <slot />
    </h3>
  </div>
  <div
    v-else-if="font === 'message-h3'"
  >
    <h3
      class="my-6 text-h4 font-weight-bold h3-style message-h3-style"
    >
      <slot />
    </h3>
  </div>
  <div
    v-else-if="font === 'h3'"
  >
    <h3
      class="my-6 text-h4 font-weight-bold h3-style"
    >
      <slot />
    </h3>
  </div>
  <div
    v-else-if="font === 'roadmap-h4'"
    class="roadmap-h4-wrapper"
  >
    <h4
      class="my-12 text-h5 font-weight-bold roadmap-h4-style"
      v-html="innertexts"
    >
      <slot />
    </h4>
  </div>
  <div
    v-else-if="font === 'nftcard-h4'"
  >
    <h4
      class="my-12 text-h5 font-weight-bold nftcard-h4-style"
    >
      <slot />
    </h4>
  </div>
  <div
    v-else-if="font === 'contents-h4'"
  >
    <h4
      class="my-4 text-h5 font-weight-bold contents-h4-style"
    >
      <slot />
    </h4>
  </div>
  <div
    v-else-if="font === 'h4'"
  >
    <h4
      class="my-12 text-h5 font-weight-bold"
    >
      <slot />
    </h4>
  </div>
  <div
   v-else-if="font === 'conversion-normal'"
  >
    <p class="font-weight-bold normal-text-style conversion-normal-style">
      <slot />
    </p>
  </div>
  <div
   v-else-if="font === 'news-pubdate'"
  >
    <p class="font-weight-bold normal-text-style news-pubdate">
      <slot />
    </p>
  </div>
  <div
   v-else-if="font === 'contents-normal'"
  >
    <p class="font-weight-bold normal-text-style contents-normal">
      <slot />
    </p>
  </div>
  <div
   v-else-if="font === 'normal-black'"
  >
    <p class="font-weight-bold normal-text-style font-black">
      <slot />
    </p>
  </div>
  <div
   v-else
  >
    <p class="font-weight-bold normal-text-style">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  props: [
    'font',
    'innertexts',
  ],
}
</script>

<style lang="scss" scoped>
.font-black {
  color: #000;
}
.hero-text {
  font-family: Raleway !important;
  font-style: normal;
  font-weight: 500 !important;
  color: #fff;
  text-shadow: 0px 0px 32px rgba(10, 41, 66, 0.8);
  text-align: center;
  @media (max-width: 580px) {
    right: 0;
    padding: 8px 24px;
  }
}
.hero-h2-style {
  font-size: 72px;
  line-height: 100px;
  @media (max-width: 580px) {
    font-size: 50px;
    line-height: 34px;
  }
  @media (max-width: 440px) {
    font-size: 32px;
  }
}
.h3-style {
  font-family: Raleway !important;
  margin-bottom: 80px !important;
  @media (max-width: 580px) {
    margin-bottom: 40px !important;
  }
}
.hero-h3-style {
  @media(max-width: 580px) {
    font-size: 26px !important;
  }
}
.discordarea-h3-style {
  font-family: Raleway !important;
  text-align: center;
  font-size: 30px !important;
  margin-bottom: 30px !important;
  @media (max-width: 580px) {
    font-size: 20px !important;
  }
}
.message-h3-style {
  color: #fff;
  font-family: Raleway !important;
  font-style: italic;
  font-weight: 300 !important;
  font-size: 40px !important;
  line-height: 56px;
  @media (max-width: 500px) {
    font-size: 24px !important;
  }
  @media (max-width: 400px) {
    font-size: 22px !important;
  }
}
.conversion-h3-style {
  @media (max-width: 500px) {
    h3 {
      margin: 0 2%;
      font-size: 22px !important;
    }
  }
}
.conversion-normal-style {
  @media (max-width: 500px) {
    margin: 0 4%;
    font-size: 16px;
    line-height: 26px;
  }
}
.conversion-h3-style, .conversion-normal-style {
  color: #0b193e;
}
.roadmap-h4-wrapper {
  height: 100%;
  display: table;
  .roadmap-h4-style {
    display: table-cell;
    vertical-align: middle;
    color: #fff;
    @media (max-width: 1100px) {
      font-size: 20px !important;
    }
    @media (max-width: 899.9px) {
      font-size: 16px !important;
      line-height: 24px;
    }
    @media (max-width: 580px) {
      font-size: 14px !important;
      line-height: 22px;
    }
  }
}
.nftcard-h4-style {
  color: #000;
  margin: 16px !important;
}
.contents-h4-style {
  font-family: Raleway;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  // color: #0A2942;
  color: #fff;
  @media (max-width: 960px) {
    font-size: 20px;
    line-height: 32px;
  }
  @media (max-width: 580px) {
    padding: 10px;
  }
}
.news-pubdate {
  font-size: 14px;
  // color: #636B78;
  color: rgba(255, 255, 255, 0.5);
}
.contents-normal {
  font-family: "Noto Sans CJK JP" !important;
  font-weight: normal !important;
  font-size: 18px !important;
  line-height: 26px !important;
  // color: #636B78 !important;
  color: rgba(255, 255, 255, 0.5) !important;
  @media (max-width: 959.9px) {
    font-size: 16px !important;
    line-height: 24px !important;
  }
}
.normal-text-style {
  font-size: 18px;
  line-height: 30px;
}
</style>