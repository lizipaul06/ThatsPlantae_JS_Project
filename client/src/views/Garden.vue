<template lang="html">
  <div>
    <my-garden></my-garden>


  </div>
</template>

<script>
import MyGarden from '../components/Garden/MyGarden.vue'



export default {
  name: "Garden",

  data() {
    return {}
  },
  components: {
    "my-garden": MyGarden,

  }

}
</script>

<style lang="scss" scoped>
@import '../assets/css/coreStyles.scss';
</style>
