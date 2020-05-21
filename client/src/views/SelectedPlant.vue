<template lang="html">
  <div>
  <h1> plant details </h1>
   <plant-detail  v-if="plantDetailed" :plantDetailed="this.plantDetailed">   </plant-detail>
 </div>
</template>

<script>
import { eventBus } from '../main.js';
import PlantDetail from '../components/Plants/PlantDetail';
import PlantService from '../services/PlantService.js';

export default {
  name:'selectedPlant',
  data(){
    return{

      selectedPlant: null,
      plantDetailed: null


    }
  },
  components: {
        "plant-detail": PlantDetail,

  },
  beforeCreate(){
    eventBus.$on('plant-selected', (plant) => {
      PlantService.getPlant(plant.id).then(res => this.plantDetailed = res)
    });

  }
}
</script>

<style lang="scss" scoped>
</style>
