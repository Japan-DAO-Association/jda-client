<template>
  <Aos>
    <v-row>
      <v-col>
        <H3>Roadmap</H3>
        <div class="mx-4 mt-0">
          <v-row class="roadmap-row">
            <v-col
              class="pl-16 roadmap-col"
            >
              <Aos
                v-for="item in items"
                :key="item.text"
                class="roadmap-aos mx-auto"
              >
                <!-- 文字の左に何かつけたい -->
                <!-- doneの項目とそうでないので横の・の色が違うなど区別したい -->
                <H4>{{ item.text }}</H4>
              </Aos>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </Aos>
</template>

<script>
import Aos from '@/components/Aos';
import H3 from '@/components/Font/H3';
import H4 from '@/components/Font/H4';

export default {
  components: {
    Aos,
    H3,
    H4,
  },
  data: () => ({
    items: [
      { text: 'Open Job Matching Community (done)' },
      { text: 'Publish Dapp and NFTs on Dfinity and Polygon' },
      { text: 'Release Blockchain Engineering School using NFT' },
      { text: 'Publish Job Matching Platform on Dfinity' },
    ]
  }),
}
</script>

<style lang="scss" scoped>
.roadmap-row {
  .roadmap-col {
    padding: 0 !important;
    .roadmap-aos {
      width: 42%;
      @media (max-width: 1600px) {
        width: 50%;
      }
      @media (max-width: 1400px) {
        width: 58%;
      }
      @media (max-width: 1100px) {
        width: 66%;
      }
      @media (max-width: 980px) {
        width: 76%;
      }
      @media (max-width: 850px) {
        width: 90%;
      }
      @media (max-width: 600px) {
        width: 100%;
      }
    }
  }
}
</style>