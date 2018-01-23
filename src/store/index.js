import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import contacts from './modules/contacts'
Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  modules: {
    contacts
  }
})

export default store
