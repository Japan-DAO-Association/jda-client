<template>
  <v-card
    :loading="loading"
    class="card mx-auto my-12 px-4 pt-1 pb-2"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <Typography font="nftcard-h4">NFT title</Typography>
    <v-img
      height="250"
      src="ogp.png"
    ></v-img>
    <Typography
      font="normal-black"
    >
      NFT desc
    </Typography>
    <Typography
      font="normal-black"
    >
      Current Price: {{ nftPrice }}
    </Typography>
    <Typography
      font="normal-black"
    >
      Remaining: {{ remainingNumber }}
    </Typography>
    <v-card-actions>
      <MintButton
        :provider="provider"
        :signer="signer"
        :raw-nft-price="rawNftPrice"
        @reserve="reserve"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
/* eslint-disable camelcase */
import Typography from '@/components/Typography';
import contract from '@/helpers/contract';
import MintGen0PolygonAbi from '@/helpers/abis/MintGen0PolygonAbi';
import web3 from '@/helpers/web3';

export default {
  components: {
    Typography,
  },
  props: [
    'provider',
    'signer',
  ],
  data: () => ({
    loading: false,
    selection: 1,
    rawNftPrice: '',
    nftPrice: 'please connect your wallet',
    remainingNumber: 'please connect your wallet',
  }),
  mounted() {
    this.initialize();
  },
  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    async initialize() {
      const {
        provider,
        signer
      } = await web3.initialize();
      [this.provider, this.signer] = [provider, signer];
      this.getTicketInfo();
    },
    getTicketInfo() {
      setTimeout(async () => {
        const {
          chainId
        } = await this.provider.getNetwork();

        if (chainId === 137 || chainId === 80001) {
          const MintGen0PolygonContract = await contract.getContract(process.env.MintGen0PolygonAddress, MintGen0PolygonAbi, this.signer);
          const res = await MintGen0PolygonContract.GetTicketInfo();
          console.log(res);
          this.rawNftPrice = res[4];
          this.nftPrice = this.rawNftPrice / 1000000;
          this.remainingNumber = res[5] - res[6];
          } else {
          this.nftPrice = 'connect to Polygon Network and refresh.';
          this.remainingNumber = 'connect to Polygon Network and refresh.';
        }
      }, 10);
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  .mint-btn {
    background: linear-gradient(90deg, #467DE7 0%, #DA46E7 100%);
    border-radius: 8px;
    color: #fff;
  }
}
</style>