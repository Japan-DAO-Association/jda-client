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
import utils from '@/helpers/utils';

export default {
  props: [
    'provider',
    'signer',
    'rawNftPrice',
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
        console.log('please connect your wallet');
      } else {
        const {
          chainId
        } = await this.provider.getNetwork();
        console.log(chainId);
        const overrides = {
          gasLimit: 500000
        };
  
        if (chainId === 80001) {
          // const MintGen0MumbaiContract = await contract.getContract(process.env.MintGen0MumbaiAddress, MintGen0MumbaiAbi, this.signer);
          // const USDCMumbaiContract = await contract.getContract(process.env.USDCPolygonAddress, USDCPolygonAbi, this.signer);
          // try {
          //   const approveTx = await USDCMumbaiContract.approve(process.env.MintGen0MumbaiAddress, utils.parseUnitsToString(this.rawNftPrice, 'wei'), overrides);
          //   console.log(`Approve Transaction: ${approveTx}`);
          //   const buyTx = await MintGen0MumbaiContract.BuyTicket(overrides);
          //   console.log(`Buy Transaction: ${buyTx}`);
          //   this.$emit('getTicketInfo');
          // } catch (e) {
          //   console.log(e);
          //   // throw new Error(e);
          // }
        } else if (chainId === 137) {
          const MintGen0PolygonContract = await contract.getContract(process.env.MintGen0PolygonAddress, MintGen0PolygonAbi, this.signer);
          const USDCPolygonContract = await contract.getContract(process.env.USDCPolygonAddress, USDCPolygonAbi, this.signer);
          try {
            const approveTx = await USDCPolygonContract.approve(process.env.MintGen0PolygonAddress, utils.parseUnitsToString(this.rawNftPrice, 'wei'), overrides);
            console.log(`Approve Transaction: ${approveTx}`);
            const buyTx = await MintGen0PolygonContract.BuyTicket(overrides);
            console.log(`Buy Transaction: ${buyTx}`);
            this.$emit('getTicketInfo');
          } catch (e) {
            console.log(e);
            // throw new Error(e);
          }
        } else {
          console.log('wrong network');
          // wrong networkのモーダルかスナックバーを表示
        }
      }
    },
  }
}
</script>
