<template lang="html">
  <div class="plant">
    <p>{{plant.common_name}}</p>
    <p>{{plant.scientific_name}}</p>
    <button v-on:click="handleDelete">Delete Plant</button>
  </div>
</template>

<script>
import PlantService from '../services/PlantService.js';
import { eventBus } from '../main.js';

export default {
  name: "plant",
  props: ['plant'],
  methods:
}
</script>

<style lang="css" scoped>
</style>
