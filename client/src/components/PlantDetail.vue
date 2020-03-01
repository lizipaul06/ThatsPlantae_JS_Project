<template lang="html">
  <div v-if="plant" id="plantDetail">
    <div id="detailWrapper">
      <h2>{{plant.common_name}}</h2>
      <div id="flexWrapper">
        <div id="left">
          <p>{{plant.scientific_name}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
  name: 'plant-detail',
  data() {
    return {
      plant: null
    }
  },
  mounted(){
    eventBus.$on('plant-selected', (plant) => {
      this.plant = plant
    })
  }
}
</script>

<style lang="css" scoped>
</style>
