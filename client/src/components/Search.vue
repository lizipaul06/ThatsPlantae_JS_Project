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
          <div class="help">
            <input type="radio" @change="handleChange" v-model="selectedPlant" v-bind:value="plant">
            <p>{{plant.common_name}}</p>
          </div>
        </form>
      </div>
    </div>

  </div>
</div>

</div>

</template>

<script>

import {eventBus} from '../main.js';
import VueFuseParams from '../components/VueFuseParams.vue';
import PlantList from '../components/Plants/PlantList.vue';

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

  @import '../assets/css/coreStyles.css';

</style>
