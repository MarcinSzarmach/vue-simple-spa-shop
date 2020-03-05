<template>
  <div class="row">
    <ul class="productGrid">
      <li v-for="(product, index) in list" :key="index" class="col-xs-4 col-md-4 col-lg-3">
        <productSingleMini :product="product"></productSingleMini>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
.productGrid {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  @media screen and (max-width: 991px) {
    margin-top: 25px;
  }
}
</style>