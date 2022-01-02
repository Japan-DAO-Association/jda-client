<template>
  <div
    v-if="radius === '8'"
    class="gradient-border radius-8"
  >
    <slot />
  </div>
  <v-col
    v-else-if="radius === '16' && col === true"
    cols="12" xs="11" sm="5" md="5" lg="3"
    class="gradient-border radius-16 service-col text-center my-2"
  >
    <div
      class="bg-navy col-inner"
    >
      <slot />
    </div>
  </v-col>
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
    "col",
  ]
}
</script>

<style lang="scss" scoped>
.gradient-border {
  background: linear-gradient(to right, #467de7, #da46e7);
  padding: 2px;
}
.bg-navy {
  background: #0b193e;
}
.radius-8 {
  border-radius: 8px;
  & * {
    border-radius: 8px !important;
  }
}
.radius-16 {
  border-radius: 16px;
  & * {
    border-radius: 16px !important;
  }
}
.radius-24 {
  border-radius: 24px;
  & * {
    border-radius: 24px !important;
  }
}
.service-col {
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}
.col-inner {
  padding: 16px 30px;
  height: 100%;
}
</style>