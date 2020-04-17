<template>
  <v-stage ref="stage" :config="stageSize" class="arrange">
    <v-layer ref="layer">
      <garden-image v-for="url in urls"
        :config="{
        src: url,
        width: 210,
        height: 210,
        draggable: true

      }"
      ></garden-image>
    </v-layer>
  </v-stage>
</template>

<script>
const width = window.innerWidth;
const height = window.innerHeight;
import GardenImage from "./GardenImage.vue";

export default {
  components: {
    "garden-image": GardenImage
  },
  props:['urls'],
  data() {
    return {
      stageSize: {
        width: 1500,
        height: 700
      }
    };
  }
};
</script>


<style media="screen">

  .arrange {
    background-image: url('../assets/lawn.jpg');
    background-size: cover;
  }
</style>
