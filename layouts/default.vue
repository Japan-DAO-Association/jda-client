<template>
  <v-app dark class="app">
    <Header />
    <v-main class="pb-0">
      <v-container 
        class="mx-0 px-0"
        style="max-width: 100%;"
      >
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.app {
  overflow: hidden;
}
</style>