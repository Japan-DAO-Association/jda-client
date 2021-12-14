<template>
  <Aos>
    <v-row class="conversion-row">
      <v-col class="conversion-col">
        <H3>{{ $t('index.conversions.card.1.title') }}</H3>
        <div class="mx-4 mt-8">
          <NormalText>{{ $t('index.conversions.card.1.desc.1') }}<br />
          {{ $t('index.conversions.card.1.desc.2') }}</NormalText>
        </div>
      </v-col>
      <v-col class="conversion-col">
        <H3>{{ $t('index.conversions.card.2.title') }}</H3>
        <div class="mx-4 mt-8">
          <NormalText>{{ $t('index.conversions.card.2.desc') }}</NormalText>
        </div>
      </v-col>
    </v-row>
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
.conversion-row {
  @media (max-width: 700px) {
    display: block;
  }
  .conversion-col {
    @media (max-width: 700px) {
      // width: 60%;
      margin: 4px auto;
      p {
        margin: 0 8%;
      }
    }
    @media (max-width: 600px) {
      // width: 80%;
      p {
        margin: 0 10%;
      }
    }
    @media (max-width: 500px) {
      p {
        margin: 0;
      }
    }
  }
}
</style>