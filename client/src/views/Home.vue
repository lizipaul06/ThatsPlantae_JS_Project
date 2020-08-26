<template lang="html">
  <b-container>

    <p id="title">That's Plantae!</p>

    <b-col class="text-center">
      <random-plant :randomPlant="randomPlant"/>
    </b-col>

  </b-container>


</template>

<script>
import PlantService from '../services/PlantService.js';
import {
  eventBus
} from '../main.js';
import RandomPlant from '../components/RandomPlant';



export default {
  name: 'Home',
  data() {
    return {
      randomPlant: null,


    }
  },
  components: {
    "random-plant": RandomPlant,

  },

  mounted() {
    eventBus.$on('random-plant', (plant) => this.randomPlant = plant)
    eventBus.$on('plant-selected', (plant) => {
      this.selectedPlant = plant
      PlantService.getPlant(this.selectedPlant.id).then(res => this.plantDetailed = res)
    });

  },
  watch: {

    plantDetailed() {
      this.$router.push({
        name: 'selectedplant',
        params: {
          plantDetail: this.plantDetailed
        }
      }, )
    },

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/coreStyles.scss';
</style>
