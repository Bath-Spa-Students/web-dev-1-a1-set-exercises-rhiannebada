document.addEventListener("DOMContentLoaded", function() { //event listener ensures js code runs after html has been loaded
    let currentAudio = null; //keeps track of the current audio
    const currentAudioTitle = document.getElementById('current-audio-title');

    //loop in all soundboard containers on the page
    document.querySelectorAll(".soundboard-container").forEach (container => {
        container.addEventListener("click", function() {     
        const audio = this.querySelector("audio"); //gets the audio inside the clicked container
            
                //pauses and reset audio playback position to start once another audio is clicked and currently playing
                if (currentAudio && currentAudio !== audio) {
                currentAudio.pause(); //pauses currently playing audio
                currentAudio.currentTime = 0; //resets playback position
            }
            
                //plays new clicked audio if audio is different from the previous current audio
                if (currentAudio !== audio || audio.paused) {
                    audio.play(); //plays clicked audio
                
                } else { //pauses and resets playback position to start if new clicked audio is the same as the previous current audio playing
                    audio.pause(); //pauses clicked audio
                    audio.currentTime = 0; //resets playback position
            }

            currentAudio = audio; //updates currentAudio variable to the clicked audio
            
            currentAudioTitle.textContent = audio.parentNode.querySelector('p').textContent; //displays title of current playing audio

        });
    });

    //text to speech function
    const textToSpeechInput = document.getElementById("text-to-speech-input"); //reference to the textarea for text input
    const textToSpeechButton = document.getElementById("text-to-speech-button"); //reference to the button to trigger text-to-speech

    //adds event listener to text-to-speech button
    textToSpeechButton.addEventListener("click", function() {
        const text = textToSpeechInput.value; //gets the text/input from the textarea
        const speech = new SpeechSynthesisUtterance(text); //web speech API interface that controls voice, pitch, rate, and volume; converts the text entered in textarea when "convert to sound" button is clicked
        speechSynthesis.speak(speech); //speaks the text
    });
});
