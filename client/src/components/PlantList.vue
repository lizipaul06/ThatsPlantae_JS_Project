<template lang="html">
  <form v-on:submit.prevent>
    <select id="dropDownPlant" v-on:change="handleChange" v-model="selectedPlant">
      <option disabled value="Select a Plant"> Select a Plant </option>

        <option v-if="plant.common_name" v-for="(plant, index) in plantData" :plant="plant"
        :value="plant" :key="index"> {{plant.common_name}} </option>
      </select>
    </form>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: "plant-list",
  props: ['plantData'],
  data(){
    return{
      "selectedPlant": null,

    }
  },
  mounted(){


},

  methods: {
    handleChange(){
      eventBus.$emit('plant-selected', this.selectedPlant);
    }




}
  }


</script>

<style lang="css" scoped>
</style>
