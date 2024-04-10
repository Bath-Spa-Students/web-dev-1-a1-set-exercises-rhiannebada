//fully loads dom content before executing code
document.addEventListener("DOMContentLoaded", function() {

//gets references to video element, play button, and poster image from html doc
var video = document.getElementById("musicVideo");
var playButton = document.getElementById("playButton");
var posterImage = document.getElementById("videoPoster");

//function to toggle between playing and pausing video when play button is clicked
function togglePlayPause() {
    if (video.paused || video.ended) { //checks if vid is paused or ended
        video.play(); //if paused or ended, play
        playButton.textContent = "❚❚"; //changes play button text content
        posterImage.style.display = "none"; //hides poster image when video starts playing
    } else {
        video.pause(); //if video is playing, pause
        playButton.textContent = "▶"; //changes play button text content
        posterImage.style.display = "block"; //shows poster image when paused
    }
}

playButton.addEventListener("click", togglePlayPause); //triggers toggleplaypause function when clicked

});