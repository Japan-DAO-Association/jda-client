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
    nftPrice: 'please connect your wallet',
    remainingNumber: 'please connect your wallet',
  }),
  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    getTicketInfo() {
      setTimeout(async () => {
        const MintGen0PolygonContract = await contract.getContract(process.env.MintGen0PolygonAddress, MintGen0PolygonAbi, this.signer);
        const res = await MintGen0PolygonContract.GetTicketInfo();
        console.log(res);
        this.nftPrice = res[4] / 1000000;
        this.remainingNumber = res[5] - res[6];
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