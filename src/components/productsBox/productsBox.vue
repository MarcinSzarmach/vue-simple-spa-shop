<template>
  <div class="row">
    <div class="col-xs-12 col-md-4 col-lg-3">
      <cartBox></cartBox>
    </div>
    <div class="col-xs-12 col-md-8 col-lg-9">
      <productsGrid :list="components.data.items"></productsGrid>
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
header {
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: all 0.3s ease;
}
.component-fade-enter {
  opacity: 0;
  transform: translateX(-20%);
}
.component-fade-leave-to {
  opacity: 0;
  transform: translateX(20%);
}
</style>