<template>
  <Aos>
    <v-row
      class="roadmap-wrapper"
    >
      <v-col>
        <Typography font="h3" class="text-center">Roadmap</Typography>
        <div class="mx-4 mt-0">
          <v-row class="roadmap-row">
            <v-col
              class="roadmap-col"
            >
              <Aos
                v-for="item in items"
                :key="item.text"
                class="roadmap-aos mx-auto"
              >
                <v-row>
                  <v-col
                    cols="4" xs="4" sm="4" md="4" lg="4"
                    class="roadmap-image-wrapper"
                  >
                    <img
                      :src="item.image"
                      alt="roadmap timeline image"
                      class="roadmap-image"
                    >
                  </v-col>
                  <v-col
                    cols="7" xs="7" sm="7" md="7" lg="7"
                  >
                    <Typography font="roadmap-h4" :innertexts="item.text" />
                  </v-col>
                </v-row>
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
import Typography from '@/components/Typography';
import roadmapV1 from '@/assets/images/roadmap-v1.svg';
import roadmapV2 from '@/assets/images/roadmap-v2.svg';
import roadmapV3 from '@/assets/images/roadmap-v3.svg';
import roadmapV4 from '@/assets/images/roadmap-v4.svg';
// import roadmapV5 from '@/assets/images/roadmap-v5.svg';

export default {
  components: {
    Aos,
    Typography,
  },
  data: () => ({
    items: [
      { text: '- JDA Team Established<br />- Community Launch (Discord)', image: roadmapV1 },
      { text: '- WhitePaper Release<br />- Official Media Launch (Twitter, Medium, Website)<br />- Community Event', image: roadmapV2 },
      { text: '- GEN0 NFT Release on Dfinity and Polygon<br />- NFT Airdrop<br />- Strengthening Collaboration (DAOs, Community, NFT Project)<br />- Community Event<br />- Official Launch of Cyber JDA School', image: roadmapV3 },
      { text: '- Official Launch of Cyber JDA School Platform on Dfinity and Polygon<br />- Official Launch of Cyber JDA Job Matching Platform on Dfinity and Polygon<br />- NFT Airdrop', image: roadmapV4 },
      // { text: 'Official Launch of Cyber JDA School Platform on Dfinity and Polygon<br />Official Launch of Cyber JDA Job Matching Platform on Dfinity and Polygon<br />NFT Airdrop', image: roadmapV5 },
    ]
  }),
}
</script>

<style lang="scss" scoped>
.roadmap-wrapper {
  margin-left: -10%;
  .roadmap-row {
    .roadmap-col {
      padding: 0 !important;
      margin-left: 5.8%;
      @media (max-width: 1500px) {
        margin-left: 4.8%;
      }
      @media (max-width: 899.9px) {
        margin-left: 3.8%;
      }
      @media (max-width: 580px) {
        margin-left: 0.8%;
      }
      @media (max-width: 500px) {
        margin-left: -0.2%;
      }
      .roadmap-aos {
        margin-top: 4%;
        margin-bottom: 4%;
        .roadmap-image-wrapper {
          @media (max-width: 1100px) {
            display: flex;
            align-items: center;
          }
          .roadmap-image {
            @media (max-width: 1100px) {
              width: 200px;
            }
            @media (max-width: 899.9px) {
              width: 154px;
            }
            @media (max-width: 580px) {
              width: 90px;
            }
          }
        }
      }
    }
  }
}
</style>