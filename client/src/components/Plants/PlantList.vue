<template lang="html">
  <form v-on:submit.prevent>
    <select id="dropDownPlant" v-on:change="handleChange" v-model="selectedPlant">
      <option disabled value="Select a Plant"> Select a Plant </option>

        <option v-if="plant.common_name" v-for="(plant, index) in plantData" :plant="plant"
        :value="plant" :key="index"> {{capital_letter(plant.common_name)}} </option>
      </select>
    </form>
</template>

<script>

import {eventBus} from '../../main.js'

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
    capital_letter(str){
      str = str.split(" ");

      for (var i = 0, x = str.length; i < x; i++) {
          str[i] = str[i][0].toUpperCase() + str[i].substr(1);
      }

      return str.join(" ");
      }




}
  }


</script>

<style lang="scss" scoped>

  @import '../../assets/css/plantListStyles.scss';
</style>
