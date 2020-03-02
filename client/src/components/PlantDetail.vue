<template lang="html">
  <div v-if="plantDetailed" id="plantDetail">
    <div id="detailWrapper">
      <h2>More Info About: {{plantDetailed.common_name}}</h2>
      <div id="flexWrapper">
        <div id="left">
          <p>Scientific Name: {{plantDetailed.scientific_name}}</p>
          <p>Family: {{plantDetailed.family_common_name}}</p>
          <h3>Growing Requirements</h3>
          <p>Annual Rainfall: {{plantDetailed.main_species.growth.precipitation_minimum.inches}}in - {{plantDetailed.main_species.growth.precipitation_maximum.inches}}in</p>
          <p>Soil ph: {{plantDetailed.main_species.growth.ph_minimum}} - {{plantDetailed.main_species.growth.ph_maximum}}</p>
          <p>Minimum Temperature: {{plantDetailed.main_species.growth.temperature_minimum.deg_c.toFixed(2)}}°c</p>
          <p>Shade Tolerance: {{plantDetailed.main_species.growth.shade_tolerance}}</p>
          <p>Root Depth: {{plantDetailed.main_species.growth.root_depth_minimum.inches}}in</p>
          <div v-if="plantDetailed.main_species.flower.color != null">
            <p>Flower: {{plantDetailed.main_species.flower.color}}</p>
          </div>
          <div v-if="plantDetailed.images.length > 0">
            <!-- If the plant has more than one image, just show the first one -->
            <img :src="plantDetailed.images[0].url" alt="a plant">
          </div>

          <button v-on:click="addToMyGarden">Grow In My Garden</button>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { eventBus } from '../main.js';
import PlantService from '../services/PlantService.js'

export default {
  name: 'plant-detail',
  props: ['plantDetailed'],
  methods:{
    addToMyGarden: function(){
      PlantService.postPlant(this.plantDetailed)
      .then((res) => eventBus.$emit("plant-added", res))
    }
  }
}
</script>

<style lang="css" scoped>

div.plantDetail{
  /* display: flex;
  flex-direction: column; */
margin: auto;
  /* align-items: center; */
  max-width: 100px;
}

img {
  height: 300px;
}

button {
  margin-top: 10px;
}

</style>
