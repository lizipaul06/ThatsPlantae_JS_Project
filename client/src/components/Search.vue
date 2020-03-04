<template lang="html">
  <div id="plantBar">
    <div class="searchbar">
      <VueFuseParams
      placeholder="search through our 'plantae'-ful array of plants..."
      event-name='results'
      :list='plantData'
      :keys="['common_name', 'family_common_name']"
      />
    </div>
    <div v-if="results">
      <div class="box">
        <form v-for="plant in results">
          <input type="radio" @change="handleChange" v-model="selectedPlant" v-bind:value="plant" > </input >
          <label :for="plant" > {{plant.common_name}} </label>
        </form>
      </div>

    </div>

  </div>

</template>

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
  flex-direction: column;
}

input {
    width: 300px;
}

.box{
  height:500px;
  width:300px;
  /* border:1px solid #ccc; */
  font:10px;
  overflow:auto;
  background-color: rgba(183, 183, 183, 0.29);
  /* opacity: 10%; */
  color: darkgrey;
  scrollbar-base-color: white;
}
</style>
