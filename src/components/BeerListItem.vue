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
        <transition name="bounce" @after-leave="afterLeave">
          <md-button @click="addToCart" v-if="!animate"><md-icon>add_shopping_cart</md-icon></md-button>
        </transition>
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
      this.animate = !this.animate
      this.$emit('addToCart', this.beer)
    },
    afterLeave() {
      this.animate = !this.animate
    }
  },
  data() {
    return {
      animate: false
    }
  }
}
</script>

<style scoped>

.bounce-leave-active {
  animation: bounce-in .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
