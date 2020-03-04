<template lang="html">
  <div>
    <!-- Render my list of plants in the garden -->
    <fave-plant-list/>
  </div>
</template>

<script>
import { eventBus } from '../main.js';
import FavePlantList from './FavePlantList.vue'
export default {
  name: 'my-garden',
  components: {
    "fave-plant-list": FavePlantList,
  }
}
</script>

<style lang="css" scoped>
</style>
