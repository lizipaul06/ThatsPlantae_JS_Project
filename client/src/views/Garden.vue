<template lang="html">
  <div>
  <my-garden></my-garden>

  <b-button v-b-toggle.collapse-1 variant="primary">Arrange your garden</b-button>
<b-collapse id="collapse-1" class="mt-2">
  <b-card>
        <garden-container />
      </b-card>
      </b-collapse>
  </div>
</template>

<script>
import MyGarden from '../components/Garden/MyGarden.vue'
import Canvas from '../components/GardenCanvas/Canvas'
import GardenContainer from '../components/GardenCanvas/GardenContainer'

export default {
  name: "Garden",

    data(){
      return{
        snailHidden: true
      }
    },
  components:{
        "my-garden": MyGarden,
        "canvas-component": Canvas,
        "garden-container": GardenContainer
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/coreStyles.scss';
</style>
