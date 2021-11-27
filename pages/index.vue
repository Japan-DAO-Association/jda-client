<template>
  <v-row 
    justify="center"
    align="center"
    class="wrapper"
  >
    <v-col cols="12">
      <HeroArea />
      <div class="mx-10">
        <!-- about -->
        <!-- make rows and cols component -->
        <v-row class="mt-12 mb-8">
          <v-col
            cols="12" xs="10" lg="8"
            class="mx-auto"
          >
            <h3 class="my-6 text-h4 font-weight-bold">About</h3>
            <v-row>
              <v-col>
                <img src="@/assets/images/about.png" 
                  alt="JDA Symbol"
                  class="symbol-img"
                >
              </v-col>
              <v-col>
                <p>Japan DAO AssociationはPear to Pearのジョブマッチングコミュニティです。今後新しい組織運営・働き方として一般的になるDAOが集い、新しい働き方を模索する同志が集まる刺激的な場所です。皆様が海外のブロックチェーン業界、DAOで生計を立てることを目指す同志と切磋琢磨し、スキルと実績を積む機会を提供します。</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- services -->
        <v-row class="my-8">
          <v-col
            cols="12" xs="10" lg="8"
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
            cols="12" xs="10" lg="8"
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
            cols="12" xs="10" lg="8"
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
            cols="12" xs="10" lg="8"
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
            cols="12" xs="10" lg="8"
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
    height: 80%;
  }
}
</style>