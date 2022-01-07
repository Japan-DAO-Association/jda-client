<template>
  <Aos>
    <Typography font="h3" class="text-center">Mint GEN0 NFT on Polygon</Typography>
    <Typography
      class="desc text-center"
    >
      First connect your wallet on Polygon Network and see the current Gen0 NFT price.
    </Typography>
    <div
      v-if="isConnected"
      class="text-center"
    >
      <Typography>
        Your current connected address is below.
      </Typography>
      <Web3Profile
        :provider="provider"
        :signer="signer"
      />
    </div>
    <div
      v-else
      class="text-center"
    >
      <ConnectWalletButton
        @transferWeb3='getWeb3'
        @getTicketInfo='getTicketInfo'
      />
    </div>
    <div class="mt-8">
      <v-row
        class="card-row"
      >
        <v-col
          class="card-col"
        >
          <MintNftCard
            ref="mintNftCard"
            :provider="provider"
            :signer="signer"
          />
        </v-col>
      </v-row>
    </div>
  </Aos>
</template>

<script>
import web3 from '@/helpers/web3';
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
    isConnected: false,
  }),
  mounted() {
    this.initialize();
  },
  methods: {
    async initialize() {
      const {
        isConnected,
        provider,
        signer
      } = await web3.isConnected();
      if (isConnected) {
        [this.provider, this.signer] = [provider, signer];
        this.isConnected = true;
      }
    },
    getWeb3(val) {
      [this.provider, this.signer] = [val.provider, val.signer];
      this.isConnected = true;
    },
    getTicketInfo() {
      this.$refs.mintNftCard.getTicketInfo();
    },
  }
}
</script>

<style lang="scss" scoped>
.desc {
  color: #fff;
}
</style>