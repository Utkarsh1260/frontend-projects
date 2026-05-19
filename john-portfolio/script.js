const video = document.querySelector(".fl-video");
const playButton = document.querySelector(".flamingo-play");
const pauseButton = document.querySelector(".flamingo-pause");

// on play
playButton.addEventListener("click", () => {
  video.play();
  video.classList.add("playing");
  playButton.style.display = "none";
  pauseButton.style.display = "flex";
});

// while clicking on pause button
pauseButton.addEventListener("click", () => {
  video.pause();
});

// when paused
video.addEventListener("pause", () => {
  video.classList.remove("playing");
  playButton.style.display = "flex";
  pauseButton.style.display = "none";
});

// on video completion
video.addEventListener("ended", () => {
  video.classList.remove("playing");
  playButton.style.display = "flex";
  pauseButton.style.display = "none";
});

// when user-click on screen anywhere
let hasStarted = false;

// click anywhere on page
document.addEventListener("click", () => {
  if (!hasStarted) {
    video.play();
    video.classList.add("playing");

    playButton.style.display = "none";
    pauseButton.style.display = "flex";

    hasStarted = true; // only run once
  }
});
