<template lang="html">
  <div class="plant">
    <h3>{{favePlant.common_name}}</h3>
    <!-- <p>{{favePlant.scientific_name}}</p> -->
    <div v-if="favePlant.images.length > 0">
      <img :src="favePlant.images[0].url" alt="a plant">
    </div>
    <div v-if="favePlant.images.length === 0">
      <img src="../../public/placeholder_plant.jpg" alt="">
    </div>
    <button v-on:click="handleDelete">Remove From Garden</button>

  </div>
</template>

<script>
import PlantService from '../services/PlantService.js';
import { eventBus } from '../main.js';

export default {
  name: "fave-plant",
  props: ['favePlant'],
  methods:{
    handleDelete(){
      PlantService.deletePlant(this.favePlant._id)
      .then(() => eventBus.$emit("plant-deleted", this.favePlant._id))
    }
  }
}
</script>

<style lang="css" scoped>

.plant{
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
}

img {
  height: 300px;
}

button {
  margin-top: 10px;
}

</style>
