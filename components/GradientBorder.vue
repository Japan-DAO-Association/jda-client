<template>
  <!-- propsでborder radiusを指定したい -->
  <div class="gradient-border">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.gradient-border {
  background: linear-gradient(to right, #467de7, #da46e7);
  padding: 2px;
}
</style>