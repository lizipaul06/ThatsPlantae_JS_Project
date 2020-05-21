<template lang="html">
  <div class="">
    <h4>Arrange Your Garden</h4>
    <div class="">
      Drag the plants from top left to arrange your garden however you choose.<br>
      Watch out for that pesky snail!
    </div>
    <garden-canvas :urls="plantUrls" id="canvas"/>
  </div>

</template>

<script>
import { eventBus } from '../../main.js';
import PlantService from '../../services/PlantService.js';
import GardenCanvas from './GardenCanvas.vue'

export default {
  name: 'garden-container',
  data() {
    return {
      plantUrls: []

    }
  },
  components: {
    'garden-canvas': GardenCanvas
  },

  mounted(){
    this.fetchUrls();
},
methods: {
  fetchUrls(){
    PlantService.getMyPlants()
    .then(favePlants => this.plantUrls = favePlants.filter(plant => plant.owned == true).map(plant => plant.images[0].url));
  }
}
}

</script>

<style lang="scss" scoped>

  @import '../../assets/css/canvasStyles.scss';
</style>
