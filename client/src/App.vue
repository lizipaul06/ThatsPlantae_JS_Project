<template lang="html">
  <div class="body">
    <p>That's Plantae!</p>
  </div>
</template>

<script>
import PlantService from './services/PlantService.js';
import token from './server/token.js';

export default {
  name:'app',
  data(){
    return{
      plants:[],
      plantsinfo:[],
      objects: []
    };
  },

  // computed:{
  //
  //   }
  //
  // },


  mounted(){
    PlantService.getPlants()
    .then(plants => this.plants = plants);

    PlantService.getPlants().then(plants => (this.plantsinfo = plants.map(plant => plant.link.concat(token))))

     // [3, 1337, "foo"]



}
}

</script>

<style lang="css" scoped>

</style>
