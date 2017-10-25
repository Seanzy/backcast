var VideoListEntryView = Backbone.View.extend({
  events: {
    'click': 'handleClick'
  },
  initialize: function() {
    this.render();
    // this.model.on('click', this.handleClick, this);
  },
  
  handleClick: function() {
    console.log('clicked');
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
