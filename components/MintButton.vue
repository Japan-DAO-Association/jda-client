<template>
  <v-btn
    class="mint-btn mx-auto"
    @click="mint"
  >
    Mint
  </v-btn>
</template>

<script>
import contract from '@/helpers/contract';
import MintGen0PolygonAbi from '@/helpers/abis/MintGen0PolygonAbi';
import USDCPolygonAbi from '@/helpers/abis/USDCPolygonAbi'

export default {
  props: [
    'provider',
    'signer',
  ],
  data: () => ({

  }),
  methods: {
    async mint() {
      await this.$emit('reserve');

      // ウォレットに接続してるかの判断も検討したい、どちらにせよ下の条件は必要or下の条件だけで良さそうだが
      // ブラウザ更新してもウォレット接続状態を保ちたい、vuexにはprovider, signerの保存ができなかったし親子コンポーネント間でやりとりしてるデータもブラウザ更新時に消える
      if (!this.provider.provider && !this.signer.provider) {
        // connect Walletの指示をする
        console.log('connect your wallet');
      } else {
        const {
          chainId
        } = await this.provider.getNetwork();
        console.log(chainId);
        // const overrides = {
        //   gasLimit: 500000
        // };
  
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
      }
    },
  }
}
</script>
