<template lang="html">
  <div >
    <div v-if="gardenItem.imageUrl">
      <!-- If the plant has more than one image, just show the first one -->
      <b-card
      :img-src="gardenItem.imageUrl"
      img-alt="a plant"
      img-top
      style="max-width: 20rem;"
      header-class="header-bg-variant"
      body-class='cardBody'
      header-text-variant="cardHeader"
      align="center"
      >
      <template v-slot:header>
        <h4 class="cardHeader">{{capitalLetter(gardenItem.commonName)}}</h4>
      </template>
      <b-card-body>
        <b-card-text  >
          <p  v-if="gardenItem.scientificName" class="font-italic">  Scientific Name: {{capitalLetter(gardenItem.scientificName)}} </p>
          <div v-if="gardenItem.mood">
            Today my plant: {{gardenItem.mood}}
          </div>
        </b-card-text>
        <div class="">
          <b-form-select  id="mood" for="mood" v-on:change="handleChange" text="Update plant status to:"v-model="mood" class="mb-3"
          :options="options">

        </b-form-select>
      </div>

      <b-button variant="outline-secondary" v-on:click="getToDetails()" >Plant Details</b-button>
      <b-button variant="outline-danger" @click="deletePlantItem(gardenItem)">Remove From Garden</b-button>
    </b-card-body>

  </b-card>
</div>

</div>


</div>
</template>

<script>
import plantHelper from '../../helpers.js'
import PlantService from '../../services/PlantService.js';
import {
  eventBus
} from '../../main.js';
import {
  mapGetters,
  mapActions
} from 'vuex';
export default {
  name: "garden-item",
  data() {
    return {
      comments: [],
      mood: null,
      options: [{
          value: null,
          text: 'Please update plant status'
        },
        {
          value: 'is thirsty',
          text: 'is thirsty'
        },
        {
          value: 'is in bloom',
          text: 'is in bloom'
        },
        {
          value: 'is producing fruit',
          text: 'is producing fruit'
        },
        {
          value: 'is looking healthy',
          text: 'is looking healthy'
        },
        {
          value: 'needs a chat',
          text: 'needs a chat'
        },
        {
          value: 'needs fertilizer',
          text: 'needs fertilizer'
        },
        {
          value: 'needs more sun',
          text: 'needs more sun'
        },
        {
          value: 'needs less sun',
          text: 'needs less sun'
        },
        {
          value: 'needs a hug',
          text: 'needs a hug'
        },
        {
          value: 'has gone missing',
          text: 'has gone missing'
        },
        {
          value: 'has been eaten',
          text: 'has been eaten'
        },

      ]
    }
  },
  props: ['gardenItem'],
  methods: {
    ...mapActions(["deletePlant", "fetchGardenPlants", "updatePlantStatus", "fetchPlant"]),
    deletePlantItem(gardenItem) {


      this.deletePlant(gardenItem._id)
      this.fetchGardenPlants();
    },

    handleChange() {

      this.gardenItem.mood = this.mood
      console.log(this.gardenItem)
      this.updatePlantStatus(this.gardenItem)
      this.fetchGardenPlants();
    },
    getToDetails() {
      console.log(this.gardenItem)
      this.fetchPlant(this.gardenItem.slug)

    },
    capitalLetter: plantHelper.capitalLetter
  },
  mounted() {

  },
  computed: {
    // ...mapGetters(['allPlants']),
    store() {
      return this.$store.state
    }
  },
  watch: {

    selectedPlant() {
      const path = {
        name: 'selectedplant'
      }
      if (this.$route.path !== path) {
        this.$router.push(path)

      }
    }


  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/coreStyles.scss';
</style>
