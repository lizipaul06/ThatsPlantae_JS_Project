<template>
  <div >
    <v-stage ref="stage" :config="stageSetup" class="arrange">
      <v-layer ref="layer">
        <v-image :config="{
          image: image,
          draggable: true,
          width:200,
          height: 120
          }"/>
        </v-layer>
      </v-stage>
  </div>
</template>

<script>
const imageurl = require("../../public/snail.png");

export default {
  data() {
    return {
      stageSetup: {
        width: 1500,
        height: 700,
      },
      image: null
    };
  },
  created() {
    const image = new window.Image();
    image.src = imageurl;
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
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
