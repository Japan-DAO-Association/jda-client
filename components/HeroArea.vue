<template>
  <v-row class="hero">
    <v-col cols="12">
      <!-- <h3>Life with DAO</h3> -->
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.hero {
  background-image: url('@/assets/images/heroarea.svg');
  background-size: 100% auto;
  height: 60vh;
  @media (max-width: 1500px) {
    background-size: auto 100%;
    background-position: center;
  }
  @media (max-width: 1350px) {
    height: 55vh;
  }
  @media (max-width: 1200px) {
    height: 48vh;
  }
  @media (max-width: 1050px) {
    height: 42vh;
  }
  @media (max-width: 900px) {
    height: 36vh;
  }
  // まだレスポンシブ対応必要だけど一度比率変えた画像をもらう
}
</style>