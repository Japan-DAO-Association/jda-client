<template>
  <Aos>
    <v-row>
      <v-col>
        <H3>Affiliated DAO Communities</H3>
        <div class="mx-4 mt-8">
          <v-row
            class="alliance-row"
          >
            <v-col
              v-for="item in items"
              :key="item.name"
              cols="12" xs="12" sm="6" md="4" lg="4"
            >
              <a
                :href="item.link ? item.link : '#'"
                target="_blank"
                rel="noopener"
              >
                <GradientBorder class="card-border">
                  <v-card class="card">
                    <v-card-title class="card-title">{{ item.name }}</v-card-title>
                  </v-card>
                </GradientBorder>
              </a>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </Aos>
</template>

<script>
import Aos from '@/components/Aos';
import H3 from '@/components/Font/H3';
import GradientBorder from '@/components/GradientBorder';

export default {
  components: {
    Aos,
    H3,
    GradientBorder,
  },
  data: () => ({
    lang: '',
    items: []
  }),
  mounted() {
    this.setLang();
    this.setItems();
  },
  methods: {
    setLang () {
      this.lang = this.$i18n.locale;
    },
    setItems () {
      this.items = [
      { name: this.lang ==='en' ? 'Blockchain Laboratory' : 'ブロックチェーン研究所', link: 'https://discord.gg/CXFe2Dppkv' },
      { name: 'Soundan NFT', link: 'https://discord.gg/K2jgqzD2U8' },
      { name: 'Dfinity JP', link: 'https://discord.gg/uR7zwwFrDs' },
      { name: 'KudasaiJP', link: 'https://discord.gg/xHFyMwm7S9' },
      { name: 'NFTJPN', link: 'https://discord.gg/tufGSNfURX' },
      { name: 'ICP LAB JP', link: 'https://discord.gg/63YBD5s6UM' },
      { name: 'Ninja DAO', link: 'https://discord.gg/NT93kqYvjH' },
      { name: this.lang === 'en' ? 'Sofikura' : 'ソフィクラ', link: 'https://discord.gg/YHuAkSEGqy' },
      { name: this.lang === 'en' ? 'HODLer group' : 'HODLer会', link: 'https://discord.gg/gv4JqMUbQf' },
      { name: 'TITAN DAO', link: 'https://discord.com/invite/6qhj9YhQMd' },
      { name: this.lang === 'en' ? 'Crypto Golden Ball' : 'クリプト金玉', link: 'https://discord.gg/QS86AuTqnF' },
      { name: 'Yield Farming Lab（YFL）', link: 'https://discord.gg/yw2kcCyESU' },
      { name: 'Airdrop JAPAN', link: 'https://t.me/airdrop_JP' },
      { name: 'and more soon..', link: 'https://discord.com/invite/qacgSuSNYf' },
    ];
    }
  }
}
</script>

<style lang="scss" scoped>
.alliance-row {
  .card-border {
    border-radius: 24px;
    .card {
      background: #0A2942;
      border-radius: 24px;
      text-align: center;
      .card-title {
        display: inline-block;
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
        color: #fff;
      }
    }
  }
}
</style>