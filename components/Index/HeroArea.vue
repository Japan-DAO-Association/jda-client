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
      <DiscordHeroArea class="discord-heroarea" />
    </v-col>
  </v-row>
</template>

<script>
import Textra from '@/components/Font/Textra';
import H3 from '@/components/Font/H3';
import DiscordHeroArea from '@/components/Index/DiscordHeroArea';

export default {
  components: {
    Textra,
    H3,
    DiscordHeroArea,
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
        font-size: 38px;
      }
    }
    .hero-text-h3 {
      @media(max-width: 580px) {
        font-size: 26px !important;
      }
    }
  }
  .discord-heroarea {
    position: absolute;
    bottom: 10%;
    width: 100%;
    padding: 0 28%;
    @media (max-width: 1400px) {
      padding: 0 20%;
    }
    @media (max-width: 1100px) {
      bottom: 8%;
      padding: 0 16%;
    }
    @media (max-width: 580px) {
      display: none;
    }
  }
}
</style>