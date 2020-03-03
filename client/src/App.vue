<template lang="html">
  <div class="body">
    <p id="title">That's Plantae!</p>

    <plant-list :plantData="plantData"></plant-list>
    <search :plantData="plantData" />
    <plant-detail :plantDetailed="plantDetailed" v-if="selectedPlant"/>

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
  },

  mounted(){
    PlantService.getPlants()
    .then( plants => {
      this.plantData = plants
    });

    eventBus.$on('plant-selected', (plant) => {
      this.selectedPlant = plant
      PlantService.getPlant(this.selectedPlant.id).then(res => this.plantDetailed = res)
    });
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
