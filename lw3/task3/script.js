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
    else {
      this.currentIndex += 1;
    }
    this.currentTrack = this.trackList[this.currentIndex];
    this.status = 'play';
  },
  prev: function() {
    if (this.currentIndex  <= 0) {
      this.currentIndex = this.trackList.length - 1;
    }
    else {
      this.currentIndex -= 1;
    }
    this.currentTrack = this.trackList[this.currentIndex];
    this.status = 'play';
  },
  showTracks: function() {
    this.trackList.map(song => {
      if (song === this.currentTrack) {
        console.log(song + ' - Играет сейчас')
      }
      else {
        console.log(song)
      }
    })
  }
};