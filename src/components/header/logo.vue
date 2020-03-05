<template>
  <div class="logo">
    <h4>
      <a @click.prevent="$router.push('/products')" href="/products">LOGO</a>
    </h4>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  margin: 0 30px;
  @media screen and (max-width: 768px) {
    margin: 0 0 0 15px;
  }
  h4 {
    font-weight: 200;
    font-size: 20px;
  }
}
</style>