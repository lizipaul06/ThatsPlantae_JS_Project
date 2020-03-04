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

    <button class="accordion"> My Garden </button>

    <div class="panel">
      <div id="container">
<div id="item">
      <my-garden></my-garden>
    </div>
      <div id="item">
        <h1> Wish list </h1>
        <wish-list ></wish-list>
      </div>
    </div>
    </div>




    <div class="canvas">
      <button v-on:click='snailHidden = !snailHidden'>Oh no, there's a snail!</button>
      <div v-if="!snailHidden">
        <canvas-component id="canvas"/>
      </div>
    </div>

  </div>
</template>

<script>


import PlantService from './services/PlantService.js';
import { eventBus } from './main.js';
import PlantList from './components/PlantList.vue';
import Search from './components/Search.vue';
// Added MyGarden to frontpage for visibility as no router added yet
import MyGarden from './components/MyGarden.vue'
// Added PlantDetail to see properties
import PlantDetail from './components/PlantDetail'
import WishList from './components/WishList'
import Canvas from './components/Canvas'
import RandomPlant from './components/RandomPlant'

require('@/assets/css/style.css')

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
    "random-plant": RandomPlant
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

#canvas {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 25px
}

#title {
  display: flex;
  justify-content: center;
  color: white;
  font-size: 70px;
  font-family: Fredericka the Great;
  text-shadow: 2px 2px grey;
}
.plantDetail{
  margin: auto;
  max-width: 100px;
}
.panel {
  padding: 0 18px;
  background-color: rgba(212,169,134, 0.5);
  display: none;
  overflow: hidden;
}

.accordion {
  background-color: rgba(212,169,134, 0.6);
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 20%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  font-size: 30px;
  font-family: "Simonetta";
}

#container {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
}
.body {
  font-size: 30px;
  color: white;
}

#garden{
  /* width: 600px; */
}

#detees {
  width: 300px;
}

</style>
