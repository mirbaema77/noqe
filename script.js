// Initial values
let technicLevel = 0;
let speedLevel = 0;

// Create buttons dynamically
function createButtons(containerId, callback) {
    const container = document.getElementById(containerId);
    for (let i = 1; i <= 10; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = () => callback(i);
        container.appendChild(button);
    }
}

// Handle technic selection
function selectTechnic(level) {
    technicLevel = level;
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
}

// Handle speed selection
function selectSpeed(level) {
    speedLevel = level;
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');
    calculateRecommendation();
}

// Simulated model logic (Mock Random Forest logic)
function calculateRecommendation() {
    const recommendationElement = document.getElementById('recommendation');

    // Simple logic based on thresholds
    let position;
    if (technicLevel >= 8 && speedLevel >= 8) {
        position = 'Forward';
    } else if (technicLevel >= 6) {
        position = 'Midfielder';
    } else if (speedLevel >= 6) {
        position = 'Defender';
    } else {
        position = 'Goalkeeper';
    }

    recommendationElement.textContent = `Position: ${position}`;
}

// Restart the app
function restartApp() {
    technicLevel = 0;
    speedLevel = 0;
    document.getElementById('page3').classList.add('hidden');
    document.getElementById('page1').classList.remove('hidden');
}

// Initialize buttons
createButtons('technicButtons', selectTechnic);
createButtons('speedButtons', selectSpeed);