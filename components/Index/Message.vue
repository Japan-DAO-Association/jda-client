<template>
  <Aos>
    <v-row
      class="message-row"
    >
      <v-col>
        <H3 class="message-h3 text-center">
          DAO Connecting DAO to DAO<br />
          DAO to all individuals.
        </H3>
        <DiscordArea />
      </v-col>
    </v-row>
  </Aos>
</template>

<script>
import Aos from '@/components/Aos';
import H3 from '@/components/Font/H3';
import DiscordArea from '@/components/Index/DiscordArea';

export default {
  components: {
    Aos,
    H3,
    DiscordArea,
  }
}
</script>

<style lang="scss" scoped>
.message-row {
  position: relative;
  .message-h3 {
    color: #fff;
    font-family: Raleway !important;
    font-style: italic;
    font-weight: 300 !important;
    font-size: 40px !important;
    line-height: 56px;
    margin: 60px auto 258px!important;
    @media (max-width: 599.9px) {
      margin: 60px auto 262px !important;
    }
    @media (max-width: 500px) {
      font-size: 24px !important;
    }
    @media (max-width: 400px) {
      font-size: 22px !important;
    }
  }
}
</style>