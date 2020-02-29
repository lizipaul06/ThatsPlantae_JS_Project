<template lang="html">
  <div class="body">
    <p>That's Plantae!</p>
    <ul>
    <li v-for="(plant, index) in this.plantData" :key="index" :plant="plant"> {{plant.common_name}} </li>
    </ul>
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
  .then(() => {
      let fetches = []
      fetches = this.plants.filter(plant => PlantService.getPlant(plant.id))
      // fetches.push(PlantService.getPlant(this.plants[1].id))

      Promise.resolve(fetches).then(data => this.plantData = data)



})
}
}
    </script>

    <style lang="css" scoped>

    </style>
