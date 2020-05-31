<template lang="html">
  <div>
    <plant-detail   :plantDetailed="this.$route.params.plantDetail">   </plant-detail>
  </div>
</template>

<script>
import { eventBus } from '../main.js';
import PlantDetail from '../components/Plants/PlantDetail';
import PlantService from '../services/PlantService.js';

export default {
  name:'selectedPlant',
  data(){
    return{ }
  },
  components: {
    "plant-detail": PlantDetail,

  },
  

}

</script>

<style lang="scss" scoped>
</style>
