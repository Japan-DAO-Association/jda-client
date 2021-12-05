<template>
  <v-row class="layout">
    <v-col
      cols="12" xs="10" md="10" lg="8"
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