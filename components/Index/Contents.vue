<template>
  <Aos>
    <Typography font="h3">Contents</Typography>
    <div class="mx-4 mt-8">
      <v-row
        justify="space-around"
        class="service-row"
      >
        <v-col
          v-for="item in items"
          :key="item.imgSrc"
          cols="12" xs="11" sm="5" md="5" lg="3"
          class="service-col text-center"
        >
          <img
            :src="item.imgSrc"
            alt="content image"
          >
          <Typography font="contents-h4" :class="item.titleStyle">{{ item.title }}</Typography>
          <Typography font="contents-normal">{{ item.desc }}</Typography>
        </v-col>
      </v-row>
    </div>
  </Aos>
</template>

<script>
import Aos from '@/components/Aos';
import Typography from '@/components/Typography';
import EarthImg from '@/assets/images/contents-earth.svg';
import PeopleImg from '@/assets/images/contents-people.svg';
import PencilImg from '@/assets/images/contents-pencil.svg';

export default {
  components: {
    Aos,
    Typography,
  },
  data: () => ({
    items: [],
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
          titleStyle: 'card-title',
          desc: this.$t('index.contents.card.2.desc')
        },
        {
          imgSrc: PencilImg,
          title: this.$t('index.contents.card.3.title'),
          titleStyle: '',
          desc: this.$t('index.contents.card.3.desc')
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.service-row {
  .service-col {
    padding: 16px 30px;
    box-sizing: border-box;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    .card-title {
      margin-bottom: 54px;
      @media (max-width: 1870px) {
        margin-bottom: 0;
      }
    }
  }
}
</style>