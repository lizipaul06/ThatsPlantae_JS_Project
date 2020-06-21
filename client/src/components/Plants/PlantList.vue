<template lang="html">
 <div v-if="allPlants">
   <v-select
  label="common_name"
      class="style-chooser"
  @input="setPlant"
  :options="allPlants"
  :filter="fuseSearch"
  :value="$store.state.selectedPlant"
></v-select>


  </div>
</template>

<script>

import Fuse from 'fuse.js';
import {eventBus} from '../../main.js'
import plantHelper from '../../helpers.js'
import { mapGetters, mapActions } from 'vuex';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
export default {
  name: "plant-list",
  data(){
    return{


    }
  },
  components: {
    "v-select": vSelect
  },

  methods: {
    ...mapActions(['fetchPlants', 'fetchPlant']),

    setPlant(value){
      let plant = this.fetchPlant(value.id)
      this.$store.commit('setPlant',plant)
    },
    capitalLetter: plantHelper.capitalLetter,
    fuseSearch (options, search) {
    const fuse = new Fuse(options, {
      keys: ['common_name', 'family_common_name'],
      shouldSort: true,
    });
    return search.length ? fuse.search(search) : fuse.list;
  }
  },
computed: {
  ...mapGetters(['allPlants', 'selectedPlant']),
    store() {
         return this.$store.state
       },

  sortedArray: function() {
    function compare(a, b) {
      if (a.common_name < b.common_name)
        return -1;
      if (a.common_name > b.common_name)
        return 1;
      return 0;
    }

    return this.plantData.sort(compare);
  }
},
created(){
  this.fetchPlants()



},
watch:{
  selectedPlant() {
    const path = {name:'selectedplant'}
if (this.$route.path !== path) {this.$router.push(path)

  }
}


}
}



</script>

<style lang="scss" scoped>

  @import '../../assets/css/plantListStyles.scss';
</style>
