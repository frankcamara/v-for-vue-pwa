import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import contacts from './modules/contacts'
import beers from './modules/beers'
Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  modules: {
    contacts,
    beers
  }
})

export default store
