<template lang="html">
  <div class='wishy'>

    <li>{{plant.common_name}}</li>
    <div class="flex">
      <button v-on:click="deleteItem">Remove From WishList</button>
      <button v-on:click="updateOwned">Add To Garden</button>
    </div>

  </div>
</template>

<script>
import PlantService from '../../services/PlantService.js';
import { eventBus } from '../../main.js';
export default {
  name: "wish-item",
  props: ['plant'],
  methods:{
    deleteItem(){
      PlantService.deletePlant(this.plant._id)
      .then(() =>  eventBus.$emit('wish-item-deleted', this.plant._id))
    },
    updateOwned(){
      const wish = {owned: true
      }
      PlantService.updatePlant(this.plant._id, wish)
      .then(res => eventBus.$emit('plant-owned', this.plant._id))
    }
  }
}
</script>

<style lang="css" scoped>


  @import '../../assets/css/wishlistStyle.css';
</style>
