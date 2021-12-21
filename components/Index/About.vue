<template>
  <Aos>
    <H3 class="text-center">About</H3>
    <div class="mx-4 mt-8">
      <v-row>
        <v-col
          cols="12" xs="11" sm="10" md="6" lg="6"
          class="image-wrapper"
        >
          <img
            src="@/assets/images/about-circle.svg"
            alt="about image"
            class="about-image"
          />
        </v-col>
        <v-col
          cols="12" xs="11" sm="10" md="6" lg="6"
          class="text-wrapper"
        >
          <NormalText class="text">{{ $t('index.about.desc.1') }}</NormalText>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12" xs="11" sm="10" md="6" lg="6"
          class="text-wrapper"
        >
          <NormalText class="text">{{ $t('index.about.desc.2') }}</NormalText>
        </v-col>
        <v-col
          cols="12" xs="11" sm="10" md="6" lg="6"
          class="image-wrapper"
        >
          <img
            src="@/assets/images/about-ring.svg"
            alt="about image"
            class="about-image"
          />
        </v-col>
      </v-row>
      <v-row>
          <NormalText class="about-text-bottom my-12">{{ $t('index.about.desc.3') }}</NormalText>
      </v-row>
    </div>
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
.image-wrapper {
  @media (max-width: 959.9px) {
    display: none;
  }
  .about-image {
    max-width: 95%;
  }
}
.text-wrapper {
  display: table;
  @media (max-width: 959.9px) {
    margin: 0 auto;
    padding-top: 6%;
    padding-bottom: 6%;
  }
  &:nth-of-type(2) {
    @media (max-width: 959.9px) {
      background-image: url('@/assets/images/about-circle.svg');
      background-size: auto 80%;
      background-position: 25% 50%;
    }
    @media (max-width: 500px) {
      background-size: auto 60%;
    }
  }
  &:nth-of-type(1) {
    @media (max-width: 959.9px) {
      background-image: url('@/assets/images/about-ring.svg');
      background-size: auto 60%;
      background-position: 75% 50%;
    }
    @media (max-width: 500px) {
      background-size: auto 38%;
    }
  }
  .text {
    display: table-cell;
    vertical-align: middle;
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
}
.about-text-bottom {
  margin: 0 14%;
  @media (max-width: 959.9px) {
    margin: 0 10%;
  }
  @media (max-width: 599.9px) {
    margin: 0 2%;
  }
  @media (max-width: 500px) {
    font-size: 14px !important;
  }
}
</style>
