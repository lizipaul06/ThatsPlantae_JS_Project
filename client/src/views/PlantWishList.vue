<template lang="html">
  <wish-list> </wish-list>
</template>

<script>
import WishList from '../components/WishList/WishList'
import {
  eventBus
} from '../main.js';
export default {
  name: "PlantWishList",
  components: {
    "wish-list": WishList,
  }

}
</script>

<style lang="scss" scoped>
@import '../assets/css/coreStyles.scss';
</style>
