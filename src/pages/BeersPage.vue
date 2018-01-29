<template>
  <beer-list :beers="beers" @onAddToCart="handleAddToCart"></beer-list>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'beersPage',
  components: {
    'beer-list': () => import('../components/BeerList')
  },
  methods: {
    ...mapActions(['getBeers', 'getRandomBeer', 'addToCart']),
    fetchMore() {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottom = visible + scrollY >= pageHeight - 50

      return bottom || pageHeight < visible
    },
    fetchBeer() {
      if (this.fetchMore() && !this.fetching) {
        this.getBeers({ page: this.page, limit: this.limit }).then(() => {
          this.page++
        })
      }
    },
    handleAddToCart(beer) {
      this.addToCart(beer)
    }
  },
  computed: {
    ...mapState({
      beers: state => state.beers.beers,
      fetching: state => state.beers.fetching
    })
  },
  created() {
    window.addEventListener('scroll', this.fetchBeer)
    this.fetchBeer()
  },
  destroyed() {
    window.removeEventListener('scroll', this.fetchBeer)
  },
  data() {
    return {
      page: 1,
      limit: 20
    }
  }
}
</script>

<style>
</style>
