<template>
  <v-row class="hero">
    <v-col cols="12" class="">
      <h2 class="hero-text">Life with DAO</h2>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.hero {
  background-image: url('@/assets/images/hero_bg.svg');
  height: 95vh;
  background-size: auto 100%;
  background-position: center;
  position: relative;
  .hero-text {
    background: rgba(57, 11, 247, 0.6);
    padding: 8px 90px;
    position: absolute;
    right: 10%;
    bottom: 34%;
    font-family: Sanchez;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 100px;
    color: #fff;
  }
}
</style>