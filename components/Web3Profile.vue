<template>
  <div
    class="web3-profile mx-auto"
  >
    {{ ensName ? ensName : account }}
  </div>
</template>

<script>
import web3 from '@/helpers/web3';

export default {
  props: [
    'provider',
    'signer',
  ],
  data: () => ({
    account: '',
    ensName: '',
  }),
  mounted() {
    this.initialize();
  },
  methods: {
    async initialize() {
      this.account = this.$store.getters['web3/getAccount'];
      this.ensName = await web3.getEnsName(this.provider, this.account);
    }
  }
}
</script>

<style lang="scss" scoped>
.web3-profile {
  background: linear-gradient(90deg, #467DE7 0%, #DA46E7 100%);
  border-radius: 8px;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
}
</style>