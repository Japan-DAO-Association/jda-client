<template>
  <v-row
    ref="vantaRef"
    justify="center"
    align="center"
    class="wrapper"
  >
    <v-col cols="12" class="pb-0">
      <div class="mx-10">
        <Layout><MintNftContainer /></Layout>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Net from 'vanta/src/vanta.net';
import Layout from '@/components/Layout';
import MintNftContainer from '@/components/MintNft/Container';

export default {
  components: {
    Layout,
    MintNftContainer,
  },
  mounted() {
    this.$router.push('/');
    
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