<template>
  <div class="cartItem">
    <div class="cartItem_box">
      <span class="cartItem_quantity">{{item.quantity}}</span>
      <span
        class="cartItem_name"
      >{{item.name.length>numerLetterToSlice ? `${item.name.slice(0, numerLetterToSlice)}...` : item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numerLetterToSlice: 25
    };
  },
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
.cartItem {
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px 10px;
  background-color: $dark-blue;
  &_box {
    display: flex;
  }
  &_name {
    color: $white;
    padding-left: 5px;
  }
  &_quantity {
    color: $accent;
    font-weight: 500;
    min-width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>