<template>
  <div>
    <h1 v-bind:title="msgHoover">{{ msg }}</h1>
    <md-tabs md-sync-route>
      <md-tab id="tab-contacts" md-label="Contacts" to="/list">
        <md-list>
          <dialog-item
            :show-dialog.sync="showDialog"
            :name.sync="name"
            :phone.sync="phone"
            :name-errors="nameErrors"
            :phone-errors="phoneErrors"
            v-on:onAddContact="handleAddContact">
          </dialog-item>

          <md-button class="md-icon-button md-raised" @click="showDialog = true">
            <md-icon>add</md-icon>
          </md-button>

          <list-item
            v-for="contact in contacts"
            v-bind:contact="contact"
            v-bind:key="contact.id"
            @click.native="handleMyEvent">
          </list-item>
        </md-list>
      </md-tab>
      <md-tab id="tab-other" md-label="Other" to="/list/other">
        TBD
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import * as types from '../store/mutationTypes'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

const List = {
  name: 'list',
  components: {
    'list-item': () => import('./ListItem'),
    'dialog-item': () => import('./DialogItem')
  },
  methods: {
    // Async mutations
    ...mapActions(['getContacts', 'addContact']),
    // Sync mutations
    ...mapMutations({
      addContactWOAction: types.ADD_CONTACT_WO_ACTION
    }),
    //Events
    handleAddContact: function() {
      this.nameRequired = !this.name
      this.phoneRequired = !this.phone

      if (!this.nameRequired && !this.phoneRequired) {
        this.showDialog = false
        this.addContactWOAction({
          item: { id: this.getNextIdx, name: this.name, phone: this.phone }
        })
      }
    },
    handleMyEvent: function() {
      this.addContact({
        item: {
          id: this.getNextIdx,
          name: 'Dummy-Async',
          phone: '(46) 111-9999'
        }
      })
    }
  },
  computed: {
    ...mapState({
      contacts: state => state.contacts.contacts
    }),
    ...mapGetters(['contactCnt', 'getNextIdx']),
    // validation - try other ways (form validation - vuelidate)
    // https://vuematerial.io/components/form
    nameErrors() {
      return {
        'md-invalid': this.nameRequired
      }
    },
    phoneErrors() {
      return {
        'md-invalid': this.phoneRequired
      }
    }
  },
  created() {
    this.getContacts()
  },
  data() {
    return {
      showDialog: false,
      msg: 'List',
      msgHoover: 'This is cool',
      name: '',
      phone: '',
      nameRequired: false,
      phoneRequired: false
    }
  }
}
export default List
</script>

<style>

</style>
