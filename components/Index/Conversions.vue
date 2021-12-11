<template>
  <Aos>
    <v-row class="conversion-row">
      <v-col class="conversion-col">
        <H3>海外DAOで働きたい方へ</H3>
        <div class="mx-4 mt-8">
          <NormalText>このプロジェクトの目的は、『DAOで生計を立てられる個人を増やす』ことです。<br />
          ここで同じ志を持つ仲間と学び、実績を作り、経済的な自由を獲得しましょう。</NormalText>
        </div>
      </v-col>
      <v-col class="conversion-col">
        <H3>DAOの採用担当者の方へ</H3>
        <div class="mx-4 mt-8">
          <NormalText>採用を実施しているDAOや投資家、経営者、企業の採用担当者の方は、ここで実際に仕事を探す人とコミュニケーションを取ることにより採用コストやミスマッチを減らす事ができます。</NormalText>
        </div>
      </v-col>
    </v-row>
  </Aos>
</template>

<script>
import Aos from '@/components/Aos';
import H3 from '@/components/Font/H3';
import NormalText from '@/components/Font/NormalText';

export default {
  components: {
    Aos,
    H3,
    NormalText,
  }
}
</script>

<style lang="scss" scoped>
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
</style>