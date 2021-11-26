<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
      class="px-md-4 pl-lg-16 pr-lg-12"
    >
      <v-toolbar-title 
        class="ml-md-2 ml-lg-16"
        v-text="title"
      />
      <v-spacer />
      <v-btn
      class="mr-md-2 mr-lg-16"
      >
        Japanese
      </v-btn>
    </v-app-bar>
    <v-main class="pb-0">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Japan DAO Association'
    }
  }
}
</script>
