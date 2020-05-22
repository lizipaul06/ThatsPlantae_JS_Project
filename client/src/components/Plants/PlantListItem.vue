<template lang="html">
  <div class="plantlistitem">
    <p id="common_name">{{capital_letter(plant.common_name) }}</p>
    <p id="scientific_name">{{capital_letter(plant.scientific_name) }}</p>
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
  },
  methods:{
    capital_letter(str){
      str = str.split(" ");

      for (var i = 0, x = str.length; i < x; i++) {
          str[i] = str[i][0].toUpperCase() + str[i].substr(1);
      }

      return str.join(" ");
      }
  }
  }


</script>

<style lang="scss" scoped>

  @import '../../assets/css/plantListStyles.scss';

</style>
