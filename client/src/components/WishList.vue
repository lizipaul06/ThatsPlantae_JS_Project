<template lang="html">
<div>
      <wish-item  v-for="plant in wishlist"  :plant="plant"/>
</div>
</template>

<script>

import { eventBus } from '../main.js';
import PlantService from '../services/PlantService.js';
import WishItem from './WishItem.vue';

export default {
  name: 'wish-list',
  data() {
    return {
      wishlist: []
    };
  },
  components: {
    'wish-item': WishItem
  },

  mounted(){
    this.fetchData()

    eventBus.$on('plant-added-wishlist', plant =>
    this.wishlist.push(plant)
    );
    eventBus.$on('wish-item-deleted', (id) => {
      let index = this.wishlist.findIndex(plant => plant.id === id)
      this.wishlist.splice(index, 1)
    });
    eventBus.$on("plant-owned", (id) =>{
      let index = this.wishlist.findIndex(plant => plant.id === id)
      this.wishlist.splice(index, 1)
    })

  },
  methods: {
    fetchData(){
      PlantService.getMyPlants()
      .then(favePlants => this.wishlist = favePlants.filter(plant => plant.owned == false));

    }

    }


}
</script>

<style lang="css" scoped>
</style>
