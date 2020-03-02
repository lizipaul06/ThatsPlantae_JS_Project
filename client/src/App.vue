<template lang="html">
  <div class="body">
    <p id="title">That's Plantae!</p>
    <search :plants="plants" />
    <plant-list :plants="this.plantDetails"></plant-list>

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
      plantDetails: [],
      // an array of fake plants to use to test search function etc.
      // To be replaced by plantDetails once data returning correctly


    }
  },
  methods: {
  },

  mounted(){
    PlantService.getPlants()
    .then( plants => {
      // debugger;
      // return this.plantData = plants.map(plant => plant.id)
      this.plantData = plants;
    })
    // we have got plant overview objects
    
  //   .then(() => {
  //     this.plantData.map(id => ( (PlantService.getPlant(id)
  //     .then(res => {
  //       // console.log(res); // Here I get what I need
  //       this.plantDetails.push(res);
  //     }))
  //   ))
  //   // function gets promise for each plant waits for a response and then pushes it into the details array
  // })
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
