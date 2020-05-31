<template lang="html">
  <div id="app" class="body">

    <div>
      <b-navbar  type="light"  >
        <b-navbar-brand href="#"></b-navbar-brand>


        <b-navbar-nav >
          <b-nav-item to="/" > Home</b-nav-item>
          <b-nav-item to="/garden" > Garden</b-nav-item>
          <b-nav-item to="/wishlist" > WishList</b-nav-item>
          <b-nav-item to="/gardenCanvas" > GardenCanvas</b-nav-item>
        </b-navbar-nav>

        <plant-list ></plant-list>
        <!-- <search :plantData="plantData" /> -->
      </b-navbar>
    </div>


    <router-view/>

  </div>

</div>


</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PlantService from './services/PlantService.js';
import { eventBus } from './main.js';
import Search from './components/Search';
import Home from './views/Home';
import PlantList from './components/Plants/PlantList';
require('@/assets/css/coreStyles.scss')


export default {
  name: 'app',
  data(){
    return{
      randomPlant: null,
      random: null,

    }
  },
  components: {
    "home": Home,
    "search": Search,
    "plant-list": PlantList,
  },
  methods:{
    ...mapActions(['fetchPlants']),
    randomSelect(){


    },

  },
  computed: mapGetters(['allPlants']),
  created(){
    this.fetchPlants();
  },

  updated(){
    this.randomSelect()


  },

  watch:{

    randomPlant(){
      eventBus.$emit('random-plant', this.randomPlant)
    }


  }
}
</script>

<style lang="scss" scoped>

@import './assets/css/coreStyles.scss';

</style>
