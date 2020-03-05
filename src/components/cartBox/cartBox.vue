<template>
  <div class="cartBox">
    <div>
      <div class="cartHeading">
        <span class="cartIcon glyphicon glyphicon-user"></span>
        <span class="cartHeadingTitle">Contact</span>
      </div>
      <div class="cartHeading">
        <span
          class="cartHeadingDesc"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a justo in nisi vulputate eleifend ac eget justo.</span>
      </div>
    </div>
    <div>
      <div class="cartHeading">
        <span class="cartIcon glyphicon glyphicon-shopping-cart"></span>
        <span class="cartHeadingTitle">
          Cart
          <span v-if="cartFiltered.length">( {{ cartFiltered.length }} )</span>
        </span>
      </div>
      <div class="cartContent" :class="{empty: !cartFiltered.length}">
        <div class="cartEmpty" v-if="!cartFiltered.length">
          <h4>Cart is empty</h4>
        </div>
        <div class="cartElem" v-if="cartFiltered.length">
          <cartItem
            v-if="cartFiltered.length"
            v-for="item in cartFiltered"
            :key="item.slug"
            :item="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartItem from "./cartItem.vue";

export default {
  components: {
    cartItem
  },
  created() {
    this.$store.dispatch("getCart");
  },
  computed: {
    cartFiltered() {
      return this.$store.getters.cartFiltered;
    },
    cart() {
      return this.$store.state.cart;
    }
  }
};
</script>

<style lang="scss" scoped>
.cartBox {
  padding: 20px;
  background-color: $light-blue;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  .cartHeading {
    color: $white;
    margin-bottom: 20px;
    .cartIcon {
      font-size: 20px;
    }
    .cartHeadingTitle {
      font-size: 16px;
      margin-left: 30px;
      font-weight: 400;
    }
    .cartHeadingDesc {
      color: $gray;
    }
  }
  .cartContent {
    min-height: 300px;
    border: dashed 2px $white;
    border-image-source: url("../../assets/images/border.png");
    border-image-slice: 2;
    border-image-repeat: round;
    border-image: url("../../assets/images/border.png") 2 round;
    &.empty {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cartElem {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 10px 20px;
    }
    .cartEmpty {
      color: $gray;
    }
  }
}
</style>