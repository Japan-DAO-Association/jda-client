<template>
  <v-row class="hero">
    <v-col cols="12" class="">
      <div class="hero-text-wrap">
        <h2 class="hero-text hero-text-h2">
          <Textra
            :data="words"
            :timer="2"
            :infinite="true"
            filter="flash"
            class="textra"
          ></Textra>
          with DAO
        </h2>
        <H3 class="hero-text hero-text-h3">Realizing the Next Generation of Work with DAO<br />To live our oun life</H3>
      </div>
      <DiscordArea class="hero-discord-area" />
    </v-col>
  </v-row>
</template>

<script>
import Textra from '@/components/Font/Textra';
import H3 from '@/components/Font/H3';
import DiscordArea from '@/components/Index/DiscordArea';

export default {
  components: {
    Textra,
    H3,
    DiscordArea,
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
  background-image: url('@/assets/images/hero_bg3.svg');
  height: 100vh;
  background-size: auto 100%;
  background-position: center;
  position: relative;
  @media (max-width: 440px) {
    height: 95vh;
  }
  .hero-text-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    width: 80%;
    max-width: 80%;
    @media (max-width: 580px) {
      width: 90%;
      max-width: 90%;
    }
    .hero-text {
      font-family: Sanchez !important;
      font-style: normal;
      font-weight: 400 !important;
      color: #fff;
      text-shadow: 0px 0px 32px rgba(10, 41, 66, 0.8);
      text-align: center;
      .textra {
        display: inline-block;
      }
      @media (max-width: 580px) {
        right: 0;
        padding: 8px 24px;
      }
    }
    .hero-text-h2 {
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
    .hero-text-h3 {
      @media(max-width: 580px) {
        font-size: 26px !important;
      }
    }
  }
  .hero-discord-area {
    @media (max-width: 400px) {
      display: none;
    }
  }
}
</style>