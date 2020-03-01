<template lang="html">
  <div class="plant">
    <p>{{favePlant.common_name}}</p>
    <p>{{favePlant.scientific_name}}</p>
    <button v-on:click="handleDelete">Delete Plant</button>
  </div>
</template>

<script>
import PlantService from '../services/PlantService.js';
import { eventBus } from '../main.js';

export default {
  name: "fave-plant",
  props: ['favePlant'],
  methods:{

  }
}
</script>

<style lang="css" scoped>
</style>
