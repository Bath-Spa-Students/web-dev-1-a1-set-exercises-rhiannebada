const colors = []; //array to hold randomly generated colours
let lives; //tracks remaining lives
let score = 0; // initialise score variable and sets it to 0
let incorrectCount; //tracks incorrect guesses

for (let i = 0; i < 30; i++) { //generates random colors
    const red = Math.floor(Math.random() * 256); //random red value (0-255)
    const green = Math.floor(Math.random() * 256); //random green value (0-255)
    const blue = Math.floor(Math.random() * 256); //random blue value (0-255)
    colors.push({ red, green, blue }); //adds generated color oobject to the colours array
}

//returns a random colour 
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
//generates RGB text from colour object
function generateRGBText(color) {
    return `RGB(${color.red}, ${color.green}, ${color.blue})`;
}

//shuffles the elements in an array
function shuffleArray(array) { 
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; //swaps elements
    }
}

//function to display number of lives left
function displayLives() {
    const livesDisplay = document.getElementById('lives');
    livesDisplay.textContent = `Lives: ${lives}`; //updates lives display with remaining lives
}

//function to restart the game
function restartGame() {
    document.getElementById('game-container').style.display = 'block'; //shows game container
    document.getElementById('game-over').style.display = 'none'; //hides game over message
    lives = 2; //resets lives to 2
    score = 0; //resets score to 0
    incorrectCount = 0; //resets incorrect count
    startGame(); //start the game
}

function displayOptions(correctColor) { //displays colour options for player selection
    const optionsContainer = document.getElementById('options'); //get the container for options
    optionsContainer.innerHTML = ''; //deletes existing options

    const options = [correctColor]; //initialize options arrat with correct colour
    while (options.length < 3) { //ensures there are 3 colour options including the correct answer
        const randomColor = colors[Math.floor(Math.random() * colors.length)]; //get random colour
        //checks if random colour is not already in the array
        if (!options.some(option => option.red === randomColor.red && option.green === randomColor.green && option.blue === randomColor.blue)) {
            options.push(randomColor); //add random colour to array
        }
    }

    shuffleArray(options); //shuffle options array

    options.forEach((color) => {
        const optionDiv = document.createElement('div'); //divelement for the option
        optionDiv.classList.add('option');
        optionDiv.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`; //sets background colour based on color values
        optionDiv.onclick = () => checkAnswer(color, correctColor); //checks answer
        optionsContainer.appendChild(optionDiv);
    });
}

//check if selected colour matches correct colour
function checkAnswer(selectedColor, correctColor) { 
    const feedback = document.getElementById('feedback'); //get the feedback element
    if (selectedColor.red === correctColor.red &&
        selectedColor.green === correctColor.green &&
        selectedColor.blue === correctColor.blue) {
        score++; // Increment score for correct answer
        feedback.textContent = 'Correct!';
        incorrectCount = 0; // Reset incorrect count on correct answer
        setTimeout(startGame, 1000); // Proceed to next round after 1 second
    } else {
        lives--;
        incorrectCount++;
        if (lives >= 0) {
            feedback.textContent = `Incorrect! Lives left: ${lives}`;
            displayLives(); // Update lives display
        }

        if (lives === 0) { // End game if no lives left
            endGame();
        }
    }
}

//function to end the game
function endGame() {
    const feedback = document.getElementById('feedback');
    feedback.textContent = `Game over! Your final score: ${score}`; //displays game over message with the final score
    document.getElementById('replay-btn').style.display = 'block'; //shows play again button
    document.getElementById('end-btn').style.display = 'none'; //hides end game button
    document.getElementById('game-container').style.display = 'none'; //hides game container
    document.getElementById('game-over').style.display = 'block'; //shows game over message
    document.getElementById('final-score').textContent = score; //displays final score
}

//function to start the game
function startGame() {
    document.getElementById('game-container').style.display = 'block'; 
    lives = 2; //sets initial lives to 2
    incorrectCount = 0; //resets incorrect count
    document.getElementById('replay-btn').style.display = 'none'; //hides try again button
    document.getElementById('end-btn').style.display = 'block'; //shows end game button
    const correctColor = getRandomColor(); //gets a random color
    const rgbDisplay = document.getElementById('rgb-display');
    rgbDisplay.textContent = generateRGBText(correctColor); //RGB text for the selected colour
    displayOptions(correctColor); //color options for selected colour
    document.getElementById('feedback').textContent = ''; //clears feedback text
    displayLives(); //shows number of lives left
}

startGame(); //starts the game when the page loads
