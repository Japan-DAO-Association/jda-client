<template>
  <Aos>
    <H3>About</H3>
    <div class="mx-4 mt-8">
      <v-row>
        <v-col
          cols="12" xs="10" md="5" lg="5"
          class="my-auto"
        >
          <img
            src="@/assets/images/about.png" 
            alt="JDA Symbol"
            class="symbol-img"
          >
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          cols="12" xs="10" md="5" lg="5"
          class="about-text"
        >
          <!-- <p>Japan DAO AssociationはPear to Pearのジョブマッチングコミュニティです。<br /><br />
          今後新しい組織運営・働き方として一般的になるDAOが集い、新しい働き方を模索する同志が集まる刺激的な場所です。皆様が海外のブロックチェーン業界、DAOで生計を立てることを目指す同志と切磋琢磨し、スキルと実績を積む機会を提供します。</p> -->
          <p>Japan DAO Association is a Pear to Pear job matching community.<br /><br />
            It is a stimulating place for DAOs, which are becoming more common as a new way of working and managing organizations, to gather and for like-minded people to explore new ways of working. We provide an opportunity for you to improve your skills and achievements through friendly competition with other DAOs who are aiming to make a living in the blockchain industry overseas.</p>
        </v-col>
      </v-row>
    </div>
  </Aos>
</template>

<script>
import Aos from '@/components/Aos';
import H3 from '@/components/Font/H3';

export default {
  components: {
    Aos,
    H3,
  }
}
</script>

<style lang="scss" scoped>
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
</style>