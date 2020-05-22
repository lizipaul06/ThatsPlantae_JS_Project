<template lang="html">
  <div>
  <b-card
     :title="capital_letter(plant.common_name)"
     :img-src="plant.images[0].url"
     img-alt="a plant"
       img-top
       style="max-width: 20rem;"
        class="bg-secondary text-light"

     >
     <b-button variant="light" v-on:click="deleteItem">Remove From WishList</b-button>
     <b-button variant="light" v-on:click="updateOwned">Add To Garden</b-button>
 </b-card>




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
    },
    capital_letter(str){
      str = str.split(" ");

      for (var i = 0, x = str.length; i < x; i++) {
          str[i] = str[i][0].toUpperCase() + str[i].substr(1);
      }

      return str.join(" ");
      }
  }
}
</script>

<style lang="scss" scoped>


</style>
