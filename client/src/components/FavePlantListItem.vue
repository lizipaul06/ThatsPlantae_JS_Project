<template lang="html">
  <div class="plant">

    <h3>{{favePlant.common_name}}</h3>

    <div v-if="favePlant.images && favePlant.images.length > 0">
      <!-- If the plant has more than one image, just show the first one -->
      <div class="hvrbox">
        <img :src="favePlant.images[0].url" alt="a plant" class="hvrbox-layer_bottom">
        <div class="hvrbox-layer_top">
          <div class="hvrbox-text"><p>Scientific Name: {{favePlant.scientific_name}}</p>
          <p>Rainfall: {{favePlant.main_species.growth.precipitation_minimum.inches}}in - {{favePlant.main_species.growth.precipitation_maximum.inches}}in</p>
          <p>Soil ph: {{favePlant.main_species.growth.ph_minimum}} - {{favePlant.main_species.growth.ph_maximum}}</p>
          <p>Min Temp: {{favePlant.main_species.growth.temperature_minimum.deg_c.toFixed(2)}}°c</p>
          <p>Shade: {{favePlant.main_species.growth.shade_tolerance}}</p>
          <p>Roots: {{favePlant.main_species.growth.root_depth_minimum.inches}}in</p></div>
        </div>
      </div>
    </div>

    <!-- If the plant has no images, show a placeholder instead -->
    <div class="hvrbox">
    <div v-if="favePlant.images.length === 0">
      <img src="../../public/placeholder_plant.jpg" alt="a rubber plant placeholder image" class="hvrbox-layer_bottom">
      <div class="hvrbox-layer_top">
        <div class="hvrbox-text"><p>Scientific Name: {{favePlant.scientific_name}}</p>
        <p>Rainfall: {{favePlant.main_species.growth.precipitation_minimum.inches}}in - {{favePlant.main_species.growth.precipitation_maximum.inches}}in</p>
        <p>Soil ph: {{favePlant.main_species.growth.ph_minimum}} - {{favePlant.main_species.growth.ph_maximum}}</p>
        <p>Min Temp: {{favePlant.main_species.growth.temperature_minimum.deg_c.toFixed(2)}}°c</p>
        <p>Shade: {{favePlant.main_species.growth.shade_tolerance}}</p>
        <p>Roots: {{favePlant.main_species.growth.root_depth_minimum.inches}}in</p></div>
      </div>
    </div>
  </div>

    <!-- Show status if exists -->
    <div v-if="favePlant.status">
      Today my plant: {{favePlant.status}}
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
    <option value="has gone to the compost heap in the sky">has gone to the compost heap in the sky</option>
  </select>
</div>

    <button v-on:click="handleDelete">Remove From Garden</button>

  </div>
</template>

<script>
import PlantService from '../services/PlantService.js';
import { eventBus } from '../main.js';

export default {
  name: "fave-plant",
  data(){
    return{
      comments: [],
      status: ""
    }
  },
  props: ['favePlant'],
  methods:{
    handleDelete(){
      PlantService.deletePlant(this.favePlant._id)
      .then(() => eventBus.$emit("plant-deleted", this.favePlant._id))
    },

    handleChange(){
      const update = {
        status: this.status
      }
      PlantService.updatePlant(this.favePlant._id, update)
      .then(() => eventBus.$emit('status-changed'))
    }

  }
}
</script>

<style lang="css" scoped>

.plant{
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
}

img {
  height: 200px;
}

button {
  margin-top: 10px;
}

.hvrbox,
.hvrbox * {
  box-sizing: border-box;
}
.hvrbox {
  position: relative;
  display: inline-block;
  overflow: hidden;
  max-width: 100%;
  height: auto;
}
.hvrbox img {
  max-width: 100%;
}
.hvrbox .hvrbox-layer_bottom {
  display: block;
}
.hvrbox .hvrbox-layer_top {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 15px;
  -moz-transition: all 0.4s ease-in-out 0s;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -ms-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}
.hvrbox:hover .hvrbox-layer_top,
.hvrbox.active .hvrbox-layer_top {
  opacity: 1;
}
.hvrbox .hvrbox-text {
  text-align: center;
  font-size: 18px;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.hvrbox .hvrbox-text_mobile {
  font-size: 15px;
  border-top: 1px solid rgb(179, 179, 179); /* for old browsers */
  border-top: 1px solid rgba(179, 179, 179, 0.7);
  margin-top: 5px;
  padding-top: 2px;
  display: none;
}
.hvrbox.active .hvrbox-text_mobile {
  display: block;
}

</style>
