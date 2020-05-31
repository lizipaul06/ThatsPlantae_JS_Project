import Vuex from 'vuex';
import Vue from 'vue';
import plants from './modules/plants';
import garden from './modules/garden';
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    plants,
    garden
  }
});
