<template lang="html">
  <div class="body">
    <p>That's Plantae!</p>
    <plant-list :plants="plants"></plant-list>
  </div>
</template>

<script>
import PlantService from './services/PlantService.js';
import { eventBus } from './main.js';
import PlantList from './components/PlantList.vue';

export default {
  name:'app',
  components: {
    "plant-list": PlantList
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
}
</style>
