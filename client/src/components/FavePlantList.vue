<template lang="html">
<div class="">
  <div class="fave-plant-list">
    <fave-plant  v-for="favePlant in myPlants"  :favePlant="favePlant" />
  </div>
</div>

</template>

<script>
import { eventBus } from '../main.js';
import PlantService from '../services/PlantService.js';
import FavePlant from './FavePlantListItem.vue'

export default {
  name: 'fave-plants-list',
  data() {
    return {
      myPlants: [],
      // ownedPlants: []

    }
  },
  components: {
    'fave-plant': FavePlant
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
			let index = this.myPlants.findIndex(favePlant => favePlant._id === id)
			this.myPlants.splice(index, 1)
		});







  },
  methods: {
    // whenever the page loads, retrieve my fave plants from the garden db collection
    fetchData(){
      PlantService.getMyPlants()
      .then(favePlants => this.myPlants = favePlants.filter(plant => plant.owned == true));

    }
      // mounted(){
      //   PlantService.getMyPlants()
      //   .then(().then(plant => this.ownedPlants= plant))


  }
}

</script>

<style lang="css" scoped>

.fave-plant-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>
