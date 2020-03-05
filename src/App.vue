<template>
  <div>
    <header>
      <logo></logo>
      <menuHeader></menuHeader>
    </header>
    <div class="container-fluid">
      <div class="spacerContent">
        <transition name="component-fade" mode="out-in">
          <component :is="isLoading ? 'loader' : components.component"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    components() {
      return this.$store.state.components;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
}

.spacerContent {
  margin: 70px;
  @media screen and (max-width: 1200px) {
    margin: 20px 0 0 0;
  }
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