<template lang="html">
  <div class="fave-plant-list">
    <wish-item  v-for="plant in wishlistPlants"  :plant="plant"/>
  </div>
</template>

<script>

import { eventBus } from '../../main.js';
import PlantService from '../../services/PlantService.js';
import WishItem from './WishItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'wish-list',
  data() {
    return {

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
    let index = this.wishlist.findIndex(plant => plant._id === id)
    this.wishlist.splice(index, 1)
  });
  eventBus.$on("plant-owned", (id) =>{
    let index = this.wishlist.findIndex(plant => plant._id === id)
    this.wishlist.splice(index, 1)
  })

},
methods: {

},
computed:{
  ...mapGetters(['wishlistPlants']),

},
created(){
    this.fetchGardenPlants();
}
}
</script>

<style lang="scss" scoped>

</style>
