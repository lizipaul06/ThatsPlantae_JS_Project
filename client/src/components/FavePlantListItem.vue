<template lang="html">
  <div class="plant">
    <h3>{{favePlant.common_name}}</h3>
    <div v-if="favePlant.images && favePlant.images.length > 0">
      <!-- If the plant has more than one image, just show the first one -->
      <img :src="favePlant.images[0].url" alt="a plant">
    </div>
    <!-- If the plant has no images, show a placeholder instead -->
    <div v-if="favePlant.images.length === 0">
      <img src="../../public/placeholder_plant.jpg" alt="a rubber plant placeholder image">
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
