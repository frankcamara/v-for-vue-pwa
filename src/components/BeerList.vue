<template>
  <md-list>
    <beer-list-item
      v-for="(beer, index) in beers"
      :beer="beer"
      :key="index"
      @addToCart="onAddToCart">
    </beer-list-item>
  </md-list>
</template>

<script>
export default {
  name: 'beerList',
  props: ['beers'],
  components: {
    'beer-list-item': () => import('./BeerListItem')
  },
  methods: {
    onAddToCart: function(beer) {
      this.$emit('onAddToCart', beer)
    }
  }
}
</script>

<style>

</style>
