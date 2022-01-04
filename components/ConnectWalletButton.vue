<template>
  <v-btn
    class="connect-btn mx-auto"
    @click="connectWallet"
  >
    Connect Wallet
  </v-btn>
</template>

<script>
import web3 from '@/helpers/web3';

export default {
  data: () => ({

  }),
  methods: {
    async connectWallet() {
      const {
        account,
        provider
      } = await web3.callWeb3Modal();
      const signer = await provider.getSigner();
      const {
        chainId
      } = await provider.getNetwork();
      console.log(chainId);

      this.$store.dispatch('web3/updateWeb3', {
        account,
      });
      // console.log(this.$store.getters['web3/getWeb3'].account);
      this.$emit('transferWeb3', {
        provider,
        signer
      });
      this.$emit('getTicketInfo');
    },
  }
}
</script>

<style lang="scss" scoped>
.connect-btn {
  background: linear-gradient(90deg, #467DE7 0%, #DA46E7 100%);
  border-radius: 8px;
  color: #fff;
}
</style>