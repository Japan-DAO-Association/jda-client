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
        <Layout><Contents /></Layout>
        <Layout class="discord-layout"><Discord /></Layout>
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
import Contents from '@/components/Index/Contents';
import Discord from '@/components/Index/Discord';
import Conversions from '@/components/Index/Conversions';
import Alliances from '@/components/Index/Alliances';
import Roadmap from '@/components/Index/Roadmap';

export default {
  components: {
    HeroArea,
    Layout,
    News,
    About,
    Contents,
    Discord,
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
  .discord-layout {
    background: #fff;
    width: 110%;
    margin-left: -5%;
    padding: 3.4% 5%;
    @media (max-width: 900px) {
      width: 120%;
      margin-left: -10%;
      padding: 3.4% 10%;
    }
    @media (max-width: 500px) {
      width: 130%;
      margin-left: -15%;
      padding: 3.4% 15%;
    }
  }
}
</style>