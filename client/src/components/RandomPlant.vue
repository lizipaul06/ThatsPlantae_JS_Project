<template lang="html">
  <div v-if="randomPlant" id="randomPlant">
    <h2>Your Plant Of The Day is: {{capital_letter(randomPlant.common_name)}}</h2>
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
  props: ['randomPlant'],
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

<style lang="css" scoped>

@import '../assets/css/coreStyles.scss';


</style>
