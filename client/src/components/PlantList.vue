<template lang="html">
  <form v-on:submit.prevent>
    <input id="plantBar" type="text" v-model="search"
    placeholder="search through our 'plantae'-ful array of plants..." v-on:keyup="searchForPlant">
    <select id="dropDownPlant" v-on:change="handleChange" v-model="selectedPlant">
      <option disabled value="Select a Plant"> Select a Plant </option>
        <option v-for="(plant, index) in plantData" :plant="plant"
        :value="plant" :key="index"> {{plant.common_name}} </option>
      </select>
    </form>
</template>

<!-- <template lang="html">
  <form v-on:submit.prevent>
    <input type="text" v-model="search" placeholder="search for country..." v-on:keyup="searchForCountry">
    <select v-on:change="handleSelect" v-model="selectedCountry">
      <option disabled value="">Select a country...</option>
      <option v-for="country in countries" :value="country">{{country.name}}</option>
    </select>

</template> -->

<script>
import PlantListItem from "../components/PlantListItem.vue";
import {eventBus} from '../main.js'

export default {
  name: "plant-list",
  props: ["plantData"],

  data(){
    return{
      "search": "",
    "selectedPlant": null
  }
},



  methods: {

    searchForPlant(){
      let foundPlant = this.plantData.find((plant) => {
        return plant.common_name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
      console.log(foundPlant)
      this.selectedPlant = foundPlant

      eventBus.$emit('plant-selected', this.selectedPlant)
    },
    handleChange(){
        this.search = "",
      eventBus.$emit('plant-selected', this.selectedPlant);
    },

  }
};
</script>

<style lang="css" scoped>
</style>
