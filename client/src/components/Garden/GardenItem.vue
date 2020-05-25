<template lang="html">
  <div >
    <div v-if="gardenItem.images && gardenItem.images.length > 0">
      <!-- If the plant has more than one image, just show the first one -->
      <b-card
      :img-src="gardenItem.images[0].url"
      img-alt="a plant"
      img-top
      style="max-width: 20rem;"
      header-class="header-bg-variant"
      body-class='cardBody'
      header-text-variant="cardHeader"
      align="center"
      >
      <template v-slot:header>
        <h4 class="cardHeader">{{capitalLetter(gardenItem.common_name)}}</h4>
      </template>
      <b-card-body>
        <b-card-text  >
          <p  class="font-italic">  Scientific Name: {{capitalLetter(gardenItem.scientific_name)}} </p>
          <div v-if="gardenItem.status">
            Today my plant: {{gardenItem.status}}
          </div>
        </b-card-text>
        <div class="">
          <b-form-select  id="status" for="status" v-on:change="handleChange" text="Update plant status to:"v-model="status" class="mb-3"
          :options="options">

        </b-form-select>
      </div>

      <b-button variant="outline-secondary" v-on:click="getToDetails" >Plant Details</b-button>
      <b-button variant="outline-danger" v-on:click="handleDelete">Remove From Garden</b-button>
    </b-card-body>

  </b-card>
</div>
<!-- If the plant has no images, show a placeholder instead -->
<div v-if="gardenItem.images.length === 0">
  <b-card
  img-src="/images/placeholder_plant.jpg"
  img-alt="a rubber plant placeholder image"
  img-top
  style="max-width: 20rem;"
  header-class="header-bg-variant"
  body-class='cardBody'
  header-text-variant="cardHeader"
  >
  <template v-slot:header>
    <h4 class="cardHeader">{{gardenItem.common_name}}</h4>
  </template>
  <b-card-body>
    <b-card-text >
      <p  class="font-italic">  Scientific Name: {{gardenItem.scientific_name}} </p>
      <div v-if="gardenItem.status">
        Today my plant: {{gardenItem.status}}
      </div>
    </b-card-text>
  </b-card-body>
  <div class="">

    <b-form-select  id="status" for="status" v-on:change="handleChange" text="Update plant status to:"v-model="status" class="mb-3"
    :options="options">


  </b-form-select>
</div>

<b-button variant="outline-secondary" v-on:click="getToDetails" >Plant Details</b-button>
<b-button variant="outline-danger" v-on:click="handleDelete">Remove From Garden</b-button>
</b-card>
</div>


</div>
</template>

<script>
import plantHelper from '../../helpers.js'
import PlantService from '../../services/PlantService.js';
import { eventBus } from '../../main.js';

export default {
  name: "garden-item",
  data(){
    return{
      comments: [],
      status: null,
      options: [
        { value: null, text: 'Please update plant status' },
        { value: 'is thirsty', text: 'is thirsty' },
        { value: 'is in bloom', text: 'is in bloom' },
        { value: 'is producing fruit', text: 'is producing fruit' },
        { value: 'is looking healthy', text: 'is looking healthy'},
        { value: 'needs a chat', text: 'needs a chat' },
        { value: 'needs fertilizer', text: 'needs fertilizer' },
        { value: 'needs more sun', text: 'needs more sun' },
        { value: 'needs less sun', text: 'needs less sun' },
        { value: 'needs a hug', text: 'needs a hug' },
        { value: 'has gone missing', text: 'has gone missing' },
        { value: 'has been eaten', text: 'has been eaten'},

      ]
    }
  },
  props: ['gardenItem'],
  methods:{
    handleDelete(){
      PlantService.deletePlant(this.gardenItem._id)
      .then(() => eventBus.$emit("plant-deleted", this.gardenItem._id))
    },

    handleChange(){
      const update = {
        status: this.status
      }

      PlantService.updatePlant(this.gardenItem._id, update)
      .then(() => eventBus.$emit('status-changed'))
    },
    getToDetails(){
      this.$router.push({name:'selectedplant', params:{plantDetail: this.gardenItem}},)
    },
    capitalLetter: plantHelper.capitalLetter
  }
}

</script>

<style lang="scss" scoped>


@import '../../assets/css/coreStyles.scss';

</style>
