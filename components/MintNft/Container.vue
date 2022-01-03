<template>
  <Aos>
    <Typography font="h3" class="text-center">Mint NFT on Polygon</Typography>
    <Typography
      class="desc text-center"
    >
      First connect your wallet on Polygon Network and see the current Gen0 NFT price.
    </Typography>
    <!-- if it's connected it shouldn't show up and connected address should -->
    <!-- should research how to judge if wallet is connected, but the info of if vuex data exist is also necessary maybe -->
    <div class="text-center">
      <ConnectWalletButton @transferWeb3='getWeb3' />
    </div>
    <div class="mt-8">
      <v-row
        class="card-row"
      >
        <v-col
          class="card-col"
        >
          <MintNftCard
            :provider="provider"
            :signer="signer"
          />
        </v-col>
      </v-row>
    </div>
  </Aos>
</template>

<script>
import Aos from '@/components/Aos';
import Typography from '@/components/Typography';
import ConnectWalletButton from '@/components/ConnectWalletButton';
import MintNftCard from '@/components/MintNft/Card';

export default {
  components: {
    Aos,
    Typography,
    ConnectWalletButton,
    MintNftCard,
  },
  data: () => ({
    provider: {},
    signer: {},
  }),
  methods: {
    getWeb3(val) {
      this.provider = val.provider;
      this.signer = val.signer;
    }
  }
}
</script>

<style lang="scss" scoped>
.desc {
  color: #fff;
}
</style>