<template>
  <div class="page-container">
    <div v-if="Object.keys(cartItems).length">
      <md-table>
        <md-table-toolbar>
          <h1 class="md-title">Shopping cart</h1>
          <div class="md-toolbar-section-end">
            <md-button to="/" class="md-primary md-raised">Continue shopping</md-button>
          </div>
        </md-table-toolbar>
        <md-table-row>
          <md-table-head></md-table-head>
          <md-table-head>Description</md-table-head>
          <md-table-head>Options</md-table-head>
          <md-table-head>Price</md-table-head>
        </md-table-row>

        <md-table-row v-for="item in cartItems" :key="item.id">
          <md-table-cell>
            <img :src="item.image_url" alt="item.name">
          </md-table-cell>
          <md-table-cell>{{item.name}}</md-table-cell>
          <md-table-cell>{{item.description}}</md-table-cell>
          <md-table-cell>{{item.ebc}}</md-table-cell>
        </md-table-row>
      </md-table>

      <br>
      <br>
      <md-table>
        <md-table-toolbar>
          <h1 class="md-title">Summary</h1>
        </md-table-toolbar>

        <md-table-row>
          <md-table-cell>
            <p><h4>Total number of items: {{getItemTotal}}</h4></p>
            <p><h3>Subtotal: {{getCartTotal}} EUR</h3></p>
            <p><h3>VAT: 12,5%</h3></p>
            <p><h3>Total cost: {{getTotal}}</h3></p>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
    <md-empty-state
      md-rounded
      md-icon="access_time"
      md-label="Empty shopping cart"
      v-else>
      <md-button to="/" class="md-primary md-raised">Continue shopping</md-button>
    </md-empty-state>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'checkout',
  computed: {
    ...mapState({
      cartItems: state => state.cart.cartItems
    }),
    ...mapGetters(['getCartTotal', 'getItemTotal']),
    getTotal() {
      return this.getCartTotal * 1.125
    }
  }
}
</script>

<style scoped>
</style>
