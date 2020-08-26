<template lang="html">
  <div v-if="randomPlant" id="randomPlant">

    <!-- <b-col  v-if="randomPlant.images && randomPlant.images.length > 0"> -->
      <h2>Your Plant Of The Day is: {{randomPlant.common_name}}</h2>
      <img :src="randomPlant.image_url" height="480" weight="400" alt="plant"
      >
      <!-- <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#F6F6F2"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <div v-for="image in randomPlant.images">
        <b-carousel-slide>
          <template v-slot:img>
            <img :src="image.url" height="480" weight="400" alt="plant"
            >
          </template>
        </b-carousel-slide>
      </div>
    </b-carousel> -->


  <!-- </b-col> -->
</div>



</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex';
import plantHelper from '../helpers.js'
export default {
  name: "random-plant",
  data() {
    return {
      slide: 0,
      sliding: null,
      plant: ""
    }
  },
  methods: {
    capitalLetter: plantHelper.capitalLetter,
    onSlideStart: plantHelper.onSlideStart,
    onSlideEnd: plantHelper.onSlideEnd,
    ...mapActions(['fetchRandomPlant', 'fetchPlants']),
    randomPlantSet() {
      let number = Math.floor(Math.random() * this.allPlants.length)
      if (number == 0) {
        return number = 1
      }
      let plant = this.allPlants[number]
      console.log(plant.slug)

      this.fetchRandomPlant(plant.slug)

    }

  },
  created() {


  },
  mounted() {
    this.fetchPlants()

    //  console.log(this.plant.slug)
    // this.random = this.fetchRandomPlant(this.plant.slug),
    // console.log(this.random)

  },
  watch: {
    allPlants() {
      this.randomPlantSet()
    }
  },
  computed: {

    ...mapGetters(['randomPlant', 'allPlants']),

  }
}
</script>

<style lang="css" scoped>
@import '../assets/css/coreStyles.scss';
</style>
