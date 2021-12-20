<template>
  <v-row
  >
    <v-col
      class="discord-heroarea-col"
    >
      <H3 class="discord-heroarea-h3">Japan DAO Association Discord Community</H3>
      <div class="mb-4 text-center">
        <DiscordButton />
      </div>
    </v-col>
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
.discord-heroarea-col {
  background: #0B193E;
  box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  .discord-heroarea-h3 {
    text-align: center;
    font-size: 30px !important;
    margin-bottom: 30px !important;
  }
}
</style>