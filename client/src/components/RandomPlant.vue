<template lang="html">
  <div v-if="randomPlant" id="randomPlant">
    <h2>Your Plant Of The Day is: {{randomPlant.common_name}}</h2>
    <div v-if="randomPlant.images && randomPlant.images.length > 0">
        <div class="image">
          <img :src="randomPlant.images[0].url">
        </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "random-plant",
  props: ['randomPlant']
}
</script>

<style lang="css" scoped>

img {
  height: 200px;
}

</style>
