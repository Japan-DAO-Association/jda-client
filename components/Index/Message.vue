<template>
  <Aos>
    <v-row
      class="message-row"
    >
      <v-col>
        <Typography font="message-h3" class="message-h3 text-center">
          DAO Connecting DAO to DAO<br />
          DAO to all individuals.
        </Typography>
        <DiscordArea />
      </v-col>
    </v-row>
  </Aos>
</template>

<script>
import Aos from '@/components/Aos';
import Typography from '@/components/Typography';
import DiscordArea from '@/components/Index/DiscordArea';

export default {
  components: {
    Aos,
    Typography,
    DiscordArea,
  }
}
</script>

<style lang="scss" scoped>
.message-row {
  position: relative;
  .message-h3 {
    margin: 60px auto 258px!important;
    @media (max-width: 599.9px) {
      margin: 60px auto 262px !important;
    }
  }
}
</style>