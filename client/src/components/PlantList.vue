<template lang="html">
  <form v-on:submit.prevent>

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

    "selectedPlant": null
  }
},



  methods: {

    handleChange(){
      eventBus.$emit('plant-selected', this.selectedPlant);
    },

  }
};
</script>

<style lang="css" scoped>
</style>
