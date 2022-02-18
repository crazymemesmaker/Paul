//Credit to @flukeout
var sounds = {
  "Scream" : {
    url : "Sounds/Scream.mp3"
  },
  "Press" : {
    url : "Sounds/ButtonPress.mp3",
  },
  "ping" : {
    url : "Sounds/ping.mp3"
  },
  "bump" : {
    url : "Sounds/bump.mp3"
  },
  "jump" : {
    url : "Sounds/jump.wav"
  },
  "coin" : {
    url : "Sounds/coin.mp3"
  }
};


var soundContext = new AudioContext();

for(var key in sounds) {
  loadSound(key);
}

function loadSound(name){
  var sound = sounds[name];

  var url = sound.url;
  var buffer = sound.buffer;

  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  request.onload = function() {
    soundContext.decodeAudioData(request.response, function(newBuffer) {
      sound.buffer = newBuffer;
    });
  }

  request.send();
}

function playSound(name, options){
  var sound = sounds[name];
  var soundVolume = sounds[name].volume || 1;

  var buffer = sound.buffer;
  if(buffer){
    var source = soundContext.createBufferSource();
    source.buffer = buffer;

    var volume = soundContext.createGain();

    if(options) {
      if(options.volume) {
        volume.gain.value = soundVolume * options.volume;
      }
    } else {
      volume.gain.value = soundVolume;
    }

    volume.connect(soundContext.destination);
    source.connect(volume);
    source.start(0);
  }
}
