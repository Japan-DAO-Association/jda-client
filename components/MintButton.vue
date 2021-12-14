<template>
  <v-btn
    class="mint-btn mx-auto"
    @click="mint"
  >
    Mint
  </v-btn>
</template>

<script>
export default {
  methods: {
    async mint() {
      await this.$emit('reserve');
      // web3modal呼び出し
      // コントラクトとの処理
    }
  }
}
</script>