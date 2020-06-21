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
      <h4 class="cardHeader">{{capitalLetter(plant.common_name)}}</h4>
    </template>
    <b-card-body>
      <b-card-text >
        <p  class="font-italic">  Scientific Name: {{capitalLetter(plant.scientific_name)}} </p>
      </b-card-text>
      <b-button variant="outline-secondary"  v-on:click="getToDetails" >Plant Details</b-button>
      <b-button variant="outline-danger" v-on:click="deletePlant(plant._id)">Remove From WishList</b-button>
      <b-button variant="outline-success" v-on:click="updateOwned">Add To Garden</b-button>
    </b-card-body>

  </b-card>




  </div>
</template>

<script>
import PlantService from '../../services/PlantService.js';
import { eventBus } from '../../main.js';
import plantHelper from '../../helpers.js'
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "wish-item",
  props: ['plant'],
  methods:{
      ...mapActions(['deletePlant', 'fetchGardenPlants', 'updatePlant']),

    updateOwned(){
      this.plant.owned = true
       const updatedPlant = this.plant
      this.updatePlant(updatedPlant)
    },
    getToDetails(){
            this.$store.commit('setPlant',this.plant)
      this.$router.push({name:'selectedplant'},)
    },
    capitalLetter: plantHelper.capitalLetter
  }
}
</script>

<style lang="scss" scoped>


</style>
