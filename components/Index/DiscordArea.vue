<template>
  <v-row
    class="discord-area"
  >
    <GradientBorder class="discord-border text-center mx-auto">
      <v-col
        class="discord-area-col px-8"
      >
        <H3 class="discord-area-h3">Japan DAO Association Discord Community</H3>
        <div class="mb-4 text-center">
          <DiscordButton />
        </div>
      </v-col>
    </GradientBorder>
  </v-row>
</template>

<script>
import H3 from '@/components/Font/H3';
import DiscordButton from '@/components/DiscordButton';

export default {
  components: {
    H3,
    DiscordButton,
  }
}
</script>

<style lang="scss" scoped>
.discord-area {
  position: absolute;
  bottom: 12%;
  width: 100%;
  padding: 0 28%;
  @media (max-width: 1400px) {
    padding: 0 20%;
  }
  @media (max-width: 1100px) {
    bottom: 8%;
    padding: 0 16%;
  }
  @media (max-width: 600px) {
    padding: 0 4%;
  }
  @media (max-width: 580px) {
    // display: none;
  }
  .discord-border {
    border-radius: 8px;
    .discord-area-col {
      background: #0B193E;
      box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.16);
      border-radius: 8px;
      .discord-area-h3 {
        text-align: center;
        font-size: 30px !important;
        margin-bottom: 30px !important;
        @media (max-width: 580px) {
          font-size: 20px !important;
        }
      }
    }
  }
}
</style>