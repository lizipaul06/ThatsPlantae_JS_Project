<template lang="html">
  <b-nav-form v-on:submit.prevent>
    <b-form-select
      size="lg" class="m-2"
          variant="outline-secondary"

      text="select a plant"
       v-on:change="handleChange" v-model="selectedPlant">
      <option v-if="plant.common_name" v-for="(plant, index) in plantData" :plant="plant"
        :value="plant" :key="index"> {{capitalLetter(plant.common_name)}} </option>
      </b-form-select>

    </b-nav-form>
</template>

<script>

import {eventBus} from '../../main.js'
import plantHelper from '../../helpers.js'

export default {
  name: "plant-list",
  props: ['plantData'],
  data(){
    return{
      "selectedPlant": null,

    }
  },



  methods: {
    handleChange(){
      eventBus.$emit('plant-selected', this.selectedPlant);
    },
    capitalLetter: plantHelper.capitalLetter
},
computed: {
  sortedArray: function() {
    function compare(a, b) {
      if (a.common_name < b.common_name)
        return -1;
      if (a.common_name > b.common_name)
        return 1;
      return 0;
    }

    return this.plantData.sort(compare);
  }
}
  }


</script>

<style lang="scss" scoped>

  @import '../../assets/css/plantListStyles.scss';
</style>
