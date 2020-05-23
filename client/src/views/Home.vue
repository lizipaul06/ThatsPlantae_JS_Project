<template lang="html">
  <b-container>
    <b-col class="text-center">
      <p id="title">That's Plantae!</p>
    </b-col>
    <b-col class="text-center">
       <random-plant :randomPlant="randomPlant"/>
    </b-col>
    <b-row>
      <b-col>  <search :plantData="plantData" /> </b-col>
      <b-col>   <plant-list :plantData="plantData"></plant-list></b-col>
    </b-row>

  </b-container>


</template>

<script>

import PlantService from '../services/PlantService.js';
import { eventBus } from '../main.js';
import Search from '../components/Search';
import RandomPlant from '../components/RandomPlant';
import PlantList from '../components/Plants/PlantList';


export default {
    name:'Home',
    data(){
      return{
      plantData: [],
        randomPlant: null,
        selectedPlant: null,
        plantDetailed: null

      }
    },
    components: {
      "random-plant": RandomPlant,

    "search": Search,
        "plant-list": PlantList,
    },
    mounted(){

        PlantService.getPlants().then(plantData => this.plantData = plantData.sort(function (a, b){
          if (a.common_name < b.common_name) {
            return -1;
          }
          if (b.common_name < a.common_name) {
            return 1;
          }
          return 0;
        })
      ).then(plantData => plantData[Math.floor(Math.random()* plantData.length)]).then(plant => PlantService.getPlant(plant.id).then(res => this.randomPlant = res))

      eventBus.$on('plant-selected', (plant) => {
        this.selectedPlant = plant
        PlantService.getPlant(this.selectedPlant.id).then(res => this.plantDetailed = res)
      });

  },
  watch:{
  plantDetailed() {
        this.$router.push({name:'selectedplant', params:{plantDetail: this.plantDetailed}},)
  }
}
}

</script>

<style lang="scss" scoped>
  @import '../assets/css/coreStyles.scss';
</style>
