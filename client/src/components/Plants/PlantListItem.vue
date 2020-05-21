<template lang="html">
  <div class="plantlistitem">
    <p id="common_name">{{ plant.common_name }}</p>
    <p id="scientific_name">{{ plant.scientific_name }}</p>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";
import PlantDetail from '../PlantDetail.vue';

export default {
  name: "plant-list-item",
  props: ["plant"],
  components: {
    "plant-detail": PlantDetail
  }
}

</script>

<style lang="scss" scoped>

  @import '../../assets/css/plantListStyles.scss';

</style>
