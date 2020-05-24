<template lang="html">
  <div v-if="randomPlant" id="randomPlant">

    <b-col  v-if="randomPlant.images && randomPlant.images.length > 0">
      <h2>Your Plant Of The Day is: {{capital_letter(randomPlant.common_name)}}</h2>
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
    capital_letter(str){
      str = str.split(" ");

      for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
      }

      return str.join(" ");
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="css" scoped>

@import '../assets/css/coreStyles.scss';


</style>
