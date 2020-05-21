import Home from './views/Home'
import Garden from './views/Garden'
import PlantWishList from './views/PlantWishList'
import selectedPlant from './views/SelectedPlant'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
let router = new Router({
  routes: [
    { path: '/',
     component: Home
   },
   { path: '/garden',
    component: Garden
  },
  { path: '/wishlist',
   component: PlantWishList
 },
 { path: '/selectedplant',
  name: 'selectedplant',
  component: selectedPlant
 },

  ]
})

export default router
