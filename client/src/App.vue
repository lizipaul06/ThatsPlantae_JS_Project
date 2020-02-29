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
      plants:[],
      plantData: [],
      plantDetails: []
    }
  },
  methods: {
  },
mounted(){
  PlantService.getPlants()
  .then(plants => this.plants = plants)

  // .then(this.getPlants())

  // .then(for (plant of plants){
  //   this.plantDetails.push(PlantService.getPlant(plant.id))
  // })

  .then(data => PlantService.getPlant(this.plants[0].id))
  .then(data => this.plantDetails.push(data))
  .then(data => PlantService.getPlant(this.plants[1].id))
  .then(data => this.plantDetails.push(data))
  // If you wanted to make several requests at once just push your requests into an array and do Promise.all(your_array).

  // .then(data => this.plantDetails = data.map( plant => (PlantService.getPlant(plant.id))))

  // .then(this.plantDetails => this.plantData = Promise.all(this.plantDetails))

  // Promise.all(this.plantDetails).then(data => plantData = data )
  // this.plantData = plantData



}
}
</script>

<style lang="css" scoped>
.body {
  font-family: cursive;
  font-size: 60px;
}
</style>
