const video = document.querySelector('#video');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const backward = document.querySelector('#backward');
const forward = document.querySelector('#forward');
const progressBar = document.querySelector("#progressBar");

play.addEventListener('click', handlePlay);
pause.addEventListener('click', handlePause);
backward.addEventListener('click', handleBackward);
forward.addEventListener('click', handleForward);
video.addEventListener('loadedmetadata', handleLoadedVideo);
video.addEventListener('timeupdate', handleTimeUpdate);
progressBar.addEventListener('input', handleInputProgressBar);

function handlePlay() {
  video.play();
  play.hidden = true;
  pause.hidden = false;
}

function handlePause() {
  video.pause();
  play.hidden = false;
  pause.hidden = true;
}

function handleBackward() {
  video.currentTime -= 10;
}

function handleForward() {
  video.currentTime += 10;
}


function handleLoadedVideo() {
  progressBar.max = video.duration;
}

function handleTimeUpdate() {
  progressBar.value = video.currentTime;
}

function handleInputProgressBar() {
  video.currentTime = progressBar.value;
}