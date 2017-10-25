var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    console.log('hello');
    //this.listenTo(this.collection, 'select', this.selectVideo);
    this.collection.on('select', this.selectVideo
     , this);
  },
  
  selectVideo: function(video) {
    console.log('model', this.model);
    this.model = video;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));//'<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
