<template lang="html">
  <div class="plant">
    <div v-if="gardenItem.images && gardenItem.images.length > 0">
      <!-- If the plant has more than one image, just show the first one -->
      <b-card
      :img-src="gardenItem.images[0].url"
      img-alt="a plant"
      img-top
      style="max-width: 20rem;"
      class="bg-secondary text-light"

      >
      <template v-slot:header>
      <h4 class="mb-0">{{capital_letter(gardenItem.common_name)}}</h4>
    </template>
      <b-card-text  >
      <p  class="font-italic">  Scientific Name: {{gardenItem.scientific_name}} </p>
        Rainfall: {{gardenItem.main_species.growth.precipitation_minimum.inches}}in - {{gardenItem.main_species.growth.precipitation_maximum.inches}}in <br/>
        Soil ph: {{gardenItem.main_species.growth.ph_minimum}} - {{gardenItem.main_species.growth.ph_maximum}} <br/>
        Min Temp: {{gardenItem.main_species.growth.temperature_minimum.deg_c.toFixed(2)}}°c <br/>
        Shade: {{gardenItem.main_species.growth.shade_tolerance}} <br/>
        Roots: {{gardenItem.main_species.growth.root_depth_minimum.inches}}in <br/>
      </b-card-text>
      <b-button variant="light" href="#" >Go somewhere</b-button>
      <b-button variant="light" v-on:click="handleDelete">Remove From Garden</b-button>
    </b-card>
  </div>
  <!-- If the plant has no images, show a placeholder instead -->
  <div v-if="gardenItem.images.length === 0">
    <b-card
    img-src="/images/placeholder_plant.jpg"
    img-alt="a rubber plant placeholder image"
    img-top
    style="max-width: 20rem;"
    class="bg-secondary text-light"
    >
    <template v-slot:header>
    <h4 class="mb-0">{{gardenItem.common_name}}</h4>
  </template>
    <b-card-text >
        <p  class="font-italic">  Scientific Name: {{gardenItem.scientific_name}} </p>
      Rainfall: {{gardenItem.main_species.growth.precipitation_minimum.inches}}in - {{gardenItem.main_species.growth.precipitation_maximum.inches}}in <br/>
      Soil ph: {{gardenItem.main_species.growth.ph_minimum}} - {{gardenItem.main_species.growth.ph_maximum}} <br/>
      Min Temp: {{gardenItem.main_species.growth.temperature_minimum.deg_c.toFixed(2)}}°c <br/>
      Shade: {{gardenItem.main_species.growth.shade_tolerance}} <br/>
      Roots: {{gardenItem.main_species.growth.root_depth_minimum.inches}}in <br/>
    </b-card-text>
    <b-button variant="light" href="#" >Go somewhere</b-button>
    <b-button variant="light" v-on:click="handleDelete">Remove From Garden</b-button>
  </b-card>
</div>
<!-- Show status if exists -->
<div v-if="gardenItem.status">
  Today my plant: {{gardenItem.status}}
</div>
<div class="">
  <label for="status">Update plant status to:</label>
  <select id="status" v-on:change="handleChange" v-model="status">
    <option value="is thirsty">is thirsty</option>
    <option value="is in bloom">is in bloom</option>
    <option value="is producing fruit">is producing fruit</option>
    <option value="is looking healthy">is looking healthy</option>
    <option value="needs a chat">needs a chat</option>
    <option value="needs fertilizer">needs fertilizer</option>
    <option value="needs more sun">needs more sun</option>
    <option value="needs less sun">needs less sun</option>
    <option value="needs a hug">needs a hug</option>
    <option value="has gone missing">has gone missing</option>
    <option value="has been eaten">has been eaten</option>
  </select>
</div>

</div>
</template>

<script>
import PlantService from '../../services/PlantService.js';
import { eventBus } from '../../main.js';

export default {
  name: "garden-item",
  data(){
    return{
      comments: [],
      status: ""
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
  capital_letter(str){
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
    }
  }
}

</script>

<style lang="scss" scoped>

  @import '../../assets/css/gardenStyles.scss';

</style>
