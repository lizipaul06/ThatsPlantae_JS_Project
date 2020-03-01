<template lang="html">
  <div class="body">
    <p id="title">That's Plantae!</p>
    <search :plants="plants" />
    <!-- <plant-list :plants="plants"></plant-list> -->
    <p>That's Plantae!</p>
    <ul>
    <li v-for="(plant, index) in this.plantData" :key="index" :plant="plant"> {{plant.common_name}} </li>
    </ul>
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


<<<<<<< HEAD
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




<<<<<<< HEAD
      mounted(){
        // PlantService.getPlants()
        // .then(plants => this.plants = plants).then(plants => this.plantsinfo = plants.map(plant =>
        //      PlantService.getPlant(plant.id)))
        //
        //      .then( plantsinfo => this.objects = plantsinfo.map(id => PlantService.getPlant(id))).then(objects => Promise.all(objects))
        //      .then(data => console.log(data));
        PlantService.getPlants()
        .then( plants => this.plantData = plants.map(plant => plant.id))
        .then(() => {
          let fetches = []
          this.plantData.map(id => ( fetches.push(PlantService.getPlant(id))))
            console.log(fetches)
        Promise.all(fetches).then(data => console.log(data))

        })


      }

//       mounted(){
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

       // here the promise is resolved so you can see the data
      // so if you want to perform some changes here's the place
   //      console.log (fetches)
   // })
      //        .then(data => PlantService.getPlant(this.plants[0].id))
      //        .then(data => this.plantDetails.push(data))
      //        .then(data => PlantService.getPlant(this.plants[1].id))
      //        .then(data => this.plantDetails.push(data))
      //   // this.objects = this.plantsinfo.map(id => PlantService.getPlant(id))

    }

=======
</style>
=======
//
// })
}
}
>>>>>>> develop

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
>>>>>>> develop
