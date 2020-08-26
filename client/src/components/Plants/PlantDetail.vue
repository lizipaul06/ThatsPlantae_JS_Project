<template lang="html">
  <b-container >

    <b-row>
      <b-col>
      <b-card

      style="max-width: 20rem;"
      header-class="header-bg-variant"
       body-class='cardBody'
       header-text-variant="cardHeader"
      >

        <h4 class="cardHeader">{{capitalLetter(selectedPlant.common_name)}}</h4>

      <b-card-body>
    <b-card-text>
        <!-- <p> Scientific Name: {{capitalLetter(selectedPlant.scientific_name)}} </p> -->
        <!-- <p>Family: {{selectedPlant.family_common_name}}</p> -->
        <!-- <p>Growing Requirements</p>
        <p>Annual Rainfall: {{selectedPlant.main_species.growth.precipitation_minimum.inches}}in - {{selectedPlant.main_species.growth.precipitation_maximum.inches}}in</p>
        -->
        <p>Soil ph: {{selectedPlant.main_species.growth.ph_minimum}} - {{selectedPlant.main_species.growth.ph_maximum}}</p>
        <!-- <p>Minimum Temperature: {{selectedPlant.main_species.growth.temperature_minimum.deg_c.toFixed(2)}}°c</p> -->
      <p>Shade Tolerance: {{selectedPlant.main_species.growth.shade_tolerance}}</p>
        <!-- <p>Root Depth: {{selectedPlant.main_species.growth.root_depth_minimum.inches}}in</p> -->
        <div v-if="selectedPlant.main_species.flower.color != null">
            <p>Flower Colors: </p>
          <div v-for="color in selectedPlant.main_species.flower.color">
          <p>{{color}}</p>
        </div>
        </div>


        <b-button variant="outline-success" v-on:click="addToMyGarden">Grow In My Garden</b-button>
          <b-button  variant="outline-success" v-on:click="addToWishList">Add to Wish List</b-button >
            </b-card-text>
          </b-card-body>
          </b-card>
      </b-col>
             <b-col v-if="selectedPlant.image_url">
      <img :src="selectedPlant.image_url" width="200" height="200" alt="plant"  class="d-block img-fluid w-100"
      >
        </b-col>
      <!-- <b-col v-if="selectedPlant.image_url">
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
        <div v-for="image in selectedPlant.images">
          <b-carousel-slide>
            <template v-slot:img>
              <img :src="image_url" width="200" height="200" alt="plant"  class="d-block img-fluid w-100"
              >
            </template>
          </b-carousel-slide>
      </div>
      </b-carousel>

    </div>


  </b-col> -->

</b-row>
</b-container>
</template>

<script>
import {eventBus} from '../../main.js'
import PlantService from '../../services/PlantService.js'
import plantHelper from '../../helpers.js'
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'plant-detail',
  data() {
    return {
      slide: 0,
      sliding: null,



    }
  },
  methods:{
    ...mapActions(['fetchPlant','updatePlantOwned']),
    onSlideStart: plantHelper.onSlideStart,
    onSlideEnd: plantHelper.onSlideEnd,
    capitalLetter: plantHelper.capitalLetter,
    addToMyGarden(){
      console.log(this.allPlants)
      this.selectedPlant.owned = true;
      console.log(this.selectedPlant)

      this.updatePlantOwned(this.selectedPlant)
      this.fetchGardenPlants()
    },
    addToWishList: function(selectedPlant){
      this.selectedPlant.owned = false;
      console.log(this.selectedPlant)
      this.updatePlantOwned(this.selectedPlant)
    },


  },
  computed: {
    ...mapGetters(['selectedPlant', 'allPlants']),

  },
  created(){
    this.fetchPlant()



  },
  // mounted(){
  //   eventBus.$on('plant-selected', (plant) => {
  //     this.selectedPlant = plant
  //     PlantService.getPlant(selectedPlant.id).then(res => this.plantDetail = res)
  //
  //   });
  // }


}
</script>

<style lang="scss" scoped>

@import '../../assets/css/plantListStyles.scss';

</style>
