<template>
  <Aos>
    <H3>News</H3>
    <!-- medium apiから最新の記事の画像、リンク、日付、タイトルをとってくる -->
    <div class="mx-4 mt-8">
      <v-row>
        <v-col
          cols="3"
        >
          <a href="#" target="_blank" rel="noopener">
            <p>Date</p>
          </a>
        </v-col>
        <v-col
          cols="8"
        >
          <a href="#" target="_blank" rel="noopener">
            <p>title of an article</p>
          </a>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="3"
        >
          <a href="#" target="_blank" rel="noopener">
            <p>Date</p>
          </a>
        </v-col>
        <v-col
          cols="8"
        >
          <a href="#" target="_blank" rel="noopener">
            <p>title of an article</p>
          </a>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="3"
        >
          <a href="#" target="_blank" rel="noopener">
            <p>Date</p>
          </a>
        </v-col>
        <v-col
          cols="8"
        >
          <a href="#" target="_blank" rel="noopener">
            <p>title of an article</p>
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
  }
}
</script>