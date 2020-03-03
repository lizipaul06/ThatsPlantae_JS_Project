<template>
  <div >
    <v-stage ref="stage" :config="stageSetup" class="arrange">
      <v-layer ref="layer">
        <v-image :config="{
          image: image,
          draggable: true,
          }"/>
        </v-layer>
      </v-stage>
  </div>
</template>

<script>


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
    image.src = "https://konvajs.org/assets/yoda.jpg";
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
