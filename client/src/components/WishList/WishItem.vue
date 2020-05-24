<template lang="html">
  <div class="plant">
    <b-card
    :img-src="plant.images[0].url"
    img-alt="a plant"
    img-top
    style="max-width: 20rem;"
    header-class="header-bg-variant"
    body-class='cardBody'
    header-text-variant="cardHeader"
    >
    <template v-slot:header>
      <h4 class="cardHeader">{{capital_letter(plant.common_name)}}</h4>
    </template>
    <b-card-body>
      <b-card-text >
        <p  class="font-italic">  Scientific Name: {{plant.scientific_name}} </p>
      </b-card-text>
      <b-button variant="outline-secondary"  v-on:click="getToDetails" >Plant Details</b-button>
      <b-button variant="outline-danger" v-on:click="deleteItem">Remove From WishList</b-button>
      <b-button variant="outline-success" v-on:click="updateOwned">Add To Garden</b-button>
    </b-card-body>

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
    getToDetails(){
      this.$router.push({name:'selectedplant', params:{plantDetail: this.plant}},)
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
