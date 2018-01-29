import Vue from 'vue'
import * as types from '../mutationTypes'

const state = {
  cartItems: {}
}

const getters = {
  getCartTotal: state =>
    Object.values(state.cartItems).reduce((total, prop) => {
      return total + prop.ebc * prop.qtyNumber
    }, 0),
  getItemTotal: state =>
    Object.keys(state.cartItems).reduce((total, key) => {
      return total + state.cartItems[key].qtyNumber
    }, 0)
}

const actions = {
  addToCart({ state, commit }, beer) {
    commit(types.ADD_TO_CART_DONE, { beer })
  },
  removeFromCart({ state, commit }, id) {
    commit(types.REMOVE_FROM_CART_DONE, { id })
  }
}

const mutations = {
  [types.ADD_TO_CART_DONE](state, payload) {
    if (!state.cartItems[payload.beer.id]) {
      Vue.set(state.cartItems, payload.beer.id, {
        ...payload.beer,
        qtyNumber: 0
      })
    }
    const item = state.cartItems[payload.beer.id]
    item.qtyNumber = item.qtyNumber ? item.qtyNumber + 1 : 1
  },
  [types.REMOVE_FROM_CART_DONE](state, payload) {
    Vue.delete(state.cartItems, payload.id)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
