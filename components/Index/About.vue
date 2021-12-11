<template>
  <Aos>
    <H3>About</H3>
    <div class="mx-4 mt-8">
      <v-row>
        <v-col
          cols="12" xs="10" sm="10" md="5" lg="5"
          class="img-wrapper"
        >
          <img
            src="@/assets/images/about.png" 
            alt="JDA Symbol"
            class="symbol-img"
          >
        </v-col>
        <v-spacer class="spacer"></v-spacer>
        <v-col
          cols="12" xs="10" sm="10" md="6" lg="6"
          class="about-text"
        >
          <!-- <p>Japan DAO AssociationはPear to Pearのジョブマッチングコミュニティです。<br /><br />
          今後新しい組織運営・働き方として一般的になるDAOが集い、新しい働き方を模索する同志が集まる刺激的な場所です。皆様が海外のブロックチェーン業界、DAOで生計を立てることを目指す同志と切磋琢磨し、スキルと実績を積む機会を提供します。</p> -->
          <NormalText>Japan DAO Association, JDA, is a Pear to Pear Job Matching Community.<br />
            It's really a stimulating place for people exploring new working styles, because DAOs will be more common as a new way of working and managing organizations and lots of DAOs are joining JDA. JDA provides opportunities to improve your skills and achievements with your friends aiming to make a living in the blockchain companies and DAOs.</NormalText>
        </v-col>
      </v-row>
    </div>
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
.img-wrapper, .about-text {
  @media (max-width: 960px) {
    margin: 0 auto;
  }
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
  @media (max-width: 950px) {
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
.spacer {
  @media (max-width: 950px) {
    display: none;
  }
}
.about-text {
  @media (max-width: 950px) {
    margin-top: 10px;
  }
  @media (max-width: 700px) {
    padding: 0 20%;
  }
  @media (max-width: 600px) {
    padding: 0 12%;
  }
}
</style>