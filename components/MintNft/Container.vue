<template>
  <Aos>
    <Typography font="h3" class="text-center">Mint NFT on Polygon</Typography>
    <Typography
      class="desc text-center"
    >
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah
    </Typography>
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
import Typography from '@/components/Typography';
import MintNftCard from '@/components/MintNft/Card';

export default {
  components: {
    Aos,
    Typography,
    MintNftCard,
  },
}
</script>

<style lang="scss" scoped>
.desc {
  color: #fff;
}
</style>