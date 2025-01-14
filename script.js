// Initialize global variables for user inputs
let technicLevel = 0;
let speedLevel = 0;

// Dynamically create buttons for skill and speed selection
function createButtons(containerId, callback) {
    const container = document.getElementById(containerId);
    for (let i = 1; i <= 10; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = () => callback(i); // Pass the selected value
        container.appendChild(button);
    }
}

// Navigate from Page 1 to Page 2
function selectTechnic(level) {
    technicLevel = level; // Store selected technical skill level
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
}

// Navigate from Page 2 to Page 3 and display recommendation
function selectSpeed(level) {
    speedLevel = level; // Store selected speed level
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');
    calculateRecommendation();
}

// Mock logic to determine the player's recommended position
function calculateRecommendation() {
    const recommendationElement = document.getElementById('recommendation');
    let position = 'Goalkeeper'; // Default position
    if (technicLevel >= 8 && speedLevel >= 8) {
        position = 'Forward';
    } else if (technicLevel >= 6) {
        position = 'Midfielder';
    } else if (speedLevel >= 6) {
        position = 'Defender';
    }
    recommendationElement.textContent = `Position: ${position}`;
}

// Restart the app from the beginning
function restartApp() {
    technicLevel = 0;
    speedLevel = 0;
    document.getElementById('page3').classList.add('hidden');
    document.getElementById('page1').classList.remove('hidden');
}

// Initialize buttons on Page 1 and Page 2
createButtons('technicButtons', selectTechnic);
createButtons('speedButtons', selectSpeed);
