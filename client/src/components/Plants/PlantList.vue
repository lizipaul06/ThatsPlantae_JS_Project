<template lang="html">
 <div v-if="allPlants">
   <v-select
  label="common_name"
     class="style-chooser"
  @input="setPlant"
  :options="allPlants"
  :value="$store.state.selectedPlant"
></v-select>


  </div>
</template>

<script>

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
    capitalLetter: plantHelper.capitalLetter
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
  background: 'white';
  border: 'bold';
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
  width: auto
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: 'white';

}
  @import '../../assets/css/plantListStyles.scss';
</style>
