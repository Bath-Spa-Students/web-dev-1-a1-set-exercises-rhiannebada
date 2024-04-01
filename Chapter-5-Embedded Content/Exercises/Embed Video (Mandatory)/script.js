    
    document.addEventListener("DOMContentLoaded", function() {
    
    var video = document.getElementById("musicVideo");
    var playButton = document.getElementById("playButton");
    var posterImage = document.getElementById("videoPoster");

    function togglePlayPause() {
        if (video.paused || video.ended) {
            video.play();
            playButton.textContent = "❚❚";
            posterImage.style.display = "none";
        } else {
            video.pause();
            playButton.textContent = "▶";
            posterImage.style.display = "block";
        }
    }

    playButton.addEventListener("click", togglePlayPause);
});