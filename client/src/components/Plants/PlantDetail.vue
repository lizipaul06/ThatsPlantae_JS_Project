<template lang="html">
  <div  id="plantDetail">
    <div id="detailWrapper">
      <h2>More Info About: {{this.$route.params.plantDetail.common_name}}</h2>
      <div id="flexWrapper">
        <div id="left">
          <p  class="font-italic" >Scientific Name: {{this.$route.params.plantDetail.scientific_name}}</p>
          <p>Family: {{this.$route.params.plantDetail.family_common_name}}</p>
          <h3>Growing Requirements</h3>
          <p>Annual Rainfall: {{this.$route.params.plantDetail.main_species.growth.precipitation_minimum.inches}}in - {{this.$route.params.plantDetail.main_species.growth.precipitation_maximum.inches}}in</p>
          <p>Soil ph: {{this.$route.params.plantDetail.main_species.growth.ph_minimum}} - {{this.$route.params.plantDetail.main_species.growth.ph_maximum}}</p>
          <p>Minimum Temperature: {{this.$route.params.plantDetail.main_species.growth.temperature_minimum.deg_c.toFixed(2)}}°c</p>
          <p>Shade Tolerance: {{this.$route.params.plantDetail.main_species.growth.shade_tolerance}}</p>
          <p>Root Depth: {{this.$route.params.plantDetail.main_species.growth.root_depth_minimum.inches}}in</p>
          <div v-if="this.$route.params.plantDetail.main_species.flower.color != null">
            <p>Flower: {{this.$route.params.plantDetail.main_species.flower.color}}</p>
          </div>

          <div v-if="this.$route.params.plantDetail.images && this.$route.params.plantDetail.images.length > 0">
            <div class="flex">
              <div v-for="image in this.$route.params.plantDetail.images">
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

import PlantService from '../../services/PlantService.js'

export default {
  name: 'plant-detail',
  methods:{
    addToMyGarden: function(){
      // const update = {owned: true }
      // let newPlant = this.plantDetailed;
      this.$route.params.plantDetail.owned = true;
    PlantService.postPlant(this.$route.params.plantDetail)
      .then((res) => eventBus.$emit("plant-added", res))
      // PlantService.updatePlant(this.plantDetailed.id, update)
      // .then(res => eventBus.$emit('plant-owned', this.plantDetailed.id))
  },
  addToWishList: function(){
    this.$route.params.plantDetail.owned = false;
    PlantService.postPlant(this.$route.params.plantDetail)
      .then((res) => eventBus.$emit("plant-added-wishlist", res))
  }

},


}
</script>

<style lang="scss" scoped>

  @import '../../assets/css/plantListStyles.scss';

</style>
