<template>
  <Aos>
    <v-row>
      <v-col>
        <H3>Affiliated DAO Communities</H3>
        <div class="mx-4 mt-8">
          <v-row
            class="alliance-row"
          >
            <v-col
              v-for="item in items"
              :key="item.name"
              cols="12" xs="12" sm="6" md="4" lg="4"
            >
              <div class="card-border">
                <v-card class="card">
                  <v-card-title class="card-title">{{ item.name }}</v-card-title>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </Aos>
</template>

<script>
import Aos from '@/components/Aos';
import H3 from '@/components/Font/H3';

export default {
  components: {
    Aos,
    H3,
  },
  data: () => ({
    items: [
      { name: 'ブロックチェーン研究所' },
      { name: 'Soundan NFT' },
      { name: 'Dfinity JP' },
      { name: 'KudasaiJP' },
      { name: 'NFTJPN' },
      { name: 'ICP LAB JP' },
      { name: 'Ninja DAO' },
      { name: 'ソフィクラ' },
      { name: 'HODLer会' },
      { name: 'TITAN DAO' },
      { name: 'クリプト金玉' },
      { name: 'Yield Farming Lab（YFL）' },
      { name: 'Airdrop JAPAN' },
      { name: 'and more soon..' },
    ]
  })
}
</script>

<style lang="scss" scoped>
.alliance-row {
  // @media (max-width: 600px) {
  //   display: block;
  // }
  .card-border {
    background: linear-gradient(to right, #467de7, #da46e7);
    padding: 2px;
    border-radius: 24px;
    .card {
      background: #0A2942;
      border-radius: 24px;
      text-align: center;
      .card-title {
        display: inline-block;
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
        color: #fff;
      }
    }
  }
}
</style>