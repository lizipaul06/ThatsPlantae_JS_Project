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
      <div class="boxSearch">
        <form v-for="plant in results">
          <div class="listItemSearch">
            <input type="radio" @change="handleChange" v-model="selectedPlant" v-bind:value="plant">
            <p>{{capital_letter(plant.common_name)}}</p>
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
  methods:{
    runSearch() {
      this.$search('', this.plantData, { keys:['common_name', 'family_common_name']}
      .then(result => {
        this.results = result
      }))
    },

    handleChange(){
      this.results = []
      eventBus.$emit('plant-selected', this.selectedPlant);
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

//
//
</script>

<style lang="scss" scoped>

@import '../assets/css/coreStyles.scss';

</style>
