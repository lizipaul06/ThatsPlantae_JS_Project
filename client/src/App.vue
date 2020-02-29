<template lang="html">
  <div class="body">
    <p>That's Plantae!</p>
  </div>
</template>

<script>
import PlantService from './services/PlantService.js';
import token from './server/token.js';
// import Index from './server/index.js';

export default {
  name:'app',
  data(){
    return{
      plants:[],
      plantsinfo:[],
      objects: []

    };
  },
  methods: {



      },
      //           Promise.all(this.promises).then(data => {
      //
      //             const plantData = data.reduce(
      //
      //               (flat, toFlatten) => flat.concat(toFlatten),
      //               []
      //
      //             )
      // debugger;
      //               this.objects = plantData;
      //             }))
      //
      //     }
      //
      //
      //   },

      // computed:{
      //
      //   }
      //
      // },


      mounted(){
        PlantService.getPlants()
        .then(plants => this.plants = plants).then(plants => this.plantsinfo = plants.map(plant =>
             PlantService.getPlant(plant.id)))
      //
      //        .then( plantsinfo => this.objects = plantsinfo.map(id => PlantService.getPlant(id))).then(objects => Promise.all(objects))
      //        .then(data => this.objects = data);
      //
      //        .then(data => PlantService.getPlant(this.plants[0].id))
      //        .then(data => this.plantDetails.push(data))
      //        .then(data => PlantService.getPlant(this.plants[1].id))
      //        .then(data => this.plantDetails.push(data))
      //   // this.objects = this.plantsinfo.map(id => PlantService.getPlant(id))
      }
    };

    </script>

    <style lang="css" scoped>

    </style>
