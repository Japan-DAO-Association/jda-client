<template>
  <v-row 
    justify="center"
    align="center"
    class="wrapper"
  >
    <v-col cols="12">
      <HeroArea />
      <div class="mx-10">
        <!-- make rows and cols component -->
        <!-- news -->
        <v-row class="mt-12 mb-8">
          <v-col
            cols="12" xs="10" md="10" lg="8"
            class="mx-auto"
          >
            <h3 class="my-6 text-h4 font-weight-bold">News</h3>
            <!-- medium apiから最新の記事のリンク、日付、タイトルをとってくる -->
            <v-row>
              <v-col
                cols="3"
              >
                <a href="#" target="_blank" rel="noopener">
                  <p>日付</p>
                </a>
              </v-col>
              <v-col
                cols="8"
              >
                <a href="#" target="_blank" rel="noopener">
                  <p>記事のタイトル</p>
                </a>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="3"
              >
                <a href="#" target="_blank" rel="noopener">
                  <p>日付</p>
                </a>
              </v-col>
              <v-col
                cols="8"
              >
                <a href="#" target="_blank" rel="noopener">
                  <p>記事のタイトル</p>
                </a>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- about -->
        <v-row class="my-8">
          <v-col
            cols="12" xs="10" md="10" lg="8"
            class="mx-auto"
          >
            <h3 class="my-6 text-h4 font-weight-bold">About</h3>
            <v-row>
              <v-col
              cols="12" xs="10" md="5" lg="5"
              class="my-auto"
              >
                <img src="@/assets/images/about.png" 
                  alt="JDA Symbol"
                  class="symbol-img"
                >
              </v-col>
              <v-spacer></v-spacer>
              <v-col
                cols="12" xs="10" md="5" lg="5"
                class="xs-margin"
              >
                <p>Japan DAO AssociationはPear to Pearのジョブマッチングコミュニティです。<br /><br />
                今後新しい組織運営・働き方として一般的になるDAOが集い、新しい働き方を模索する同志が集まる刺激的な場所です。皆様が海外のブロックチェーン業界、DAOで生計を立てることを目指す同志と切磋琢磨し、スキルと実績を積む機会を提供します。</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- services -->
        <v-row class="my-8">
          <v-col
            cols="12" xs="10" md="10" lg="8"
            class="mx-auto"
          >
            <h3 class="my-6 text-h4 font-weight-bold">提供コンテンツ</h3>
            <v-row>
              <v-col>
                <!-- <v-card
                  v-for="item in items"
                  :key="item.title"
                >
                  sample
                </v-card> -->
                <v-card>sample</v-card>
              </v-col>
              <v-col>
                <v-card>sample</v-card>
              </v-col>
              <v-col>
                <v-card>sample</v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-card>sample</v-card>
              </v-col>
              <v-col>
                <v-card>sample</v-card>
              </v-col>
              <v-col>
                <v-card>sample</v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- conversions -->
        <v-row class="my-8">
          <v-col
            cols="12" xs="10" md="10" lg="8"
            class="mx-auto"
          >
            <v-row>
              <v-col>
                <h3 class="my-6 text-h4 font-weight-bold">海外DAOで働きたい方へ</h3>
                <p>このプロジェクトの目的は、『DAOで生計を立てられる個人を増やす』ことです。<br />ここで同じ志を持つ仲間と学び、実績を作り、経済的な自由を獲得しましょう。</p>
              </v-col>
              <v-col>
                <h3 class="my-6 text-h4 font-weight-bold">DAOの採用担当者の方へ</h3>
                <p>採用を実施しているDAOや投資家、経営者、企業の採用担当者の方は、ここで実際に仕事を探す人とコミュニケーションを取ることにより採用コストやミスマッチを減らす事ができます。</p>
              </v-col>

            </v-row>
          </v-col>
        </v-row>
        <!-- alliances -->
        <v-row class="my-8">
          <v-col
            cols="12" xs="10" md="10" lg="8"
            class="mx-auto"
          >
            <v-row>
              <v-col>
                <h3 class="my-6 text-h4 font-weight-bold">提携DAOコミュニティ</h3>
                <v-row>
                  <v-col>
                    <v-card>sample</v-card>
                  </v-col>
                  <v-col>
                    <v-card>sample</v-card>
                  </v-col>
                  <v-col>
                    <v-card>sample</v-card>
                  </v-col>
                  <v-col>
                    <v-card>sample</v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card>sample</v-card>
                  </v-col>
                  <v-col>
                    <v-card>sample</v-card>
                  </v-col>
                  <v-col>
                    <v-card>sample</v-card>
                  </v-col>
                  <v-col>
                    <v-card>sample</v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- roadmap -->
        <v-row class="my-8">
          <v-col
            cols="12" xs="10" md="10" lg="8"
            class="mx-auto"
          >
            <v-row>
              <v-col>
                <h3 class="my-6 text-h4 font-weight-bold">Roadmap</h3>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- faq -->
        <v-row class="my-8">
          <v-col
            cols="12" xs="10" md="10" lg="8"
            class="mx-auto"
          >
            <v-row>
              <v-col>
                <h3 class="my-6 text-h4 font-weight-bold">FAQ</h3>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.wrapper {
  background: rgba(11, 25, 62, 1);
  h3 {
    font-size: 48px;
  }
  .symbol-img {
    height: 224px;
    @media (max-width: 1600px) {
      height: 196px;
    }
    @media (max-width: 1400px) {
      height: 178px;
    }
    @media (max-width: 1050px) {
      height: 164px;
    }
    @media (max-width: 960px) {
      display: block;
      margin: 0 auto;
      height: 200px;
    }
    @media (max-width: 500px) {
      height: 168px;
    }
    @media (max-width: 400px) {
      height: 126px;
    }
  }
  .xs-margin {
    @media (max-width: 960px) {
      margin-top: 10px;
    }
  }
}
</style>