<template lang="html">
  <div>
  <h1> plant details </h1>
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
    return{



    }
  },
  components: {
        "plant-detail": PlantDetail,

  },
  mounted(){
      PlantService.getPlant(this.selectedPlant.id).then(res => this.plantDetailed = res)


  }
}
</script>

<style lang="scss" scoped>
</style>
