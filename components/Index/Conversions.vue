<template>
  <Aos>
    <v-card
      class="card mt-16 px-8 pb-8"
    >
      <v-row
        justify="space-around"
        class="conversion-row"
      >
        <v-col
          cols="12" xs="11" sm="10" md="6" lg="5"
          class="conversion-col"
        >
          <H3 class="conversion-title">{{ $t('index.conversions.card.1.title') }}</H3>
          <div>
            <NormalText>{{ $t('index.conversions.card.1.desc.1') }}<br />
            {{ $t('index.conversions.card.1.desc.2') }}</NormalText>
          </div>
        </v-col>
        <v-col
          cols="12" xs="11" sm="10" md="6" lg="5"
          class="conversion-col"
        >
          <H3 class="conversion-title">{{ $t('index.conversions.card.2.title') }}</H3>
          <div>
            <NormalText>{{ $t('index.conversions.card.2.desc') }}</NormalText>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </Aos>
</template>

<script>
import Aos from '@/components/Aos';
import H3 from '@/components/Font/H3';
import NormalText from '@/components/Font/NormalText';

export default {
  components: {
    Aos,
    H3,
    NormalText,
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 16px !important;
  @media (max-width: 599.9px) {
    margin: 64px auto 0;
    width: 384px;
  }
  @media (max-width: 500px) {
    width: 93%;
  }
  @media (max-width: 420px) {
    width: 92%;
  }
  .conversion-row {
    .conversion-col {
      @media (max-width: 500px) {
        h3 {
          margin: 0 2%;
          font-size: 22px !important;
        }
        p {
          margin: 0 4%;
          font-size: 16px;
          line-height: 26px;
        }
      }
      .conversion-title, p {
        color: #0b193e;
      }
      .conversion-title {
        @media (max-width: 959.9px) {
          margin-bottom: 20px !important;
        }
      }
    }
  }
}
</style>