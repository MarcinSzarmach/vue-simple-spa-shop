<template>
  <a @click.prevent="$router.push(product.slug)" :href="product.slug" class="productSingle">
    <img :src="product.imageSmall" :alt="product.name" />
    <span class="productSingle_content">
      <h4 class="productSingle_title">{{ product.name }}</h4>
      <span class="productSingle_description">{{ product.name }}</span>
    </span>
  </a>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
.productSingle {
  margin-bottom: 30px;
  padding-bottom: 15px;
  display: block;
  background-color: $white;
  &_content {
    width: 100%;
    margin: 15px;
    display: block;
    @media screen and (max-width: 768px) {
      margin: 0;
    }
  }
  &_title {
    color: $dark-text;
  }
  &_description {
    color: $light-text;
  }
  &_backgroundImage {
    background-position: center;
    background-size: contain;
  }
}
</style>