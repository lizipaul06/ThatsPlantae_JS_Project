<template lang="html">
  <div class="body">
    <p id="title">That's Plantae!</p>
    <!-- <search :plants="plants" /> -->
    <!-- <plant-list :plants="plants"></plant-list> -->
    <p>That's Plantae!</p>
    <ul>
    <!-- <li v-for="(plant, index) in this.plantData" :key="index" :plant="plant"> {{plant.common_name}} </li> -->
    </ul>
  </div>
</template>

<script>
import PlantService from './services/PlantService.js';
import { eventBus } from './main.js';
import PlantList from './components/PlantList.vue';
import Search from './components/Search.vue';

export default {
  name:'app',
  components: {
    "plant-list": PlantList,
    "search": Search
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
      let fetches = []
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
  background: url(https://images.unsplash.com/photo-1425736317462-a103b1303a35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: rgba(0.25, 255, 255, 255)
}

#title {
  display: flex;
  justify-content: center;
  color: white;
}



</style>
