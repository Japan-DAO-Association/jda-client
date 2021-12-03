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
        <v-row class="mt-12 mb-16">
          <v-col
            cols="12" xs="10" md="10" lg="8"
            class="mx-auto"
          >
            <h3 class="my-6 text-h4 font-weight-bold">News</h3>
            <!-- medium apiから最新の記事のリンク、日付、タイトルをとってくる -->
            <div class="mx-4 mt-8">
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
            </div>
          </v-col>
        </v-row>
        <!-- about -->
        <v-row class="my-16">
          <v-col
            cols="12" xs="10" md="10" lg="8"
            class="mx-auto"
          >
            <h3 class="my-6 text-h4 font-weight-bold">About</h3>
            <div class="mx-4 mt-8">
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
                  class="about-text"
                >
                  <p>Japan DAO AssociationはPear to Pearのジョブマッチングコミュニティです。<br /><br />
                  今後新しい組織運営・働き方として一般的になるDAOが集い、新しい働き方を模索する同志が集まる刺激的な場所です。皆様が海外のブロックチェーン業界、DAOで生計を立てることを目指す同志と切磋琢磨し、スキルと実績を積む機会を提供します。</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <!-- services -->
        <v-row class="my-16">
          <v-col
            cols="12" xs="10" md="10" lg="8"
            class="mx-auto"
          >
            <h3 class="my-6 text-h4 font-weight-bold">提供コンテンツ</h3>
            <div class="mx-4 mt-8">
              <v-row class="service-row">
                <v-col class="service-col">
                  <!-- <v-card
                    v-for="item in items"
                    :key="item.title"
                  >
                    sample
                  </v-card> -->
                  <v-card class="card">
                    <v-card-title class="card-title">Pear to Pearジョブマッチングコミュニティ</v-card-title>
                    <v-card-text class="card-text">“仕事”を介したシナジーが生まれる場所づくりを提供します</v-card-text>
                  </v-card>
                </v-col>
                <v-col class="service-col">
                  <v-card class="card">
                    <v-card-title class="card-title">ブロックチェーンエンジニア育成事業</v-card-title>
                    <v-card-text class="card-text">DAOで生きるブロックチェーンエンジニアの人材育成を行います</v-card-text>
                  </v-card>
                </v-col>
                <v-col class="service-col">
                  <v-card class="card">
                    <v-card-title class="card-title">インフルエンサー育成支援</v-card-title>
                    <v-card-text class="card-text">DAO関連インフルエンサー育成を支援していきます</v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <!-- conversions -->
        <v-row class="my-16">
          <v-col
            cols="12" xs="10" md="10" lg="8"
            class="mx-auto"
          >
            <v-row class="conversion-row">
              <v-col class="conversion-col">
                <h3 class="my-6 text-h4 font-weight-bold">海外DAOで働きたい方へ</h3>
                <div class="mx-4 mt-8">
                  <p>このプロジェクトの目的は、『DAOで生計を立てられる個人を増やす』ことです。<br />
                  ここで同じ志を持つ仲間と学び、実績を作り、経済的な自由を獲得しましょう。</p>
                </div>
              </v-col>
              <v-col class="conversion-col">
                <h3 class="my-6 text-h4 font-weight-bold">DAOの採用担当者の方へ</h3>
                <div class="mx-4 mt-8">
                  <p>採用を実施しているDAOや投資家、経営者、企業の採用担当者の方は、ここで実際に仕事を探す人とコミュニケーションを取ることにより採用コストやミスマッチを減らす事ができます。</p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- alliances -->
        <v-row class="my-16">
          <v-col
            cols="12" xs="10" md="10" lg="8"
            class="mx-auto"
          >
            <v-row>
              <v-col>
                <h3 class="my-6 text-h4 font-weight-bold">提携DAOコミュニティ</h3>
                <div class="mx-4 mt-8">
                  <v-row class="alliance-row">
                    <v-col>
                      <v-card class="card">
                        <v-card-title class="card-title">ブロックチェーン研究所</v-card-title>
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card class="card">
                        <v-card-title class="card-title">Soundan NFT</v-card-title>
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card class="card">
                        <v-card-title class="card-title">DfinityJP</v-card-title>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- roadmap -->
        <v-row class="my-16">
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
  .about-text {
    @media (max-width: 960px) {
      margin-top: 10px;
    }
    @media (max-width: 700px) {
      padding: 0 20%;
    }
    @media (max-width: 600px) {
      padding: 0 12%;
    }
  }
  .service-row {
    @media (max-width: 700px) {
      display: block;
    }
    .service-col {
      @media (max-width: 700px) {
        width: 60%;
        margin: 4px auto;
      }
      @media (max-width: 600px) {
        width: 80%;
      }
      .card {
        height: 244px;
        padding: 16px 10px;
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
        @media (max-width: 960px) {
          padding: 10px 6px;
        }
        @media (max-width: 700px) {
          height: 200px;
        }
        .card-title {
          font-family: "Noto Sans CJK JP";
          font-weight: bold;
          font-size: 24px;
          line-height: 36px;
          color: #0A2942;
          @media (max-width: 960px) {
            font-size: 20px;
            line-height: 32px;
          }
        }
        .card-text {
          font-family: "Noto Sans CJK JP";
          font-weight: normal;
          font-size: 18px;
          line-height: 26px;
          color: #636B78;
          @media (max-width: 960px) {
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
    }
  }
  .conversion-row {
    @media (max-width: 700px) {
      display: block;
    }
    .conversion-col {
      @media (max-width: 700px) {
        // width: 60%;
        margin: 4px auto;
        p {
          margin: 0 20%;
        }
      }
      @media (max-width: 600px) {
        // width: 80%;
        p {
          margin: 0 10%;
        }
      }
    }
  }
  .alliance-row {
    @media (max-width: 600px) {
      display: block;
    }
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