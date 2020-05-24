<template lang="html">
  <div v-if="randomPlant" id="randomPlant">

    <b-col  v-if="randomPlant.images && randomPlant.images.length > 0">
      <h2>Your Plant Of The Day is: {{capitalLetter(randomPlant.common_name)}}</h2>
      <b-carousel
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
    </b-carousel>


  </b-col>
</div>



</template>

<script>
import plantHelper from '../helpers.js'
export default {
  name: "random-plant",
  props: ['randomPlant'],
  data() {
    return {
      slide: 0,
      sliding: null,

    }
  },

  methods:{
    capitalLetter: plantHelper.capitalLetter,
    onSlideStart: plantHelper.onSlideStart,
    onSlideEnd: plantHelper.onSlideEnd

  }
}
</script>

<style lang="css" scoped>

@import '../assets/css/coreStyles.scss';


</style>
