<template lang="html">
  <div v-if="plant" id="plantDetail">
    <div id="detailWrapper">
      <h2>More Info About: {{plant.common_name}}</h2>
      <div id="flexWrapper">
        <div id="left">
          <p>Scientific Name: {{plant.scientific_name}}</p>
          <p>Family: {{plant.family_common_name | getFamily}}</p>
          <h3>Growing Requirements</h3>
            <p>Annual Rainfall: {{plant.main_species.growth.precipitation_minimum.inches}}in - {{plant.main_species.growth.precipitation_maximum.inches}}in</p>
            <p>Soil ph: {{plant.main_species.growth.ph_minimum}} - {{plant.main_species.growth.ph_maximum}}</p>
            <p>Minimum Temperature: {{plant.main_species.growth.temperature_minimum.deg_c.toFixed(2)}}°c</p>
            <p>Shade Tolerance: {{plant.main_species.growth.shade_tolerance}}</p>
            <p>Root Depth: {{plant.main_species.growth.root_depth_minimum.inches}}in</p>
          <!-- The below should only be rendered if there is a value there to render...-->
          <!-- <p v-if='plant.flower'>Flower: {{plant.flower}}</p> -->
          <!-- <img v-if="plant.images" :src="plant.images[0].url" alt="a plant"> -->

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
  name: 'plant-detail',
  props: ['plant'],
  data() {
    return {
      plant: null
    }
  },
  mounted(){
    eventBus.$on('plant-selected', (plant) => {
      this.plant = plant
    })
  },
  filters: {
    getFamily(string){
      let array = string.split(' ')
      array.pop()
      return array.toString()
    }
  },
}
</script>

<style lang="css" scoped>

.plantDetail{
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
}

img {
  height: 300px;
}

button {
  margin-top: 10px;
}

</style>
