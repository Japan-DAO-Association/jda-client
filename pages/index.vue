<template>
  <v-row
    justify="center"
    align="center"
    class="wrapper"
  >
    <v-col cols="12" class="pb-0">
      <HeroArea />
      <div class="mx-10 pb-8">
        <Layout><News /></Layout>
        <Layout class="layout about-layout"><About /></Layout>
        <Layout>
          <Contents />
          <Conversions />
        </Layout>
        <Layout><Alliances /></Layout>
        <Layout class="layout roadmap-layout">
          <v-row>
            <v-col
              cols="1" xs="1" sm="1" md="1" lg="1"
              class="white-border"
            >
            </v-col>
            <v-col
            cols="11" xs="11" sm="11" md="11" lg="11"
            >
              <Roadmap />
            </v-col>
          </v-row>
        </Layout>
        <Message />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Layout from '@/components/Layout';
import HeroArea from '@/components/Index/HeroArea';
import News from '@/components/Index/News';
import About from '@/components/Index/About';
import Contents from '@/components/Index/Contents';
import Conversions from '@/components/Index/Conversions';
import Alliances from '@/components/Index/Alliances';
import Roadmap from '@/components/Index/Roadmap';
import Message from '@/components/Index/Message';

export default {
  components: {
    HeroArea,
    Layout,
    News,
    About,
    Contents,
    Conversions,
    Alliances,
    Roadmap,
    Message,
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  background: rgba(11, 25, 62, 1);
  .layout {
    width: 110%;
    margin-left: -5%;
    padding: 3.4% 5%;
    @media (max-width: 900px) {
      width: 120%;
      margin-left: -10%;
      padding: 3.4% 10%;
    }
    @media (max-width: 500px) {
      width: 130%;
      margin-left: -15%;
      padding: 3.4% 15%;
    }
  }
  .about-layout {
    background: linear-gradient(128.39deg, #4782DA -0.3%, #713BE4 38.36%, #CF4848 100%);
  }
  .discord-layout {
    background: #fff;
  }
  .roadmap-layout {
    background: linear-gradient(180deg, #467DE7 -0.03%, #DA46E7 100%);
    margin-bottom: 0 !important;
    display: flex;
    overflow: hidden;
    @media (max-width: 500px) {
      padding-right: 0;
    }
    @media (max-width: 400px) {
      padding-left: 0;
    }
    .white-border {
      height: 1224px;
      margin-top: -4.5%;
      margin-bottom: -4.5%;
      border-right: 4px solid #fff;
      @media (max-width: 1500px) {
        height: 1176px;
      }
      @media (max-width: 1100px) {
        height: 1044px;
      }
      @media (max-width: 899.9px) {
        height: 856px;
      }
      @media (max-width: 580px) {
        height: 732px;
      }
      @media (max-width: 500px) {
        height: 772px;
      }
    }
  }
  .discord-bottom-layout {
    margin-bottom: 0 !important;
    background-image: url("@/assets/images/discord-bg.svg");
    background-position: center;
    background-size: 18% auto;
    background-repeat: no-repeat;
    @media (max-width: 1300px) {
      background-size: 24% auto;
    }
    @media (max-width: 960px) {
      background-size: 36% auto;
    }
    @media (max-width: 700px) {
      background-size: 50% auto;
    }
  }
}
</style>