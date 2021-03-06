var VideoListView = Backbone.View.extend({

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.each(this.renderVideo, this);
    // console.log('this', this);
    return this;
  },
  
  renderVideo: function(video) {
    //debugger;
    this.$('.video-list').append(
      new VideoListEntryView({
        model: video
      }).render().el
    );
  },

  template: templateURL('src/templates/videoList.html')

});
