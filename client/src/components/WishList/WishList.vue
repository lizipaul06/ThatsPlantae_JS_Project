å<template lang="html">
  <div class="fave-plant-list">
    <wish-item  v-for="(plant, index) in wishlistPlants"  :key="index" :plant="plant"/>
  </div>
</template>

<script>

import WishItem from './WishItem.vue';
import {
  mapGetters,
  mapActions
} from 'vuex';

export default {
  name: 'wish-list',
  data() {
    return {

    };
  },
  components: {
    'wish-item': WishItem
  },
  mounted() {


  },
  methods: {
    ...mapActions(['fetchGardenPlants'])
  },
  computed: {
    ...mapGetters(['wishlistPlants']),

  },
  created() {
    this.fetchGardenPlants();
  }
}
</script>

<style lang="scss" scoped>

</style>
