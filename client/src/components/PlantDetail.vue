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

          <div v-if="plantDetailed.images && plantDetailed.images.length > 0">
            <div class="flex">
              <div v-for="image in plantDetailed.images">
                <img :src="image.url" alt="plant">
              </div>
            </div>
          </div>

          <button v-on:click="addToMyGarden">Grow In My Garden</button>
          <button v-on:click="addToWishList">Add to Wish List</button>
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
      // const update = {owned: true }
      // let newPlant = this.plantDetailed;
      this.plantDetailed.owned = true;
    PlantService.postPlant(this.plantDetailed)
      .then((res) => eventBus.$emit("plant-added", res))
      // PlantService.updatePlant(this.plantDetailed.id, update)
      // .then(res => eventBus.$emit('plant-owned', this.plantDetailed.id))
  },
  addToWishList: function(){
    this.plantDetailed.owned = false;
    PlantService.postPlant(this.plantDetailed)
      .then((res) => eventBus.$emit("plant-added-wishlist", res))
  }

  }

}
</script>

<style lang="css" scoped>

.flex{
  display: flex;
  flex-direction: row-reverse;
}

div.plantDetail{
  /* display: flex;
  flex-direction: column; */
  margin: auto;
  /* align-items: center; */
  max-width: 100px;
}

img {
  height: 200px;
}

button {
  margin-top: 10px;
}

</style>
