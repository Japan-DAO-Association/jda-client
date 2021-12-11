<template>
  <Aos>
    <H3>News</H3>
    <div class="mx-4 mt-8">
      <v-row
        v-for="article in articles"
        :key="article.title"
      >
        <v-col
          cols="3"
        >
          <a
            :href="article.link"
            target="_blank"
            rel="noopener"
          >
            <p>{{ article.pubDate }}</p>
          </a>
        </v-col>
        <v-col
          cols="8"
        >
          <a
            :href="article.link"
            target="_blank"
            rel="noopener"
          >
            <p>{{ article.title }}</p>
          </a>
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
  },
  data: () => ({
    articles: [],
  }),
  mounted() {
    this.getArticles();
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
  }
}
</script>