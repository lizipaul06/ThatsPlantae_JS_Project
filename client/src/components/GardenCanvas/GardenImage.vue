<template>
<v-rect :config="{
      fillPatternImage: image,
      fillPatternScaleX: config.width?config.width/width:1,
      fillPatternScaleY: config.height?config.height/height:1,
      ...config
    }"></v-rect>
</template>

<script>
export default {
  props: {
    config: {
      type: Object
    }
  },
  data() {
    return {
      image: null,
      width: 106,
      height: 100
    };
  },
  created() {

    let image = new window.Image();
    image.src = this.config.src.url;
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
      this.width = image.width;
      this.height = image.height;
    };
  }
};
</script>
