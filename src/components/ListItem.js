const ListItem = {
  props: ['contact'],
  template: `<div>
    <md-subheader>{{contact.name}}</md-subheader>
    <md-list-item>
      <md-icon class="md-primary">face</md-icon>
      <div class="md-list-item-text">
        <span>{{contact.phone}}</span>
        <span>Phone</span>
      </div>
      <md-button class="md-icon-button md-list-action">
        <md-icon>mode_edit</md-icon>
      </md-button>
    </md-list-item>
  </div>`
}
export default ListItem
