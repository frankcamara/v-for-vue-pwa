import * as types from './mutationTypes'

export const addContact = ({ commit }, payload) => {
  setTimeout(() => {
    commit(types.ADD_CONTACT, payload)
  }, 1000)
}
