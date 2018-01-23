import * as types from '../mutationTypes'
import * as API from '../../api/contacts'

const state = {
  contacts: []
}
const getters = {
  contactCnt: state => state.contacts.length,
  getNextIdx: (state, getters) =>
    getters.contactCnt > 0 && state.contacts[getters.contactCnt - 1].id + 1
}

const actions = {
  getContacts({ state, commit }) {
    return API.getContacts().then(contacts =>
      commit(types.GET_CONTACTS, { contacts })
    )
  }
}

const mutations = {
  [types.GET_CONTACTS](state, payload) {
    state.contacts = payload.contacts
  },
  [types.ADD_CONTACT](state, payload) {
    state.contacts.push(payload.item)
  },
  [types.ADD_CONTACT_WO_ACTION](state, payload) {
    state.contacts.push(payload.item)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
