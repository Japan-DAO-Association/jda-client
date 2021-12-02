<template>
  <v-row class="hero">
    <v-col cols="12" class="">
      <h2 class="hero-text">
        <Textra
          :data="words"
          :timer="2"
          :infinite="true"
          filter="flash"
          class="textra"
        ></Textra>
        with DAO
      </h2>
    </v-col>
  </v-row>
</template>

<script>
import Textra from './Font/Textra';

export default {
  components: {
    Textra,
  },
  data () {
    return {
      words: [
        "Life",
        "Engineer",
        "Creator",
        "Artist",
        "Musician",
      ]
    }
  },
}
</script>

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
    right: 0;
    bottom: 34%;
    font-family: Sanchez;
    font-style: italic;
    font-weight: normal;
    font-size: 72px;
    line-height: 100px;
    color: #fff;
    .textra {
      display: inline-block;
    }
    @media (max-width: 580px) {
      padding: 8px 24px;
      font-size: 40px;
      line-height: 64px;
    }
  }
}
</style>