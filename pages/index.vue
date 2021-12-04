<template>
  <v-row 
    justify="center"
    align="center"
    class="wrapper"
  >
    <v-col cols="12">
      <HeroArea />
      <div class="mx-10">
        <IndexLayout>
          <News />
        </IndexLayout>
        <IndexLayout>
          <About />
        </IndexLayout>
        <IndexLayout>
          <Services />
        </IndexLayout>
        <!-- conversions -->
        <IndexLayout>
          <Conversions />
        </IndexLayout>
        <!-- alliances -->
        <IndexLayout>
          <Alliances />
        </IndexLayout>
        <!-- roadmap -->
        <IndexLayout>
          <Roadmap />
        </IndexLayout>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import IndexLayout from '@/components/Index/Layout';
import News from '@/components/Index/News';
import About from '@/components/Index/About';
import Services from '@/components/Index/Services';
import Conversions from '@/components/Index/Conversions';
import Alliances from '@/components/Index/Alliances';
import Roadmap from '@/components/Index/Roadmap';

export default {
  components: {
    IndexLayout,
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