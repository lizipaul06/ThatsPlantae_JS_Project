<template lang="html">
  <div class="plantlistitem">
    <p id="common_name">{{ plant.common_name }}</p>
    <p id="scientific_name">{{ plant.scientific_name }}</p>
  </div>
</template>

<script>
import { eventBus } from "../main.js"

export default {
  name: "plant-list-item",
  props: ["plant"]
}

</script>

<style lang="css" scoped>


#common_name{
  font-family: helvetica;
  font-size: 20px;
}

#scientific_name{
  font-size: 15px;
}
</style>
