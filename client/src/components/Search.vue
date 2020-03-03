<template lang="html">
  <div id="plantBar">
    <div class="">
      <VueFuseParams
      placeholder="search through our 'plantae'-ful array of plants..."
      event-name='results'
      :list='plantData'
      :keys="['common_name', 'family_common_name']"
      />
    </div>
    <div v-if="results">
      <form v-for="plant in results">

        <input type="radio" @change="handleChange" v-model="selectedPlant" v-bind:value="plant" > </input >
<label :for="plant" > {{plant.common_name}} </label>
</form>

</div>

  </div>
  <!-- <form v-on: submit.prevent>
  <!-- <input id="plantBar" v-model="search"-->
    <!--placeholder="search through our 'plantae'-ful array of plants..." v-on:keyup="searchForPlant"> -->
  <!-- <select v-on:change="handleSelect" v-model="selectedPlant">
  <option disabled value="">Select a Plant....</option>
  <option v-for="plant in plants" :value="plant">{{plant.common_name}}</option>
</select> -->
<!-- </form> -->

</template>

<!-- Please note that some of the naming conventions may be a little off due to our names being a little different.. -->
<!-- may need to refactor some of the code as the information we get may need to be called differently.. -->

<script>

import {eventBus} from '../main.js';
import VueFuseParams from '../components/VueFuseParams.vue';
import PlantList from '../components/PlantList.vue';

export default {
  name: "plant-filter-form",
  props: ["plantData"],
  components: {
    VueFuseParams
  },
  data(){
    return {
      results: [],
      "selectedPlant": {},
    }
  },
  created () {
    this.$on('results', results => {
      this.results = results
    })
  },
  methods: {
    runSearch() {
      this.$search('', this.plantData, { keys:['common_name', 'family_common_name']}
      .then(result => {
        this.results = result
      }))
    },


  // searchForPlant(){
  //   let foundPlant = this.plants.find((plant) => {
  //     return
  //     plant.common_name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
  //   })
  //   this.selectedPlant = foundPlant
  //
  //   eventBus.$emit('plant-selected',
  //   this.selectedPlant)
  // },
  handleChange(){
    this.results = []
    eventBus.$emit('plant-selected', this.selectedPlant);
  }
},

}
//
//
</script>

<style lang="css" scoped>

#plantBar {
  width: 75%;
  height: 30px;
  font-size: 25px;
  display: flex;
  margin: auto;
}
</style>
