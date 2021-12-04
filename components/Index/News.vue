<template>
  <div>
    <H3>News</H3>
    <!-- medium apiから最新の記事のリンク、日付、タイトルをとってくる -->
    <div class="mx-4 mt-8">
      <v-row>
        <v-col
          cols="3"
        >
          <a href="#" target="_blank" rel="noopener">
            <p>日付</p>
          </a>
        </v-col>
        <v-col
          cols="8"
        >
          <a href="#" target="_blank" rel="noopener">
            <p>記事のタイトル</p>
          </a>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="3"
        >
          <a href="#" target="_blank" rel="noopener">
            <p>日付</p>
          </a>
        </v-col>
        <v-col
          cols="8"
        >
          <a href="#" target="_blank" rel="noopener">
            <p>記事のタイトル</p>
          </a>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import H3 from '@/components/Font/H3';
export default {
  components: {
    H3,
  }
}
</script>