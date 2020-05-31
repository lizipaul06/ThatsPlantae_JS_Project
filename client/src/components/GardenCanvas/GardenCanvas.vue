<template>
  <v-stage ref="stage" :config="stageSize" class="arrange">
    <v-layer ref="layer">
      <garden-image  v-for="(url, index) in plantUrls" :key="index"
        :config="{
        src: url,
        width: 210,
        height: 210,
        draggable: true,


      }"
      ></garden-image>
      <v-image :config="{
        image: image,
        draggable: true,
        width:100,
        height: 60,
        x: 100,
        y: 600
        }"/>
    </v-layer>
  </v-stage>
</template>

<script>
const imageurl = require("../../../public/images/snail.png");
import GardenImage from "./GardenImage.vue";
import { mapGetters, mapActions } from 'vuex';
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
        this.fetchGardenPlants()
  },
  methods: {
  ...mapActions(['fetchGardenPlants']),
  },
  computed: {
    ...mapGetters(['plantUrls']),
  },

};
</script>


<style media="screen">
  @import '../../assets/css/canvasStyles.scss';

</style>
