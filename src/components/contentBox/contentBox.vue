<template>
  <div class="contentBox">
    <div class="contentBox-content">
      <div v-html="components.data.html"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    components() {
      return this.$store.state.components;
    }
  }
};
</script>

<style lang="scss" scoped>
.contentBox {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 70vh;
  &-content {
    background-color: $white;
    max-width: 600px;
    width: 100%;
    padding: 40px 70px;
    @media screen and (max-width: 768px) {
      padding: 20px 20px;
    }
    /deep/ {
      .text-center {
        text-align: center;
      }
      .iconWrapper {
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 70px;
        border: 2px solid $light-blue;
        margin: 0 auto;
        margin-bottom: 40px;
        @media screen and (max-width: 768px) {
          margin-bottom: 20px;
        }
        .glyphicon {
          color: $light-blue;
          font-size: 25px;
        }
      }
      .h1 {
        color: $dark-text;
      }
      p,
      span,
      a {
        font-size: 18px;
        color: $light-text;
        line-height: 2em;
        font-weight: 300;
      }
    }
  }
}
</style>