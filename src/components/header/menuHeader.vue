<template>
  <div class="header">
    <ul>
      <li
        :class="{active: item.slug == $route.path}"
        v-for="(item, index) in menuItems"
        :key="index"
      >
        <a :href="item.slug" @click.prevent="$router.push(item.slug)">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: "Home", slug: "/products" },
        { name: "About", slug: "/about" },
        { name: "Contact", slug: "/contact" }
      ]
    };
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.header {
  ul {
    display: flex;
    margin-right: 50px;
    margin-bottom: 0;
    @media screen and (max-width: 500px) {
      margin-right: 10px;
    }
    li {
      margin: 0 10px;
      @media screen and (max-width: 500px) {
        margin-bottom: 10px;
      }
      &.active {
        a {
          color: $light-blue;
        }
      }
      a {
        color: $light-text;
        transition: all 0.6s ease;
      }
    }
  }
}
</style>
