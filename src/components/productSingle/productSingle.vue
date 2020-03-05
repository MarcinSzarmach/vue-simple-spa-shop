<template>
  <div class="productSingle">
    <img :src="product.imageBig" :alt="product.name" />
    <div class="productSingle_bottomContent">
      <div class="productSingle_content">
        <div class="productSingle_title">
          <h4>{{ product.name }}</h4>
        </div>
        <div class="productSingle_description">
          <span>{{ product.long_descriptoin }}</span>
        </div>
      </div>
      <div class="productSingle_buttonBox">
        <button
          :class="{added:added}"
          class="productSingle_button"
          v-if="!loading"
          v-on:click="addToCart"
        >{{ added ? "Added to cart" : "Add to cart" }}</button>
        <div class="productSingle_button" v-if="loading">Adding to cart ...</div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      loading: false,
      added: false
    };
  },
  props: {
    product: {
      type: Object,
      default: {}
    }
  },
  methods: {
    addToCart() {
      this.loading = true;
      this.$store
        .dispatch("addToCart", this.product)
        .then(data => {
          this.loading = false;
          this.added = true;
        })
        .catch(err => {});
    }
  },
  computed: {
    isInCart() {
      return _.includes(this.$store.state.cart, this.product);
    }
  }
};
</script>

<style lang="scss" scoped>
.productSingle {
  position: relative;
  @media screen and (max-width: 991px) {
    margin-top: 15px;
  }
  &_content {
    display: flex;
    flex-direction: column;
    width: 70%;
    padding-right: 30px;
    @media screen and (max-width: 1200px) {
      padding-right: 0;
      width: 100%;
    }
  }
  &_title {
    color: $white;
  }
  &_description {
    color: $white;
  }
  &_bottomContent {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $light-blue;
    @media screen and (max-width: 1200px) {
      padding: 20px;
      flex-wrap: wrap;
      position: relative;
    }
  }
  &_button {
    background-color: $accent;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 40px;
    width: 100%;
    border: none;
    color: $white;
    font-weight: 400;
    font-size: 18px;
    &.added {
      background-color: $accent-dark;
    }
  }
  &_buttonBox {
    width: 25%;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 1200px) {
      width: 100%;
      margin: 15px 0;
    }
  }
}
</style>