<template lang="html">
  <div class="body">
    <p id="title">That's Plantae!</p>
    <search :plants="plants" />
    <!-- <plant-list :plants="plants"></plant-list> -->
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
      plants:[]
    }
  },
  mounted(){
    PlantService.getPlants()
    .then(plants => this.plants = plants)
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
