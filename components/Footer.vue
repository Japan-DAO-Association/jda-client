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
                  cols="3"
                >
                  <a
                    href="https://twitter.com/DaoAssociation"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="@/assets/images/twitter-logo.svg"
                      alt="twitter logo"
                    >
                  </a>
                </v-col>
                <v-col
                  cols="3"
                >
                  <a
                    href="https://discord.com/invite/qacgSuSNYf"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="@/assets/images/discord-footer-logo.svg"
                      alt="discord logo"
                    >
                  </a>
                </v-col>
                <v-col
                  cols="3"
                >
                  <a
                    :href="mediumLink"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="@/assets/images/medium-logo.svg"
                      alt="medium logo"
                    >
                  </a>
                </v-col>
                <v-col
                  cols="3"
                >
                  <a
                    href="https://github.com/Japan-DAO-Association"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="@/assets/images/github-logo.svg"
                      alt="github logo"
                    >
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

export default {
  components: {
    Typography,
  },
  data: () => ({
    mediumLink: process.env.MEDIUM_ACCOUNT_PAGE,
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