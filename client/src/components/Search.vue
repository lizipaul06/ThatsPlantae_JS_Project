<template lang="html">
  <form v-on: submit.prevent>
    <input type="text" v-model="search"
    placeholder="search through our 'plantae'-ful array of plants..." v-on:keyup="searchForCountry">
    <select v-on:change="handleSelect" v-model="selectedPlant">
      <option disabled value="">Select a Plant....</option>
      <option v-for="plant in plants" :value="plant">{{plant.common_name}}</option>
    </select>
  </form>

</template>

<!-- Please note that some of the naming conventions may be a little off due to our names being a little different.. -->
<!-- may need to refactor some of the code as the information we get may need to be called differently.. -->

<script>
import {eventBus} from '../main.js';

export default {
  name: "plant-filter-form",
  data(){
    return {
      "search": "",
      "selectedPlant": {},
    }
  },
  props: ["plants"],
  methods: {
    searchForPlant(){
      let foundPlant = this.plants.find((plant) => {
        return
        plant.common_name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
      this.selectedPlant = foundPlant

      eventBus.$emit('plant-selected',
      this.selectedPlant)
    },
    handleSelect(){
      this.search = ""
      eventBus.$emit('plant-selected',
      this.selectedPlant)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
