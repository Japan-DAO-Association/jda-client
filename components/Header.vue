<template>
  <v-app-bar
    fixed
    app
    class="px-md-4 pl-lg-16 pr-lg-12 header"
  >
    <nuxt-link to="/" class="top-link">
      <v-toolbar-title 
        class="ml-md-2 ml-lg-16"
        v-text="title"
      />
    </nuxt-link>
    <v-spacer />
    <div class="pc-nav-right">
      <nuxt-link 
        to="/mint-nft"
      >
        <v-btn
        depressed
        class="mr-md-2 mr-lg-16 mint-btn"
        >
          Mint your NFT
        </v-btn>
      </nuxt-link>
    </div>
    <v-app-bar-nav-icon
      class="burger"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      top
      right
      floating
      temporary
      class="sp-nav-content"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <nuxt-link 
              to="/mint-nft"
            >
              <v-btn
              depressed
              class="mr-md-2 mr-lg-16 mint-btn"
              >
                Mint your NFT
              </v-btn>
            </nuxt-link>
          </v-list-item>

          <!-- <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item> -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      title: 'Japan DAO Association',
      drawer: false,
      group: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(180deg, rgba(15, 36, 219, 1) 0%, rgba(40, 99, 232, 0.8) 100%);
  color: #fff;
  font-weight: 500;
  .top-link {
    color: #fff;
  }
  .pc-nav-right {
    .mint-btn {
      background: transparent;
      color: #fff;
      font-weight: 500;
      &:hover {
        opacity: 0.8;
        transition: 0.7s;
      }
    }
    @media (max-width: 580px) {
      display: none;
    }
  }
  .burger {
    display: none;
    @media (max-width: 580px) {
      display: block;
      color: #fff;
    }
  }
  .sp-nav-content {
    display: none;
    @media (max-width: 580px) {
      display: block;
      height: 104vh !important;
      padding-top: 100px;
      .mint-btn {
        background: transparent;
        // color: #fff;
        font-weight: 500;
        &:hover {
          opacity: 0.8;
          transition: 0.7s;
        }
      }
    }
  }
}
</style>