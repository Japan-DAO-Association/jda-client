<template>
  <Aos>
    <v-row>
      <v-col>
        <H3>提携DAOコミュニティ</H3>
        <div class="mx-4 mt-8">
          <v-row class="alliance-row">
            <v-col>
              <v-card class="card">
                <v-card-title class="card-title">ブロックチェーン研究所</v-card-title>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="card">
                <v-card-title class="card-title">Soundan NFT</v-card-title>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="card">
                <v-card-title class="card-title">DfinityJP</v-card-title>
              </v-card>
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
  }
}
</script>

<style lang="scss" scoped>
.alliance-row {
  @media (max-width: 600px) {
    display: block;
  }
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
</style>