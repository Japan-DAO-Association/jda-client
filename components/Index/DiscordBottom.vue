<template>
  <Aos class="discord">
    <div class="mx-4 mt-8">
      <v-row class="discord-row">
        <v-col
          cols="12" xs="10" md="7" lg="7"
          class="my-auto"
        >
          <H3>Want to join our Discord Community?</H3>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          cols="12" xs="10" md="3" lg="3"
          class="discord-btn-wrapper"
        >
          <a
           href="https://t.co/SgOht8hbIA"
           target="_blank"
           rel="noopener"
          >
            <v-btn
              class="discord-btn"
            >
              <img
              src="@/assets/images/discord-btn.png"
              alt="Discord image"
              class="discord-btn-image"
              >
              Join Discord
            </v-btn>
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

<style lang="scss" scoped>
.discord {
  // background-image: url("@/assets/images/discord-bg.svg");
  // background-position: 25% center;
  // background-size: 30% auto;
  // @media (max-width: 960px) {
  //   background-position: center;
  // }
  // @media (max-width: 900px) {
  //   background-size: 42% auto;
  // }
  // @media (max-width: 700px) {
  //   background-size: 52% auto;
  // }
  // @media (max-width: 500px) {
  //   background-size: 90% auto;
  // }
  h3, p {
    color: #0A2942;
  }
  h3, .discord-btn {
    margin: 30px auto 40px;
  }
  h3 {
    @media (max-width: 960px) {
      text-align: center;
      margin-bottom: 20px !important;
    }
  }
  .discord-btn-wrapper {
    @media (max-width: 960px) {
      text-align: center;
    }
    .discord-btn {
      background: linear-gradient(90deg, #467DE7 0%, #DA46E7 100%);
      border-radius: 8px;
      width: 202px;
      height: 50px;
      color: #fff;
      @media (max-width: 960px) {
        margin: 0 auto 40px;
      }
      .discord-btn-image {
        margin-right: 10px;
      }
    }
  }
}
</style>
