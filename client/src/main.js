import Vue from 'vue'
import App from './App.vue'
import VueKonva from 'vue-konva'
import VueFuse from 'vue-fuse'

Vue.use(VueKonva)
Vue.use(VueFuse)

Vue.config.productionTip = false

export const eventBus = new Vue();


new Vue({
  render: h => h(App),
}).$mount('#app')
