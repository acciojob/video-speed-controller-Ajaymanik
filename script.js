const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const skipButtons = document.querySelectorAll('[data-skip]');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

// Toggle play/pause
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
volume.addEventListener('input', handleRangeUpdate);
playbackSpeed.addEventListener('input', handleRangeUpdate);
skipButtons.forEach(button => button.addEventListener('click', skip));
