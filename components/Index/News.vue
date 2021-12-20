<template>
  <Aos>
    <H3>News</H3>
    <div class="mx-4 mt-8">
      <v-row
        class="article-link-row"
      >
        <v-col
          v-for="article in articles"
          :key="article.title"
          cols="12" xs="10" sm="10" md="4" lg="4"
        >
          <v-row
            class="article"
          >
            <v-col>
              <a
                :href="article.link"
                target="_blank"
                rel="noopener"
                class="article-link"
              >
                <v-img
                  :src="article.thumbnail"
                  max-width="450"
                  class="article-img"
                >
                </v-img>
                <NormalText>{{ article.title }}</NormalText>
                <NormalText>{{ article.pubDate }}</NormalText>
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </Aos>
</template>

<script>
import dayjs from 'dayjs';
import Aos from '@/components/Aos';
import H3 from '@/components/Font/H3';
import NormalText from '@/components/Font/NormalText';

export default {
  components: {
    Aos,
    H3,
    NormalText,
  },
  data: () => ({
    articles: [],
  }),
  mounted() {
    this.getArticles().then(this.fixPubDate);
  },
  methods: {
    async getArticles() {
      await this.$axios.get(`${process.env.RSS2JSON_URL}${process.env.MEDIUM_ACCOUNT_PAGE}feed/`).then((res) => {
        [...Array(3)].forEach((_, i) => {
          if (res.data.items[i] !== undefined) {
            this.articles.push(res.data.items[i]);
          }
        });
      }).catch((e) => {
        throw new Error(e);
      });
    },
    fixPubDate() {
      this.articles.forEach((el) => {
        el.pubDate = dayjs(el.pubDate).format('MM/DD/YYYY');
      });
    }
  },
}
</script>

<style lang="scss" scoped>
.article-link-row {
  @media (max-width: 950px) {
    justify-content: space-evenly;
  }
  .article-img {
    @media (max-width: 950px) {
      margin: 0 auto;
    }
  }
  .article-link {
    &:hover {
      div, p {
        transform: scale(1.02);
        opacity: 0.7;
        transition: 0.8s;
      }
    }
    @media (max-width: 950px) {
      text-align: center;
    }
  }
}
</style>
