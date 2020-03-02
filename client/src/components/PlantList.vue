<template lang="html">
  <div class="">
    <select id="dropDownPlant" v-on:change="handleChange" v-model="selectedPlant">
      <option disabled value="Select a Plant"> Select a Plant </option>
        <option v-for="(plant, index) in plantData" :plant="plant"
        :value="plant" :key="index"> {{plant.common_name}} </option>
      </select>
  </div>
</template>

<script>
import PlantListItem from "../components/PlantListItem.vue";
import Search from "../components/Search.vue";
import {eventBus} from '../main.js'

export default {
  data(){
    return{
    "selectedPlant": {},
  }
},
  name: "plant-list",
  props: ["plantData"],
  components: {
    "plant-list-item": PlantListItem,
    "search": Search
  },
  methods: {
    handleChange(){
      eventBus.$emit('plant-selected', this.selectedPlant);
    }
  }
};
</script>

<style lang="css" scoped>
</style>
