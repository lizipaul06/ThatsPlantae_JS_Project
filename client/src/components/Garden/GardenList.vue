<template lang="html">
  <div class="">
    <b-card-group deck>
      <garden-item  v-for="(gardenItem, index) in  ownedGardenPlants"  :gardenItem="gardenItem" :key="index"/>
    </b-card-group >
  </div>

</template>

<script>
import { eventBus } from '../../main.js';
import PlantService from '../../services/PlantService.js';
import GardenItem from './GardenItem.vue'
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'garden-list',
  data() {
    return {
    }
  },
  components: {
    'garden-item': GardenItem
  },

  mounted(){

    this.fetchGardenPlants();

    // this.owned();
    // when a plant from the list is added, push this to the myPlants array
    eventBus.$on('plant-added', plant => this.myPlants.push(plant));
  eventBus.$on('plant-owned', plant => this.myPlants.push(plant).then( this.fetchGardenPlants()));

  eventBus.$on("status-changed", () =>{  this.fetchGardenPlants()})

  // when a plant from the garden is deleted, slice this out of myPlants array
  eventBus.$on('plant-deleted', (id) => {
    let index = this.myPlants.findIndex(gardenItem => gardenItem._id === id)
    this.myPlants.splice(index, 1)});

   eventBus.$emit('owned-plants', this.myPlants)

},
methods: {
  // whenever the page loads, retrieve my fave plants from the garden db collection
...mapActions(['fetchGardenPlants']),

},
created(){
  this.fetchGardenPlants()
},
  computed:{
    ...mapGetters(['ownedGardenPlants']),

}
}
</script>

<style lang="scss" scoped>

@import '../../assets/css/gardenStyles.scss';

</style>
