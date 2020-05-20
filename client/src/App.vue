<template lang="html">
  <div class="body">
    <p id="title">That's Plantae!</p>

    <div id="item" v-if="!plantDetailed">
      <random-plant :randomPlant="randomPlant"/>
    </div>

    <div id="container">
      <div id="item">
        <search :plantData="plantData" />
      </div>

      <div id="deets">
        <plant-detail :plantDetailed="plantDetailed"/>
      </div>

      <div id="item">
        <plant-list :plantData="plantData"></plant-list>
      </div>
    </div>

    <button class="accordion" name='gard'>My Garden</button>
    <div class="panel">
      <div id="container">
        <div id="item">
          <my-garden></my-garden>
        </div>
        <div id="item">
          <h3> Wish list </h3>
          <wish-list ></wish-list>
        </div>
      </div>
    </div>


    <div id="canvas">
      <garden-container />
    </div>

    <!-- <div class="canvas">
      <button v-on:click='snailHidden = !snailHidden'>Oh no, there's a snail!</button>
      <div v-if="!snailHidden">
        <canvas-component id="canvas"/>
      </div>
    </div> -->

  </div>
</template>

<script>


import PlantService from './services/PlantService.js';
import { eventBus } from './main.js';
import PlantList from './components/Plants/PlantList';
import Search from './components/Search.vue';
import MyGarden from './components/Garden/MyGarden.vue'
import PlantDetail from './components/Plants/PlantDetail'
import WishList from './components/WishList/WishList'
import Canvas from './components/GardenCanvas/Canvas'
import RandomPlant from './components/RandomPlant'
import GardenContainer from './components/GardenCanvas/GardenContainer'

require('@/assets/css/coreStyles.css')

export default {
  name:'app',

  data(){
    return{
      plantData: [],
      selectedPlant: null,
      plantDetailed: null,
      randomPlant: null,
      randomItem: null,
      snailHidden: true
    }
  },
  components: {
    "plant-list": PlantList,
    "my-garden": MyGarden,
    "plant-detail": PlantDetail,
    "search": Search,
    "wish-list": WishList,
    "canvas-component": Canvas,
    "random-plant": RandomPlant,
    "garden-container": GardenContainer
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

  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    })
  }

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

  @import './assets/css/coreStyles.css';

</style>
