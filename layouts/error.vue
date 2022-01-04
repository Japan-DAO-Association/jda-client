<template>
  <v-app dark>
    <v-row
    ref="vantaRef"
    justify="center"
    align="center"
    class="wrapper"
  >
    <v-col cols="12" class="pb-0">
      <div class="mx-10 text-wrapper">
        <Typography
          v-if="error.statusCode === 404"
          font="h2"
        >
          {{ pageNotFound }}
        </Typography>
        <Typography
          v-else
          font="h2"
        >
          {{ otherError }}
        </Typography>
        <div class="text-center">
          <NuxtLink to="/" class="home-link text-center">
            Go to Home page
          </NuxtLink>
        </div>
      </div>
    </v-col>
  </v-row>
  </v-app>
</template>

<script>
import Net from 'vanta/src/vanta.net';

export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'Something went wrong...'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  mounted() {
    // this.$router.push('/');
    
    this.vantaEffect = Net({
      el: this.$refs.vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xff3f91,
      backgroundColor: 0x0b193e,
      points: 10,
      maxDistance: 20,
      spacing: 12,
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  background: rgba(11, 25, 62, 1);
  position: relative;
  .text-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    h1 {
      font-size: 20px;
      text-align: center;
    }
    .home-link {
      font-size: 34px;
    }
  }
}
</style>
