import VueRouter from "vue-router";
import store from "../store";

function getComponents(slug, next) {
  store.dispatch('getComponents', slug).then(() => next()).catch(err => {
    console.log('tag', err);
    // here we should some eg toast to user, that something go wrong ;) 
  })
}

const router = new VueRouter({
  mode: "history",
  routes: [{
      path: `/`
    },
    {
      path: `/contact`
    },
    {
      path: `/about`
    },
    {
      path: `/products`
    },
    {
      path: `/product/:productSlug?`,
      beforeEnter: (to, from, next) => {
        if (to.params.productSlug) {
          next();
        } else {
          // small middleware to redirect user when no productSlug
          next('/products');
        }
      }
    },
  ],
})

router.beforeEach((to, from, next) => {
  getComponents(to.path, next)
})

export default router