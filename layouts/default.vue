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
    <!-- <template>
      <cursor-fx
        ref="cursor"
        color="#000"
        color-hover="#000"
      />
    </template> -->
    <Footer />
  </v-app>
</template>

<script>
export default {
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
.app {
  overflow: hidden;
}
</style>