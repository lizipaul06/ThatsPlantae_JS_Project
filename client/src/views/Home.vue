<template lang="html">
  <div>
  <div id="container">

    <p id="title">That's Plantae!</p>

          <random-plant :randomPlant="randomPlant"/>

        </div>
        <div>
          <search :plantData="plantData" />
          </div>
          <div>
            <plant-list :plantData="plantData"></plant-list>
        </div>
        <div id="deets">
          <plant-detail :plantDetailed="plantDetailed"/>
        </div>
      </div>
</template>

<script>

import PlantService from '../services/PlantService.js';
import { eventBus } from '../main.js';
import Search from '../components/Search'
import RandomPlant from '../components/RandomPlant'
import PlantList from '../components/Plants/PlantList';
import PlantDetail from '../components/Plants/PlantDetail'
export default {
    name:'Home',
    data(){
      return{
      plantData: [],
        randomPlant: null,
        selectedPlant: null,
        plantDetailed: null,

      }
    },
    components: {
      "random-plant": RandomPlant,

          "plant-detail": PlantDetail,
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
      )
      eventBus.$on('plant-selected', (plant) => {
        this.selectedPlant = plant
        PlantService.getPlant(this.selectedPlant.id).then(res => this.plantDetailed = res)
      });


    PlantService.getPlants().then(plantData => plantData[Math.floor(Math.random()* plantData.length)])
    .then(plant => PlantService.getPlant(plant.id).then(res => this.randomPlant = res))
  }
  }

</script>

<style lang="css" scoped>
  @import '../assets/css/coreStyles.css';
</style>
