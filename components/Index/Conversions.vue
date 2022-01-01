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
          <Typography font="conversion-h3" class="conversion-title">{{ $t('index.conversions.card.1.title') }}</Typography>
          <div>
            <Typography font="conversion-normal">{{ $t('index.conversions.card.1.desc.1') }}<br />
            {{ $t('index.conversions.card.1.desc.2') }}</Typography>
          </div>
        </v-col>
        <v-col
          cols="12" xs="11" sm="10" md="6" lg="5"
          class="conversion-col"
        >
          <Typography font="conversion-h3" class="conversion-title">{{ $t('index.conversions.card.2.title') }}</Typography>
          <div>
            <Typography font="conversion-normal">{{ $t('index.conversions.card.2.desc') }}</Typography>
          </div>
        </v-col>
      </v-row>
    </v-card>
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
      .conversion-title {
        @media (max-width: 959.9px) {
          margin-bottom: 20px !important;
        }
      }
    }
  }
}
</style>