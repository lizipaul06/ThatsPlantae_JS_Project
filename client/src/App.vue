<template lang="html">
  <div class="body">
    <p id="title">That's Plantae!</p>
    <search :plants="plants" />
    <!-- <plant-list :plants="fakePlants"></plant-list> -->
    <ul>
      <li v-for="(plant, index) in this.plantDetails" :key="index" :plant="plant"> {{plant.common_name}} </li>
    </ul>
    <my-garden></my-garden>
  </div>
</template>

<script>
import PlantService from './services/PlantService.js';
import { eventBus } from './main.js';
import PlantList from './components/PlantList.vue';
import Search from './components/Search.vue';

// Added MyGarden to frontpage for visibility as no router added yet
import MyGarden from './components/MyGarden.vue'

export default {
  name:'app',
  components: {
    "plant-list": PlantList,
    "search": Search,
    "my-garden": MyGarden
  },
  data(){
    return{
      plants:[],
      plantData: [],
      plantDetails: []
    }
  },
  methods: {
  },

  mounted(){
    PlantService.getPlants()
    .then( plants => this.plantData = plants.map(plant => plant.id))
  .then(() => {
      this.plantData.map(id => ( (PlantService.getPlant(id)
          .then(res => {
              // console.log(res); // Here I get what I need
              this.plantDetails.push(res);
          }))
        ))
// function gets promise for each plant waits for a response and then pushes it into the details array
      })
    }
  }



</script>

<style lang="css" scoped>

.body {
  font-family: cursive;
  font-size: 60px;
  background: url('../public/background.jpeg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: rgba(0.25, 255, 255, 255);
  color: white;
}

#title {
  display: flex;
  justify-content: center;
  color: white;
}



</style>
