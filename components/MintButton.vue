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
import contract from '@/helpers/contract';
import MintGen0PolygonAbi from '@/helpers/abis/MintGen0PolygonAbi';
import USDCPolygonAbi from '@/helpers/abis/USDCPolygonAbi'

export default {
  data: () => ({
    account: '',
    provider: {},
    signer: {},
  }),
  methods: {
    async mint() {
      await this.$emit('reserve');

      const {
        account,
        provider
      } = await callWeb3Modal();
      this.account = account;
      this.provider = provider;
      // vuex, cookieに保存しておきたい

      const signer = await this.provider.getSigner();
      this.signer = signer;
      // vuex, cookieに保存しておきたい
      const {
        chainId
      } = await this.provider.getNetwork();
      console.log(chainId);
      if (chainId === 80001) {
        console.log('connected to mumbai');
        // const MintGen0MumbaiContract = await contract.getContract(process.env.MintGen0MumbaiAddress, MintGen0MumbaiAbi, this.signer);
        // console.log(MintGen0MumbaiContract);
        const USDCPolygonContract = await contract.getContract(process.env.USDCPolygonAddress, USDCPolygonAbi, this.signer);
        console.log(USDCPolygonContract);
        // mumbaiでのミント処理
      } else if (chainId === 137) {
        console.log('connected to polygon');
        const MintGen0PolygonContract = await contract.getContract(process.env.MintGen0PolygonAddress, MintGen0PolygonAbi, this.signer);
        console.log(MintGen0PolygonContract);
        const USDCPolygonContract = await contract.getContract(process.env.USDCPolygonAddress, USDCPolygonAbi, this.signer);
        console.log(USDCPolygonContract);
        // polygonでのミント処理
      } else {
        console.log('wrong network');
        // wrong networkのモーダルかスナックバーを表示
      }
    },
  }
}
</script>