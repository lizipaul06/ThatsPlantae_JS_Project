<template lang="html">

</template>

<script>
import { eventBus } from '../main.js';
import PlantService from '../services/PlantService.js';


export default {
  name: 'fave-plants-list',
  data() {
    return {
      plants: []
    }
  },
  components: {
    'plant': Plant
  },
  mounted(){
    this.fetchData()
    eventBus.$on('plant-added', plant =>
    this.plants.push(plant));

    eventBus.$on('plant-deleted', id => {
      const index =
      this.plants.findIndex(plant =>
      plant._id === id);
      this.plants.splice(index, 1);
    })
  },
  methods: {
    fetchData(){
      PlantService.getPlants()
      .then(plants => this.plants = plants);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
