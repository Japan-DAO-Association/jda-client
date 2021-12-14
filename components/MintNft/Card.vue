<template>
  <v-card
    :loading="loading"
    class="card mx-auto my-12 px-4 pt-1 pb-2"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <H4 class="nft-title">NFT title</H4>
    <v-img
      height="250"
      src="ogp.png"
    ></v-img>
    <NormalText
      class="nft-desc"
    >
      blah blah blah blah blah blah blah blah
    </NormalText>
    <v-card-actions>
      <MintButton
        @reserve="reserve"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import H4 from '@/components/Font/H4';
import NormalText from '@/components/Font/NormalText';

export default {
  components: {
    H4,
    NormalText,
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),
  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  .nft-title {
    color: #000;
    margin: 16px !important;
  }
  .nft-desc {
    color: #000;
  }
  .mint-btn {
    background: linear-gradient(90deg, #467DE7 0%, #DA46E7 100%);
    border-radius: 8px;
    color: #fff;
  }
}
</style>