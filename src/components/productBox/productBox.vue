<template>
  <div class="row">
    <div class="col-xs-12 col-md-4 col-lg-3">
      <cartBox></cartBox>
    </div>
    <div class="col-xs-12 col-md-8 col-lg-9">
      <productSingle :product="product"></productSingle>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.state.components.data.product;
    },
    components() {
      return this.$store.state.components;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>