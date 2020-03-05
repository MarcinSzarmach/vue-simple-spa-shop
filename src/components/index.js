import Vue from "vue";

import loader from "./loader.vue"
import contentBox from "./contentBox/contentBox.vue"
import productBox from "./productBox/productBox.vue"
import productsBox from "./productsBox/productsBox.vue"
import productsGrid from "./productsBox/productsGrid.vue"
import productSingle from "./productSingle/productSingle.vue"
import productSingleMini from "./productSingleMini/productSingleMini.vue"
import cartBox from "./cartBox/cartBox.vue"
import logo from "./header/logo.vue"
import menuHeader from "./header/menuHeader.vue"

Vue.component("loader", loader)
Vue.component("logo", logo)
Vue.component("menuHeader", menuHeader)
Vue.component("contentBox", contentBox)
Vue.component("productBox", productBox)
Vue.component("cartBox", cartBox)
Vue.component("productsBox", productsBox)
Vue.component("productsGrid", productsGrid)
Vue.component("productSingle", productSingle)
Vue.component("productSingleMini", productSingleMini)