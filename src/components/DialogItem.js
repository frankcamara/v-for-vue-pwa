const DialogItem = {
  props: ['showDialog', 'name', 'phone', 'nameErrors', 'phoneErrors'],
  template: `<md-dialog :md-active="showDialog" @update:mdActive="onCloseDialog">
    <md-dialog-title>Add new contact</md-dialog-title>

    <md-tabs md-dynamic-height>
      <md-tab md-label="Contact">
        <md-field md-inline :class="nameErrors">
          <label>Name</label>
          <md-input v-model="name" required></md-input>
          <span class="md-error">There is an error</span>
        </md-field>
        <md-field md-number :class="phoneErrors">
          <label>Phone</label>
          <md-input v-model="phone" type="number" required></md-input>
          <span class="md-error">There is an error</span>
        </md-field>
      </md-tab>

      <md-tab md-label="Help">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
      </md-tab>
    </md-tabs>

    <md-dialog-actions>
      <md-button class="md-primary" @click="onCloseDialog">Close</md-button>
      <md-button class="md-primary" @click="onAddContact">Save</md-button>
    </md-dialog-actions>
  </md-dialog>`,
  methods: {
    onAddContact: function() {
      this.$emit('onAddContact')
    },
    onCloseDialog: function() {
      console.log('Dialog closed')
      this.$emit('update:showDialog', false)
    }
  }
}
export default DialogItem
