<template>
  <md-card style="margin: 10px">
    <md-card-header>
      <md-card-media  md-big>
          <img :src="beer.image_url" alt="beer.name" style="height: 160px; width: auto;">
      </md-card-media>

      <md-card-header-text>
        <div class="md-title">{{beer.name}}</div>
        <div class="md-subhead">{{beer.tagline}}</div>
        <div class="md-subhead">{{getALCRate(beer.abv)}}</div>
      </md-card-header-text>

    </md-card-header>

    <md-card-actions md-alignment="space-between">
      <md-card-expand-trigger>
        <md-button class="md-primary">Learn more</md-button>
      </md-card-expand-trigger>
      <md-button @click="addToCart"><md-icon>add_shopping_cart</md-icon></md-button>
    </md-card-actions>

    <md-card-expand>
      <md-card-expand-content>
        <md-card-content>
          <div class="md-title">Decription</div>
          <p>{{beer.description}}</p>
          <div class="md-title">Recommended food</div>
          <span v-for="(item, index) in beer.food_pairing">
            <p>{{++index}}. {{item}}</p>
          </span>
        </md-card-content>
      </md-card-expand-content>
    </md-card-expand>
  </md-card>
</template>

<script>
export default {
  props: ['beer'],
  methods: {
    getALCRate(abv) {
      return `${abv}% ALC/VOL`
    },
    addToCart() {
      console.log('Item add to cart')
      this.$emit('addToCart', this.beer)
    }
  }
}
</script>

<style>
</style>
