<template lang="html">
<div class="">
  <div class="fave-plant-list">
    <fave-plant v-for="favePlant in myPlants" :favePlant="favePlant" />
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

    eventBus.$on('plant-deleted', (id) => {
			let index = this.myPlants.findIndex(favePlant => favePlant._id === id)
			this.myPlants.splice(index, 1)
		})

    // eventBus.$on('plant-deleted', id => {
    //   const index =
    //   this.myPlants.findIndex(plant =>
    //   favePlant._id === id);
    //   this.myPlants.splice(index, 1);
    // })
  },
  methods: {
    fetchData(){
      PlantService.getMyPlants()
      .then(favePlants => this.myPlants = favePlants);
    }
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
