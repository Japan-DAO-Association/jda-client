<template>
  <client-only>
    <v-btn
      class="mint-btn mx-auto"
      @click="mint"
    >
      Mint
    </v-btn>
  </client-only>
</template>

<script>
import callWeb3Modal from '@/helpers/web3modal';

export default {
  methods: {
    async mint() {
      await this.$emit('reserve');

      const {
        account,
        provider
      } = await callWeb3Modal();
      console.log(account);
      console.log(provider);
        // コントラクトとの処理
    }
  }
}
</script>