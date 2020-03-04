<template lang="html">
  <div>

  <li> {{plant.common_name}} </li>
  <button v-on:click="deleteItem"> Remove From WishList </button>
  <button v-on:click="updateOwned"> Add to garden </button>

</div>
</template>

<script>
import PlantService from '../services/PlantService.js';
import { eventBus } from '../main.js';
export default {
  name: "wish-item",
  props: ['plant'],
  methods:{
    deleteItem(){
      PlantService.deletePlant(this.plant.id)
      .then(() =>  eventBus.$emit('wish-item-deleted', this.plant.id))
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
</style>
