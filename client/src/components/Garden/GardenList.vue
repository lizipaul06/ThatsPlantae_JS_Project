<template lang="html">
  <div class="">
    <b-card-group deck>
      <garden-item  v-for="(gardenItem, index) in  ownedGardenPlants"  :gardenItem="gardenItem" :key="index"/>
    </b-card-group >
  </div>

</template>

<script>
import {
  eventBus
} from '../../main.js';
import PlantService from '../../services/PlantService.js';
import GardenItem from './GardenItem.vue'
import {
  mapGetters,
  mapActions
} from 'vuex';
export default {
  name: 'garden-list',
  data() {
    return {}
  },
  components: {
    'garden-item': GardenItem
  },

  mounted() {

    this.fetchGardenPlants();
    console.log(this.ownedGardenPlants)
    // this.owned();
    // when a plant from the list is added, push this to the myPlants array



  },
  methods: {
    // whenever the page loads, retrieve my fave plants from the garden db collection
    ...mapActions(['fetchGardenPlants']),

  },
  created() {
    this.fetchGardenPlants()
  },
  computed: {
    ...mapGetters(['ownedGardenPlants']),

  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/gardenStyles.scss';
</style>
