<template lang="html">
  <div>
    <plant-detail >   </plant-detail>
  </div>
</template>

<script>

import PlantDetail from '../components/Plants/PlantDetail';

export default {
  name: 'selectedPlant',
  data() {
    return {}
  },
  components: {
    "plant-detail": PlantDetail,

  },


}
</script>

<style lang="scss" scoped>
</style>
