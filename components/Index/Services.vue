<template>
  <Aos>
    <H3>Services</H3>
    <div class="mx-4 mt-8">
      <v-row class="service-row">
        <v-col class="service-col">
          <!-- <v-card
            v-for="item in items"
            :key="item.title"
          >
            sample
          </v-card> -->
          <v-card class="card">
            <v-card-title class="card-title">Pear to Pearジョブマッチングコミュニティ</v-card-title>
            <v-card-text class="card-text">“仕事”を介したシナジーが生まれる場所づくりを提供します</v-card-text>
          </v-card>
        </v-col>
        <v-col class="service-col">
          <v-card class="card">
            <v-card-title class="card-title">ブロックチェーンエンジニア育成事業</v-card-title>
            <v-card-text class="card-text">DAOで生きるブロックチェーンエンジニアの人材育成を行います</v-card-text>
          </v-card>
        </v-col>
        <v-col class="service-col">
          <v-card class="card">
            <v-card-title class="card-title">インフルエンサー育成支援</v-card-title>
            <v-card-text class="card-text">DAO関連インフルエンサー育成を支援していきます</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="service-row">
        <v-col class="service-col">
          <v-card class="card">
            <v-card-title class="card-title">NFT</v-card-title>
            <v-card-text class="card-text">Coming soon...</v-card-text>
          </v-card>
        </v-col>
        <v-col class="service-col">
          <v-card class="card">
            <v-card-title class="card-title">Utility Token</v-card-title>
            <v-card-text class="card-text">Coming soon...</v-card-text>
          </v-card>
        </v-col>
        <v-col class="service-col">
          <v-card class="card">
            <v-card-title class="card-title">ブロックチェーンプロジェクト支援</v-card-title>
            <v-card-text class="card-text">Coming soon...</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
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
.service-row {
  @media (max-width: 700px) {
    display: block;
  }
  .service-col {
    @media (max-width: 700px) {
      width: 60%;
      margin: 4px auto;
    }
    @media (max-width: 600px) {
      width: 80%;
    }
    .card {
      height: 244px;
      padding: 16px 10px;
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
      border-radius: 16px;
      @media (max-width: 960px) {
        padding: 10px 6px;
      }
      @media (max-width: 700px) {
        height: 200px;
      }
      @media (max-width: 580px) {
        padding: 2px 6px;
      }
      .card-title {
        font-family: "Noto Sans CJK JP";
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        color: #0A2942;
        @media (max-width: 960px) {
          font-size: 20px;
          line-height: 32px;
        }
        @media (max-width: 580px) {
          padding: 10px;
        }
      }
      .card-text {
        font-family: "Noto Sans CJK JP";
        font-weight: normal;
        font-size: 18px;
        line-height: 26px;
        color: #636B78;
        @media (max-width: 960px) {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>