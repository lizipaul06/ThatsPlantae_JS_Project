<template lang="html">
  <garden-container />
</template>

<script>
import GardenContainer from '../components/GardenCanvas/GardenContainer'
import Canvas from '../components/GardenCanvas/GardenCanvas'
export default {
  name: "GardenCanvas",
  data() {
    return {
      snailHidden: true
    }
  },
  components: {
    "garden-container": GardenContainer
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/coreStyles.scss';
</style>
