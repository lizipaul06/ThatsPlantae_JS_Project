<template lang="html">
  <div>
  <my-garden></my-garden>

      <div id="canvas">
        <garden-container />
      </div>
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

<style lang="css" scoped>
  @import '../assets/css/coreStyles.css';
</style>
