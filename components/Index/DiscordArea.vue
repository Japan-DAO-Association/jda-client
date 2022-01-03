<template>
  <v-row
    class="discord-area"
  >
    <GradientBorder radius="8" class="discord-border text-center mx-auto">
      <v-col
        class="discord-area-col px-8"
      >
        <Typography font="discordarea-h3">Japan DAO Association Discord Community</Typography>
        <div class="mb-4 text-center">
          <DiscordButton />
        </div>
      </v-col>
    </GradientBorder>
  </v-row>
</template>

<script>
import Typography from '@/components/Typography';
import DiscordButton from '@/components/DiscordButton';

export default {
  components: {
    Typography,
    DiscordButton,
  }
}
</script>

<style lang="scss" scoped>
.discord-area {
  position: absolute;
  bottom: 100px;
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
  .discord-area-col {
    background: #0B193E;
    box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.16);
  }
}
</style>