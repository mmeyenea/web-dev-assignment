const numberButtonsDiv = document.getElementById('number-buttons');
const enterButton = document.getElementById('enter-btn');
const playerDisplay = document.getElementById('player-display');
const computerDisplay = document.getElementById('computer-display');
const resultDiv = document.getElementById('result');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const overlay = document.getElementById('overlay');

let playerGuess = null;


for (let i = 0; i <= 9; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.className = 'button';
    button.onclick = function() {
        selectNumber(i);
    };
    numberButtonsDiv.appendChild(button);
}

function selectNumber(number) {
    playerGuess = number;
    enterButton.disabled = false; 
    resultDiv.textContent = `You selected: ${number}`;
}

enterButton.onclick = function() {
    const computerGuess = Math.floor(Math.random() * 10); 
    displayChoices(playerGuess, computerGuess);
    checkResult(playerGuess, computerGuess);
};

function displayChoices(player, computer) {
    playerDisplay.textContent = player;
    computerDisplay.textContent = computer;
}

function checkResult(player, computer) {
    if (player === computer) {
        showPopup("Congratulations  You win!");
    } else {
        showPopup("oops!!  You can do better");
    }
    
    enterButton.disabled = true; 
}

function showPopup(message) {
    popupMessage.textContent = message;
    popup.classList.add('show');
    overlay.style.display = 'block'; 
}

function closePopup() {
    popup.classList.remove('show');
    overlay.style.display = 'none'; 
    computerDisplay.textContent = '';
    playerDisplay.textContent = '';
}
