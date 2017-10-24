var VideoPlayerView = Backbone.View.extend({
  initalize: function() {
    //this.render();
    console.log('inside videoPlayer');
    this.listenTo(this.collection, 'select', this.selectVideo);
  },
  
  selectVideo: function(video) {
    this.model = video;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));//'<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
