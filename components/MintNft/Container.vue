<template>
  <Aos>
    <H3 class="text-center">Mint NFT on Polygon</H3>
    <NormalText
      class="desc text-center"
    >
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah
    </NormalText>
    <div class="mt-8">
      <v-row
        class="card-row"
      >
        <v-col
          class="card-col"
        >
          <MintNftCard />
        </v-col>
      </v-row>
    </div>
  </Aos>
</template>

<script>
import Aos from '@/components/Aos';
import H3 from '@/components/Font/H3';
import NormalText from '@/components/Font/NormalText';
import MintNftCard from '@/components/MintNft/Card';

export default {
  components: {
    Aos,
    H3,
    NormalText,
    MintNftCard,
  },
}
</script>

<style lang="scss" scoped>
.desc {
  color: #fff;
}
</style>