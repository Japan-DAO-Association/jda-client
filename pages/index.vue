<template>
  <v-row
    ref="vantaRef"
    justify="center"
    align="center"
    class="wrapper"
  >
    <v-col cols="12">
      <HeroArea />
      <div class="mx-10">
        <Layout><News /></Layout>
        <Layout><About /></Layout>
        <Layout><Services /></Layout>
        <Layout><Conversions /></Layout>
        <Layout><Alliances /></Layout>
        <Layout><Roadmap /></Layout>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Net from 'vanta/src/vanta.net';
import Layout from '@/components/Layout';
import HeroArea from '@/components/Index/HeroArea';
import News from '@/components/Index/News';
import About from '@/components/Index/About';
import Services from '@/components/Index/Services';
import Conversions from '@/components/Index/Conversions';
import Alliances from '@/components/Index/Alliances';
import Roadmap from '@/components/Index/Roadmap';

export default {
  components: {
    HeroArea,
    Layout,
    News,
    About,
    Services,
    Conversions,
    Alliances,
    Roadmap,
  },
  mounted() {
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
}
</style>