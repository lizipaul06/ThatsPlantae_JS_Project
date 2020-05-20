<template lang="html">
  <div class="plant">
    <p class="plant-title">{{gardenItem.common_name}}</p>
    <div v-if="gardenItem.images && gardenItem.images.length > 0">
      <!-- If the plant has more than one image, just show the first one -->
      <div class="hvrbox">
        <img :src="gardenItem.images[0].url" alt="a plant" class="hvrbox-layer_bottom">
        <div class="hvrbox-layer_top">
          <div class="hvrbox-text"><p>Scientific Name: {{gardenItem.scientific_name}}</p>
            <p>Rainfall: {{gardenItem.main_species.growth.precipitation_minimum.inches}}in - {{gardenItem.main_species.growth.precipitation_maximum.inches}}in</p>
            <p>Soil ph: {{gardenItem.main_species.growth.ph_minimum}} - {{gardenItem.main_species.growth.ph_maximum}}</p>
            <p>Min Temp: {{gardenItem.main_species.growth.temperature_minimum.deg_c.toFixed(2)}}°c</p>
            <p>Shade: {{gardenItem.main_species.growth.shade_tolerance}}</p>
            <p>Roots: {{gardenItem.main_species.growth.root_depth_minimum.inches}}in</p></div>
          </div>
        </div>
      </div>
      <!-- If the plant has no images, show a placeholder instead -->
      <div class="hvrbox">
        <div v-if="gardenItem.images.length === 0">
          <img src="../../assets/images/placeholder_plant.jpg" alt="a rubber plant placeholder image" class="hvrbox-layer_bottom">
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text"><p>Scientific Name: {{gardenItem.scientific_name}}</p>
              <p>Rainfall: {{gardenItem.main_species.growth.precipitation_minimum.inches}}in - {{gardenItem.main_species.growth.precipitation_maximum.inches}}in</p>
              <p>Soil ph: {{gardenItem.main_species.growth.ph_minimum}} - {{gardenItem.main_species.growth.ph_maximum}}</p>
              <p>Min Temp: {{gardenItem.main_species.growth.temperature_minimum.deg_c.toFixed(2)}}°c</p>
              <p>Shade: {{gardenItem.main_species.growth.shade_tolerance}}</p>
              <p>Roots: {{gardenItem.main_species.growth.root_depth_minimum.inches}}in</p></div>
            </div>
          </div>
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
        <button v-on:click="handleDelete">Remove From Garden</button>
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
        }
      }
    }

    </script>

    <style lang="css" scoped>

     @import '../../assets/css/gardenStyles.css';

    </style>
