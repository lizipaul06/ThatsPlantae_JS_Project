<template lang="html">
  <div class="">
    <h4>Arrange Your Garden</h4>
    <div class="">
      Drag the plants from top left to arrange your garden however you choose.<br>
      Watch out for that pesky snail!
    </div>
    <garden-canvas  id="canvas"/>
  </div>

</template>

<script>
import GardenCanvas from './GardenCanvas.vue'
export default {
  name: 'garden-container',

  data() {
    return {


    }
  },
  components: {
    'garden-canvas': GardenCanvas
  },

}
</script>

<style lang="scss" scoped>
@import '../../assets/css/canvasStyles.scss';
</style>
