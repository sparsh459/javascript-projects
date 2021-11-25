//  selecting the DOM elements
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

// video play and pause
btn.addEventListener("click", function () {
    // if the third span doesn't have slide class than add it
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } 
  // else remove it
  else {
    btn.classList.remove("slide");
    video.play();
  }
});


// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});