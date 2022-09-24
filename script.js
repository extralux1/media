/*
DONE:
- play/pause;
- mute/unmute;
- volume;
- progress bar.

TODO:
- backward/forward;
- repeat/shuffle;
- lyrics;
- playlist.
*/

var audio = document.getElementById('audio');
var progress = document.getElementById('progress');
var playpause = document.getElementById("play-pause");
var muteunmute = document.getElementById("mute-unmute");
var volume = document.getElementById("volume");

audio.controls = false;

audio.addEventListener('timeupdate', function() {
  	updateProgress();
}, false);

function togglePlayPause() {
   if (audio.paused || audio.ended) {
      playpause.title = "Ugasi";
      playpause.innerHTML = '<i class="fa fa-pause fa-3x"></i>';
      audio.play();
   } else {
      playpause.title = "Upali";
      playpause.innerHTML = '<i class="fa fa-play fa-3x"></i>';
      audio.pause();
   }
}
audio.addEventListener('timeupdate', function() {
  	updateProgress();
}, false);

function toggleMuteUnmute() {
   if (audio.paused || audio.ended) {
      MuteUnmute.title = "Mutiraj";
      playpause.innerHTML = '<i class="fa fa-mute fa-3x"></i>';
      audio.play();
   } else {
      MuteUnmute.title = "Odmutiraj";
      MuteUnmute.innerHTML = '<i class="fa fa-unmute fa-3x"></i>';
      audio.pause();
   }
}

function setVolume() {
   audio.volume = volume.value;
}

function updateProgress() {
	var percent = Math.floor((100 / audio.duration) * audio.currentTime);
	var canvas = document.getElementById('progress');
	var radius = 50;
	var circ = Math.PI * 1;
	var quart = Math.PI / 1;
	var cpercent = percent / 100; /* current percent */
	if (audio.ended) resetPlayer();
}

function resetPlayer() {
	  audio.currentTime = 0; context.clearRect(0,0,canvas.width,canvas.height);
  playpause.title = "Play";
	  playpause.innerHTML = '<i class="fa fa-play fa-3x"></i>';
}

function resetPlayer() {
	  audio.currentTime = 0; context.clearRect(0,0,canvas.width,canvas.height);
  MuteUnmute.title = "Mute";
	  playpause.innerHTML = '<i class="fa fa-mute fa-3x"></i>';
}

// thx to: http://www.adobe.com/devnet/html5/articles/html5-multimedia-pt3.html