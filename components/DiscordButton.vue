<template>
  <a
    href="https://discord.com/invite/qacgSuSNYf"
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
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.discord-btn {
  background: linear-gradient(90deg, #467DE7 0%, #DA46E7 100%);
  border-radius: 8px;
  width: 202px;
  height: 50px !important;
  color: #fff;
  .discord-btn-image {
    margin-right: 10px;
  }
}
</style>