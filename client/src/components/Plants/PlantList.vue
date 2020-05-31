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
    this.$router.push({name:'selectedplant'})
  },



}
}



</script>

<style lang="scss" scoped>
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #dfe5fb;
  border: none;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
}
  @import '../../assets/css/plantListStyles.scss';
</style>
