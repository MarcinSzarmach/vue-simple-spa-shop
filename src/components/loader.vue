<template>
  <div class="loader">
    <div class="loaderDots">
      <div class="loading"></div>
      <div class="loading"></div>
      <div class="loading"></div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.loader {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loaderDots {
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .loading {
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 100%;
    float: left;
    margin-right: 5px;
    background: #505050;
    animation: bounce 1s linear infinite;
    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.3s;
    }
    &:nth-child(3) {
      animation-delay: 0.5s;
    }
  }
}
@keyframes bounce {
  0%,
  100% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
}

@-webkit-keyframes bounce {
  0%,
  100% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
}
</style>
