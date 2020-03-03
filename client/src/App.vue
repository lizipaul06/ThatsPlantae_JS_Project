<template lang="html">
  <div class="body">
    <p id="title">That's Plantae!</p>
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

    <!-- <ul>
    <li v-for="(plant, index) in this.plantDetails" :key="index" :plant="plant">
    {{plant.common_name}}</li>
  </ul> -->
  <!-- After search working, click the plant to show the details in the following format
  the first item of the plantDetails array used for reference -->
  <button class="accordion"> My Garden </button>
  <div class="panel">
  <my-garden></my-garden>
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
require('@/assets/css/style.css')

export default {
  name:'app',

  data(){
    return{
      plants:[],
      plantData: [],
      selectedPlant: null,
      plantDetailed: null
    }
  },
  components: {
    "plant-list": PlantList,
    "my-garden": MyGarden,
    "plant-detail": PlantDetail,
    "search": Search

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
        }))


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
        });
      }

    eventBus.$on('plant-selected', (plant) => {
      this.selectedPlant = plant
      PlantService.getPlant(this.selectedPlant.id).then(res => this.plantDetailed = res)
    });
  }
}


</script>

<style lang="css" scoped>



#title {
  display: flex;
  justify-content: center;
  color: white;
  font-size: 40px;
}
.plantDetail{
  /* display: flex;
  flex-direction: column; */
  margin: auto;
  /* align-items: center; */
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
  /* font-family: cursive; */
  font-size: 30px;
  /* background: url('../public/background.jpeg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  /* background-size: cover; */
  /* background-color: rgba(0.25, 255, 255, 255); */
  color: white;
}

#item{

}
#detees {
  width: 400px;
}

</style>
