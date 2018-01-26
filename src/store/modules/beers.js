import * as types from '../mutationTypes'
import * as API from '../../api/beers'

const state = {
  fetching: false,
  beers: []
}

const getters = {}

const actions = {
  getBeers({ state, commit }, { page, limit }) {
    state.fetching = true
    return API.getBeers({ page, limit }).then(beers => {
      commit(types.GET_BEERS_DONE, { beers })
    })
  },
  getRandomBeer({ state, commit }) {
    return API.getRandomBeer().then(beers => {
      commit(types.GET_RANDOM_BEER_DONE, { beers })
    })
  }
}

const mutations = {
  [types.GET_BEERS_DONE](state, payload) {
    state.fetching = false
    state.beers = [...state.beers, ...payload.beers]
  },
  [types.GET_RANDOM_BEER_DONE](state, payload) {
    state.beers.push(payload.beers)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
