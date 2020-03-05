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

.help{
  display: list-item;
}

.box{
  font-size: 17px;
  padding: 1px;
  height:81px;
  width:300px;
  overflow:auto;
  background-color: rgba(183, 183, 183, 0.29);
  color: white;
  scrollbar-base-color: grey;
}

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


</style>
