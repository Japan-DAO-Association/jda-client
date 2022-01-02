<template>
  <Aos>
    <Typography font="h3">Contents</Typography>
    <div class="mx-4 mt-8">
      <client-only>
        <v-row
          justify="space-around"
          class="service-row"
        >
          <GradientBorder
            v-for="item in items"
            :key="item.key"
            radius="16"
            :col="isGradientActive"
          >
            <img
              :src="item.imgSrc"
              alt="content image"
            >
            <Typography font="contents-h4" :class="item.titleStyle">{{ item.title }}</Typography>
            <Typography font="contents-normal">{{ item.desc }}</Typography>
          </GradientBorder>
        </v-row>
      </client-only>
    </div>
  </Aos>
</template>

<script>
import Aos from '@/components/Aos';
import GradientBorder from '@/components/GradientBorder';
import Typography from '@/components/Typography';
import EarthImg from '@/assets/images/contents-earth.svg';
import PeopleImg from '@/assets/images/contents-people.svg';
import PencilImg from '@/assets/images/contents-pencil.svg';

export default {
  components: {
    Aos,
    GradientBorder,
    Typography,
  },
  data: () => ({
    items: [],
    isGradientActive: true,
  }),
  mounted() {
    this.setItems();
  },
  methods: {
    setItems() {
      this.items = [
        {
          imgSrc: EarthImg,
          title: this.$t('index.contents.card.1.title'),
          titleStyle: '',
          desc: this.$t('index.contents.card.1.desc')
        },
        {
          imgSrc: PeopleImg,
          title: this.$t('index.contents.card.2.title'),
          // titleStyle: 'card-title',
          titleStyle: '',
          desc: this.$t('index.contents.card.2.desc')
        },
        {
          imgSrc: PencilImg,
          title: this.$t('index.contents.card.3.title'),
          titleStyle: '',
          desc: this.$t('index.contents.card.3.desc')
        },
      ];
    }
  }
}
</script>

<style lang="scss" scoped>
.service-row {
  .service-col {
    .card-title {
      margin-bottom: 54px;
      @media (max-width: 1870px) {
        margin-bottom: 0;
      }
    }
  }
}
</style>