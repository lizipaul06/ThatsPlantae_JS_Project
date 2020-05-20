<template lang="html">
  <div class="">
    <div class="fave-plant-list">
      <garden-item  v-for="(gardenItem, index) in myPlants"  :gardenItem="gardenItem" :key="index"/>
    </div>
  </div>

</template>

<script>
import { eventBus } from '../../main.js';
  import PlantService from '../../services/PlantService.js';
import GardenItem from './GardenItem.vue'

export default {
  name: 'garden-list',
  data() {
    return {
      myPlants: []
    }
  },
  components: {
    'garden-item': GardenItem
  },

  mounted(){
    this.fetchData();

    // this.owned();
    // when a plant from the list is added, push this to the myPlants array
    eventBus.$on('plant-added', plant =>
    this.myPlants.push(plant)
  );
  eventBus.$on('plant-owned', plant =>
  this.myPlants.push(plant).then(
    this.fetchData())
  );

  eventBus.$on("status-changed", () =>{
    this.fetchData()
  })

  // when a plant from the garden is deleted, slice this out of myPlants array
  eventBus.$on('plant-deleted', (id) => {
    let index = this.myPlants.findIndex(gardenItem => gardenItem._id === id)
    this.myPlants.splice(index, 1)
  });


},
methods: {
  // whenever the page loads, retrieve my fave plants from the garden db collection
  fetchData(){
    PlantService.getMyPlants()
    .then(favePlants => this.myPlants = favePlants.filter(plant => plant.owned == true));
    console.log(favePlants)
  }
}
}

</script>

<style lang="css" scoped>

  @import '../../assets/css/gardenStyles.css';

</style>
