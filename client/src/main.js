import Vue from 'vue'
import App from './App.vue'
import VueKonva from 'vue-konva'
import VueFuse from 'vue-fuse'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueKonva)
Vue.use(VueFuse)

Vue.config.productionTip = false

export const eventBus = new Vue();


new Vue({
  el: '#app',
  router,
  render: h => h(App)

}).$mount("#app");
