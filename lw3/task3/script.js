var Player = {
    trackList: [
      'song1.mp3',
      'song2.mp3',
      'song3.mp3',
    ],
    currentTrack: 'song1.mp3',
    currentIndex: 0,
    status: 'pause',
    display: function() {
      return 'Track: ' + this.currentTrack + ' Status: ' + this.status;
    },
    play: function() {
      this.status = 'play';
      console.log('Play');
    },
    pause: function() {
      this.status = 'pause';
      console.log('Pause');
    },
    next: function() {
      if(this.currentIndex +1 >= this.trackList.length) {
        this.currentIndex = 0;
      }
      else{
        this.currentIndex += 1;
      }
      this.currentTrack = this.trackList[this.currentIndex];
    },
    prev: function() {
      if(this.currentIndex  <= 0) {
        this.currentIndex = this.trackList.length - 1;
      }
      else{
        this.currentIndex -= 1;
      }
      this.currentTrack = this.trackList[this.currentIndex];
    },
    showTracks: function() {
      console.log(this.trackList);
      console.log(this.currentTrack + ' - Играет сейчас');
    }
  };