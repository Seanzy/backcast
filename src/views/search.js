var SearchView = Backbone.View.extend({
  events: {
    'click': 'handleClick'
  },
  
  handleClick: function() {
    //console.log('click');
    var searchInput = document.getElementById("submit").value;
    this.collection.search(searchInput);
    // console.log(searchInput);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
