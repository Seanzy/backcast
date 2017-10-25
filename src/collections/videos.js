var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function(query) { //query = searchInput
    console.log('query', query);
    $.ajax({
      url: 'https://www.youtube.com/results?',
      type: 'GET',
      query, 
      // defaults: {
      //   maxResults: 5 // or maxResults = 5?
        
      // },
      
      key: window.YOUTUBE_API_KEY,
      success: function(data) {
        console.log('success!');
      }

    }); 
  
  },

});

//var exampleVideos = new Videos(window.exampleVideoData);

//check if ajax has defaults