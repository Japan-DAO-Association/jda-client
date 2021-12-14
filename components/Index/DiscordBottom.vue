<template>
  <Aos class="discord">
    <div class="mx-4 mt-8">
      <v-row class="discord-row">
        <v-col
          cols="12" xs="12" sm="10" md="7" lg="7"
          class="my-auto"
        >
          <H3>Want to join our Discord Community?</H3>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          cols="12" xs="12" sm="10" md="3" lg="3"
          class="discord-btn-wrapper"
        >
          <DiscordButton />
        </v-col>
      </v-row>
    </div>
  </Aos>
</template>

<script>
import Aos from '@/components/Aos';
import H3 from '@/components/Font/H3';
import DiscordButton from '@/components/DiscordButton';

export default {
  components: {
    Aos,
    H3,
    DiscordButton,
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
  h3 {
    margin: 30px auto 40px !important;
    @media (max-width: 960px) {
      text-align: center;
      margin-bottom: 20px !important;
    }
  }
  .discord-btn-wrapper {
    padding: 40px 0;
    @media (max-width: 960px) {
      text-align: center;
    }
  }
}
</style>
