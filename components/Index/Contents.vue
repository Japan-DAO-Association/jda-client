<template>
  <Aos>
    <H3>Contents</H3>
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
            <v-card-title class="card-title">{{ $t('index.contents.card.1.title') }}</v-card-title>
            <v-card-text class="card-text">{{ $t('index.contents.card.1.desc') }}</v-card-text>
          </v-card>
        </v-col>
        <v-col class="service-col">
          <v-card class="card">
            <v-card-title class="card-title">{{ $t('index.contents.card.2.title') }}</v-card-title>
            <v-card-text class="card-text">{{ $t('index.contents.card.2.desc') }}</v-card-text>
          </v-card>
        </v-col>
        <v-col class="service-col">
          <v-card class="card">
            <v-card-title class="card-title">{{ $t('index.contents.card.3.title') }}</v-card-title>
            <v-card-text class="card-text">{{ $t('index.contents.card.3.desc') }} </v-card-text>
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
            <v-card-title class="card-title">Blockchain Project Support</v-card-title>
            <!-- <v-card-title class="card-title">ブロックチェーンプロジェクト支援</v-card-title> -->
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
    @media (max-width: 500px) {
      width: 100%;
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