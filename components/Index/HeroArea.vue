<template>
  <v-row class="hero">
    <v-col cols="12" class="">
      <div class="hero-text-wrap">
        <Typography
          font="hero-h2"
          class="hero-text"
        >
          <vue-typer
            :text="words"
            pre-type-delay='700'
            type-delay='50'
            pre-erase-delay='1800'
            erase-delay='70'
            erase-style='backspace'
            caret-animation='smooth'
          ></vue-typer>
          with DAO
        </Typography>
        <Typography font="hero-h3" class="hero-text hero-text-h3">Realizing the Next Generation of Work with DAO<br />To live our own life</Typography>
      </div>
      <DiscordArea class="hero-discord-area" />
    </v-col>
  </v-row>
</template>

<script>
import Typography from '@/components/Typography';
import DiscordArea from '@/components/Index/DiscordArea';

export default {
  components: {
    Typography,
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
  }
  .hero-discord-area {
    @media (max-width: 400px) {
      display: none;
    }
  }
}
</style>