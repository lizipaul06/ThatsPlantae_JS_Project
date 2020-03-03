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
    <!-- Show status if exists -->
    <div v-if="favePlant.status">
      Today my plant: {{favePlant.status}}
    </div>

    <label for="status">Update plant status to:</label>
    <select id="status" v-on:change="handleChange" v-model="status">
      <option value="is thirsty">is thirsty</option>
      <option value="in bloom">is in bloom</option>
      <option value="needs fertilizer">needs fertilizer</option>
      <option value="is producing fruit">is producing fruit</option>
    </select>

    <button v-on:click="handleDelete">Remove From Garden</button>

  </div>
</template>

<script>
import PlantService from '../services/PlantService.js';
import { eventBus } from '../main.js';

export default {
  name: "fave-plant",
  data(){
    return{
      comments: [],
      statusg: ""
    }
  },
  props: ['favePlant'],
  methods:{
    handleDelete(){
      PlantService.deletePlant(this.favePlant._id)
      .then(() => eventBus.$emit("plant-deleted", this.favePlant._id))
    },

    handleChange(){
      const update = {
        status: this.status
      }
      PlantService.updatePlant(this.favePlant._id, update)
      .then(() => eventBus.$emit('status-changed'))
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
