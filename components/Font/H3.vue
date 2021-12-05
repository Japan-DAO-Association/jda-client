<template>
<!-- 将来的にTypography.vueみたいな感じでpropsだけで汎用的に使えるようにしたい -->
  <h3 class="my-6 text-h4 font-weight-bold h3-style">
    <slot></slot>
  </h3>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.h3-style {
  margin-bottom: 80px !important;
  @media (max-width: 580px) {
    margin-bottom: 40px !important;
  }
}
</style>