<template>
  <div id="app" class="page-container  md-layout-column">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Punk Beers</span>
        <div class="md-toolbar-section-end">
          <md-button @click="toggleCart"><md-icon>shopping_cart</md-icon></md-button>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <img src="./assets/logo.png" alt="V for Vue" width="50">
          <span>for vue</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item to="/">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">Beers</span>
          </md-list-item>

          <md-list-item to="/about">
            <md-icon>info</md-icon>
            <span class="md-list-item-text">About</span>
          </md-list-item>
       </md-list>
      </md-app-drawer>

      <md-app-drawer class="md-right" :md-active.sync="cartVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">Shopping cart</span>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <span class="md-list-item-text">yada yada</span>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">remove_shopping_cart</md-icon>
            </md-button>
          </md-list-item>
          <md-list-item>
            <span class="md-list-item-text">yada yada</span>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">remove_shopping_cart</md-icon>
            </md-button>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      menuVisible: false,
      cartVisible: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    },
    toggleCart() {
      console.log('toggle cart', this.cartVisible)
      this.cartVisible = !this.cartVisible
    }
  }
}
</script>

<style scoped>
.page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }
</style>
