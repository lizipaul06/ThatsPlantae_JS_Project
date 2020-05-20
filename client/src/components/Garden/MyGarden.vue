<template lang="html">
  <div>
    <!-- Render my list of plants in the garden -->
    <garden-list/>
  </div>
</template>

<script>
import { eventBus } from '../../main.js';
import GardenList from './GardenList.vue'
export default {
  name: 'my-garden',
  components: {
    "garden-list": GardenList,
  }
}
</script>
