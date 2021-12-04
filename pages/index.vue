<template>
  <v-row 
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
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background: rgba(11, 25, 62, 1);
}
</style>