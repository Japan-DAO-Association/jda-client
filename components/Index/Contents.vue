<template>
  <Aos>
    <Typography font="h3">Contents</Typography>
    <div class="mx-4 mt-8">
      <v-row
        justify="center"
        class="service-row"
      >
        <v-col
          cols="12" xs="11" sm="6" md="4" lg="4"
          class="service-col"
        >
          <v-card class="card">
            <div
              class="text-center"
            >
              <img
                src="@/assets/images/contents-earth.svg"
                alt="content image"
              >
            </div>
            <v-card-title class="card-title">{{ $t('index.contents.card.1.title') }}</v-card-title>
            <v-card-text class="card-text">{{ $t('index.contents.card.1.desc') }}</v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12" xs="11" sm="6" md="4" lg="4"
          class="service-col"
        >
          <v-card class="card">
            <div
              class="text-center"
            >
              <img
                src="@/assets/images/contents-people.svg"
                alt="content image"
              >
            </div>
            <v-card-title class="card-title">{{ $t('index.contents.card.2.title') }}</v-card-title>
            <v-card-text class="card-text">{{ $t('index.contents.card.2.desc') }}</v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12" xs="11" sm="6" md="4" lg="4"
          class="service-col"
        >
          <v-card class="card">
            <div
              class="text-center"
            >
              <img
                src="@/assets/images/contents-pencil.svg"
                alt="content image"
              >
            </div>
            <v-card-title class="card-title">{{ $t('index.contents.card.3.title') }}</v-card-title>
            <v-card-text class="card-text">
              {{ $t('index.contents.card.3.desc.1') }}<br />
              {{ $t('index.contents.card.3.desc.2') }}<br />
              {{ $t('index.contents.card.3.desc.3') }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12" xs="11" sm="6" md="4" lg="4"
          class="service-col"
        >
          <v-card class="card">
            <div
              class="text-center"
            >
              <img
                src="@/assets/images/contents-note.svg"
                alt="content image"
              >
            </div>
            <v-card-title class="card-title">{{ $t('index.contents.card.4.title') }}</v-card-title>
            <v-card-text class="card-text">{{ $t('index.contents.card.4.desc') }}</v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12" xs="11" sm="6" md="4" lg="4"
          class="service-col"
        >
          <v-card class="card">
            <div
              class="text-center"
            >
              <img
                src="@/assets/images/contents-hexagon.svg"
                alt="content image"
              >
            </div>
            <v-card-title class="card-title">{{ $t('index.contents.card.5.title') }}</v-card-title>
            <v-card-text class="card-text">{{ $t('index.contents.card.5.desc') }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </Aos>
</template>

<script>
import Aos from '@/components/Aos';
import Typography from '@/components/Typography';

export default {
  components: {
    Aos,
    Typography,
  }
}
</script>

<style lang="scss" scoped>
.service-row {
  .service-col {
    .card {
      width: 384px;
      height: 368px;
      padding: 16px 10px;
      background: #fff;
      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
      border-radius: 16px;
      @media (max-width: 1550px) {
        height: 430px;
      }
      @media (max-width: 959.9px) {
        padding: 10px 6px;
        height: 328px;
      }
      @media (max-width: 770px) {
        height: 396px;
      }
      @media (max-width: 600px) {
        height: 345px;
        margin: 0 auto;
      }
      @media (max-width: 580px) {
        padding: 2px 6px;
      }
      @media (max-width: 420px) {
        height: 370px;
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
        @media (max-width: 959.9px) {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>