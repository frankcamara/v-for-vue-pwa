<template>
  <div id="app">
    <md-app class="page-container">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Punk Beers</span>
        <div class="md-toolbar-section-end" v-show="showCart">
          <md-button @click="toggleCart"><md-icon>shopping_cart</md-icon></md-button>
            <div v-if="getItemTotal">
              <md-button  class="md-fab md-mini md-fab-top-right md-fixed">
                {{getItemTotal}}
              </md-button>
            </div>
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

          <md-list-item to="/friends">
            <md-icon>account_circle</md-icon>
            <span class="md-list-item-text">My Friends</span>
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
          <div v-if="Object.keys(cartItems).length">
            <md-list-item v-for="item in cartItems" :key="item.id">
              <span class="md-list-item-text">{{item.name | truncate(10)}}</span>
              <span class="md-list-item-text"> Qty: {{item.qtyNumber}}</span>
              <md-button class="md-icon-button md-list-action" @click="handleRemoveFromCart(item.id)">
                <md-icon class="md-primary">remove_shopping_cart</md-icon>
              </md-button>
            </md-list-item>
            <hr>
            <md-list-item>
              <h4>Qty: {{getItemTotal}}</h4>
              <h3>Total: {{getTotal}} EUR</h3>
            </md-list-item>
            <md-list-item @click="handleCheckout" class="checkout">
              <span class="md-list-item-text">Checkout</span>
              <md-icon>payment</md-icon>
            </md-list-item>
          </div>
          <md-list-item v-else>
          <md-empty-state
            class="md-primary"
            md-icon="info"
            md-label="Empty cart"
            md-description="Hey, add some beer">
          </md-empty-state>
        </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="page-container">
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      menuVisible: false,
      cartVisible: false
    }
  },
  methods: {
    ...mapActions(['removeFromCart']),
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    },
    toggleCart() {
      this.cartVisible = !this.cartVisible
    },
    handleRemoveFromCart(id) {
      this.removeFromCart(id)
    },
    handleCheckout() {
      this.toggleCart()
      this.$router.push('/checkout')
    }
  },
  computed: {
    ...mapState({
      cartItems: state => state.cart.cartItems
    }),
    ...mapGetters(['getCartTotal', 'getItemTotal']),
    showCart() {
      return this.$route.name === 'Beers'
    },
    getTotal() {
      return this.getCartTotal / 10 * 1.125
    }
  },
  filters: {
    truncate(text, stop) {
      return text.slice(0, stop) + (stop < text.length ? '...' : '')
    }
  }
}
</script>

<style scoped>
  .page-container {
    height: 100vh
  }

  .md-drawer {
    width: 250px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 24px;
  }

  .checkout {
    background-color: #448aff;
    margin-top: 40px
  }
  /* Override styles to create a temporary badge
   * Badges will be implemented soon in the lib
   * */
  .md-fab {
    box-shadow: none !important
  }
  .md-fab.md-mini {
    width: 24px !important;
    height: 24px !important;
  }
  .md-fab.md-fab-top-right {
    right: 32px;
  }

</style>
