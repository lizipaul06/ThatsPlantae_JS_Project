<template lang="html">
  <div >
    <p id="common_name">{{capitalLetter(plant.common_name) }}</p>
    <p id="scientific_name">{{capitalLetter(plant.scientific_name) }}</p>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";
import PlantDetail from '../PlantDetail.vue';
import plantHelper from '../../helpers.js'

export default {
  name: "plant-list-item",
  props: ["plant"],
  components: {
    "plant-detail": PlantDetail
  },
  methods:{
    capitalLetter: plantHelper.capitalLetter
  }
  }


</script>

<style lang="scss" scoped>

  @import '../../assets/css/plantListStyles.scss';

</style>
