<template>
  <div
    v-if="radius === '8'"
    class="gradient-border radius-8"
  >
    <slot />
  </div>
  <div
    v-else
    class="gradient-border radius-24"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: [
    "radius",
  ]
}
</script>

<style lang="scss" scoped>
.gradient-border {
  background: linear-gradient(to right, #467de7, #da46e7);
  padding: 2px;
}
.radius-8 {
  border-radius: 8px;
  & * {
    border-radius: 8px;
  }
}
.radius-24 {
  border-radius: 24px;
  & * {
    border-radius: 24px;
  }
}
</style>