<template lang="html">

  <div class="">
    <p>All The Plants In My Garden</p>
    <fave-plant v-for="favePlant in myPlants" :favePlant="favePlant" />
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
      myPlants: []
    }
  },
  components: {
    'fave-plant': FavePlant
  },
  mounted(){
    this.fetchData()
    eventBus.$on('plant-added', plant =>
    this.myPlants.push(plant));

    eventBus.$on('plant-deleted', id => {
      const index =
      this.plants.findIndex(plant =>
      plant._id === id);
      this.myPlants.splice(index, 1);
    })
  },
  methods: {
    fetchData(){
      PlantService.getMyPlants()
      .then(plants => this.myPlants = plants);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
