<template lang="html">
  <div class="body">

      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#"></b-navbar-brand>


            <b-navbar-nav>
              <b-nav-item to="/"> Home</b-nav-item>
              <b-nav-item to="/garden" > Garden</b-nav-item>
                <b-nav-item to="/wishlist" > WishList</b-nav-item>
            </b-navbar-nav>


        </b-navbar>
      </div>

        <Home/>
          <router-view/>
      </div>

</div>


</template>

<script>
import Home from './views/Home'

require('@/assets/css/coreStyles.scss')


export default {
  name: 'app'

}
</script>

<style lang="scss" scoped>

  @import './assets/css/coreStyles.scss';

</style>
