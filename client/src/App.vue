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
  .then( plants => this.plantData = plants.map(plant => plant.id))
  .then(() => {
      let fetches = []
      this.plantData.map(id => ( fetches.push(PlantService.getPlant(id))))
      console.log(fetches)
 // }).catch((fetches) => {console.log(fetches)}).then(res => res.json())
 //  .then(res => {
 //      console.log(res.data); // Here I get what I need
 //      this.plantDetails = res.data;
// .then(data => console.log(data))
        })

      // Promise.resolve(this.plantData)
      // .then(data => this.plantData = data.filter(data => data.PromiseStatus = "resolved"))


//
// })
}
}

// mounted(){
//   PlantService.getPlants()
//   .then(plants => this.plants = plants)
//   .then(() => {
//       let fetches = []
//       fetches.push(PlantService.getPlant(this.plants[0].id))
//       fetches.push(PlantService.getPlant(this.plants[1].id))
//       Promise.all(fetches)
//       .then(data => console.log(data))
//   })
// }
    </script>

    <style lang="css" scoped>

    </style>
