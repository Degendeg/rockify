var audio = document.getElementById("audio");
var playpause = document.getElementById("play-pause");
var forwardBtn = document.getElementById("forward");
var backwardBtn = document.getElementById("backward");
var volume = document.getElementById("volume");
var source = document.getElementById("audioSource");
var image = document.getElementById("banner");
var genre = document.getElementById("genre");

/* toggle play, show pause, set low volume */
audio.play();
playpause.innerHTML = '<i class="fa fa-pause fa-3x"></i>';
volume.value = 0.1;
audio.volume = 0.1;

/* disable backward by default */
backwardBtn.disabled = true;

/* disable controls */
audio.controls = false;

/* play & pause */
function togglePlayPause() {
  if (audio.paused || audio.ended) {
    playpause.title = "Pause";
    playpause.innerHTML = '<i class="fa fa-pause fa-3x"></i>';
    audio.play();
  } else {
    playpause.title = "Play";
    playpause.innerHTML = '<i class="fa fa-play fa-3x"></i>';
    audio.pause();
  }
}

/* set volume */
function setVolume() {
  audio.volume = volume.value;
}

/* reset the player */
function resetPlayer() {
  audio.currentTime = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);
  playpause.title = "Play";
  playpause.innerHTML = '<i class="fa fa-play fa-3x"></i>';
}

/* forward the source - change station */
function frwSource() {
	image.src = "img/2.jpg";
	genre.innerHTML = "80's";
	forwardBtn.disabled = true;
	backwardBtn.disabled = false;
	source.src = 'http://181fm-edge1.cdnstream.com/181-awesome80s_128k.mp3?cb=254913.mp3';
	audio.load(); //call this to just preload the audio without playing
	audio.play(); //call this to play the song right away
}

/* backward the source - change to default */
function bkwSource() {
	image.src = "img/1.jpg";
	genre.innerHTML = "Classic Rock";
	backwardBtn.disabled = true;
	forwardBtn.disabled = false;
	source.src = 'http://181fm-edge1.cdnstream.com/181-eagle_128k.mp3?cb=436795.mp3';
	audio.load(); //call this to just preload the audio without playing
	audio.play(); //call this to play the song right away
}