<template lang="html">
  <div class="body">
    <p>That's Plantae!</p>
  </div>
</template>

<script>
import PlantService from './services/PlantService.js'

export default {
  name:'app',
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
