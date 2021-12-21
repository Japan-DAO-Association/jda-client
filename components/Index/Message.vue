<template>
  <Aos>
    <H3 class="message-h3 text-center">
      DAO Connecting DAO to DAO<br />
      DAO to all individuals.
    </H3>
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
.message-h3 {
  color: #fff;
  font-family: Raleway !important;
  font-style: italic;
  font-weight: 300 !important;
  font-size: 40px !important;
  line-height: 56px;
  margin: 60px auto !important;
  @media (max-width: 500px) {
    font-size: 24px !important;
  }
  @media (max-width: 400px) {
    font-size: 22px !important;
  }
}
</style>