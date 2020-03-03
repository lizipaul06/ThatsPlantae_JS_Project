<template lang="html">
  <div class="body">
    <p id="title">That's Plantae!</p>
    <search :plantData="plantData" />
    <plant-list :plantData="plantData"></plant-list>
      <plant-detail :plantDetailed="plantDetailed"/>

    <!-- <ul>
      <li v-for="(plant, index) in this.plantDetails" :key="index" :plant="plant">
        {{plant.common_name}}</li>
      </ul> -->
      <!-- After search working, click the plant to show the details in the following format
            the first item of the plantDetails array used for reference -->
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

  methods: {

    //     .then(res => {
    //       // console.log(res); // Here I get what I need
    //       this.plantDetails.push(res);
    //     })
  },

  mounted(){
    PlantService.getPlants()
    .then( plants => {
      // debugger;
      // return this.plantData = plants.map(plant => plant.id)
      this.plantData
    });

    eventBus.$on('plant-selected', (plant) => {
      this.selectedPlant = plant
  PlantService.getPlant(this.selectedPlant.id).then(res => this.plantDetailed = res)

    });




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
  /* font-family: cursive; */
  font-size: 40px;
  /* background: url('../public/background.jpeg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  /* background-size: cover; */
  /* background-color: rgba(0.25, 255, 255, 255); */
  color: white;
}

#title {
  display: flex;
  justify-content: center;
  color: white;
}
.plantDetail{
  /* display: flex;
  flex-direction: column; */
margin: auto;
  /* align-items: center; */
  max-width: 100px;
}


</style>
