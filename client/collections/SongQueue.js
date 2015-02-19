// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  playFirst: function() {

    if (this.length > 0){
      var model = this.at(0);
      model.play();
    }
  },
  enqueue: function(song) {
    //console.log(song);
    // add song to collection
    this.add(song);
    song.enqueue(); // tells song to trigger the enqueue signal

  },
  dequeue: function() {
    if (this.length > 0){
      var song = this.at(0);
      this.shift();
      console.log(song);
      song.dequeue();
    }
  }

});
