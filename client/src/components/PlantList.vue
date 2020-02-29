<template lang="html">
  <div class="">
    <plant-list-item
    v-for="(plant, index) in plants"
    :plant ="plant"
    :key="index"
    >
  </plant-list-item>
  </div>
</template>

<script>
import PlantListItem from "../components/PlantListItem.vue";
import Search from "../components/Search.vue";

export default {
  name: "plant-list",
  props: ["plants"],
  components: {
    "plant-list-item": PlantListItem,
    "search": Search
  }
};
</script>

<style lang="css" scoped>
</style>
