<template lang="html">
  <b-container>

    <b-row>
      <b-col>
      <b-card

      style="max-width: 20rem;"
      header-class="header-bg-variant"
       body-class='cardBody'
       header-text-variant="cardHeader"
      >

        <h4 class="cardHeader">{{capital_letter(this.$route.params.plantDetail.common_name)}}</h4>

      <b-card-body>
    <b-card-text>
        <p> Scientific Name: {{this.$route.params.plantDetail.scientific_name}} </p>
        <p>Family: {{this.$route.params.plantDetail.family_common_name}}</p>
        <p>Growing Requirements</p>
        <p>Annual Rainfall: {{this.$route.params.plantDetail.main_species.growth.precipitation_minimum.inches}}in - {{this.$route.params.plantDetail.main_species.growth.precipitation_maximum.inches}}in</p>
        <p>Soil ph: {{this.$route.params.plantDetail.main_species.growth.ph_minimum}} - {{this.$route.params.plantDetail.main_species.growth.ph_maximum}}</p>
        <p>Minimum Temperature: {{this.$route.params.plantDetail.main_species.growth.temperature_minimum.deg_c.toFixed(2)}}°c</p>
        <p>Shade Tolerance: {{this.$route.params.plantDetail.main_species.growth.shade_tolerance}}</p>
        <p>Root Depth: {{this.$route.params.plantDetail.main_species.growth.root_depth_minimum.inches}}in</p>
        <div v-if="this.$route.params.plantDetail.main_species.flower.color != null">
          <p>Flower: {{this.$route.params.plantDetail.main_species.flower.color}}</p>
        </div>
            </b-card-text>
          </b-card-body>
          </b-card>
      </b-col>

      <b-col v-if="this.$route.params.plantDetail.images && this.$route.params.plantDetail.images.length > 0">
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        img-width="400"
        img-height="400"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
        <div v-for="image in this.$route.params.plantDetail.images">
          <b-carousel-slide>
            <template v-slot:img>
              <img :src="image.url" width="200" height="200" alt="plant"  class="d-block img-fluid w-100"
              >
            </template>
          </b-carousel-slide>
        </div>
      </b-carousel>

    </div>

  <b-button variant="outline-success" v-on:click="addToMyGarden">Grow In My Garden</b-button>
    <b-button  variant="outline-success" v-on:click="addToWishList">Add to Wish List</b-button >
  </b-col>

</b-row>
</b-container>
</template>

<script>

import PlantService from '../../services/PlantService.js'

export default {
  name: 'plant-detail',
  data() {
    return {
      slide: 0,
      sliding: null,

    }
  },
  methods:{
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
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
    },
  capital_letter(str){
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
  }

  },


}
</script>

<style lang="scss" scoped>

@import '../../assets/css/plantListStyles.scss';

</style>
