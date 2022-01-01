<template>
  <v-footer
    class="footer"
  >
    <FooterLayout>
      <v-row>
        <v-col
          cols="12" xs="10" sm="4" md="4" lg="3"
        >
          <v-row>
            <v-col
              class="left-col"
            >
              <img
                src="@/assets/images/jda-logo.svg"
                alt="jda logo"
              >
              <v-row class="sns-wrapper">
                <v-col
                  v-for="item in snsItems"
                  :key="item.type"
                  cols="3"
                >
                  <a
                    :href="item.url"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      :src="item.imgSrc"
                      :alt="item.imgAlt"
                    />
                  </a>
                </v-col>
              </v-row>
              <small class="copyright">&copy; 2021 Japan DAO Association.</small>
            </v-col>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          cols="12" xs="10" sm="7" md="7" lg="7"
        >
          <v-row>
            <v-col>
              <!-- <a
                href="whitepaper-en.pdf"
                target="_blank"
                rel="noopener"
              > -->
                <Typography class="footer-font">{{ $t('footer.whitepaper.en') }}</Typography>
              <!-- </a> -->
              <!-- <a
                href="whitepaper-ja.pdf"
                target="_blank"
                rel="noopener"
              >
                <Typography class="footer-font">{{ $t('footer.whitepaper.ja') }}</Typography>
              </a> -->
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </FooterLayout>
  </v-footer>
</template>

<script>
import Typography from '@/components/Typography';
import TwitterLogo from '@/assets/images/twitter-logo.svg';
import DiscordLogo from '@/assets/images/discord-footer-logo.svg';
import MediumLogo from '@/assets/images/medium-logo.svg';
import GithubLogo from '@/assets/images/github-logo.svg';

export default {
  components: {
    Typography,
  },
  data: () => ({
    snsItems: [
      {
        type: 'twitter',
        url: 'https://twitter.com/DaoAssociation',
        imgSrc: TwitterLogo,
        imgAlt: 'twitter logo',
      },
      {
        type: 'discord',
        url: 'https://discord.com/invite/qacgSuSNYf',
        imgSrc: DiscordLogo,
        imgAlt: 'discord logo',
      },
      {
        type: 'medium',
        url: process.env.MEDIUM_ACCOUNT_PAGE,
        imgSrc: MediumLogo,
        imgAlt: 'medium logo',
      },
      {
        type: 'github',
        url: 'https://github.com/Japan-DAO-Association',
        imgSrc: GithubLogo,
        imgAlt: 'github logo',
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.footer {
  background: #000 !important;
  color: #fff;
  position: relative;
  .left-col {
    @media (max-width: 600px) {
      display: flex;
      justify-content: space-between;
    }
    .sns-wrapper {
      margin-top: 2px;
      margin-bottom: 2px;
      @media (max-width: 600px) {
        width: 40%;
        max-width: 200px;
        margin: 2px auto;
      }
      img {
        width: 32px;
      }
    }
    .copyright {
      color: #fff;
      @media (max-width: 600px) {
        position: absolute;
        bottom: 10px;
      }
    }
  }
  .footer-font {
    font-weight: normal !important;
  }
}
</style>