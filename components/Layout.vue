<template>
  <v-row class="layout">
    <v-col
      cols="12" xs="12" sm="12" md="12" lg="9"
      class="mx-auto"
    >
      <slot></slot>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.layout {
  margin: 120px auto;
  @media (max-width: 580px) {
    margin: 80px auto;
  }
}
</style>