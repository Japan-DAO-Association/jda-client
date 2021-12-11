<template>
<!-- 将来的にTypography.vueみたいな感じでpropsだけで汎用的に使えるようにしたい -->
  <p class="font-weight-bold normal-text-style">
    <slot></slot>
  </p>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.normal-text-style {
  font-size: 18px;
  line-height: 30px;
}
</style>