// Page navigation
const startBtn = document.getElementById('startBtn');
const homepage = document.getElementById('homepage');
const dashboard = document.getElementById('dashboard');

startBtn.addEventListener('click', () => {
    homepage.style.display = 'none';
    dashboard.style.display = 'block';
});

// Chatbox logic
const chatDisplay = document.getElementById('chatDisplay');
const userInput = document.getElementById('userInput');
const suggestionsList = document.getElementById('suggestionsList');

function sendMessage() {
    const message = userInput.value;
    if(message.trim() === '') return;

    // Display user message
    const userMsg = document.createElement('div');
    userMsg.textContent = "You: " + message;
    chatDisplay.appendChild(userMsg);

    // Simple AI response
    const aiMsg = document.createElement('div');
    if(message.toLowerCase().includes('stress')) {
        aiMsg.textContent = "MAITRI: Try a 5-minute deep breathing exercise!";
    } else if(message.toLowerCase().includes('joke')) {
        aiMsg.textContent = "MAITRI: Why did the astronaut break up with his girlfriend? He needed space!";
    } else {
        aiMsg.textContent = "MAITRI: Stay positive! Keep smiling :)";
    }
    chatDisplay.appendChild(aiMsg);

    // Clear input
    userInput.value = '';
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

// Simulate vitals
const heartRate = document.getElementById('heartRate');
const oxygenLevel = document.getElementById('oxygenLevel');

function simulateVitals() {
    const hr = Math.floor(Math.random() * (130 - 60) + 60);
    const oxy = Math.floor(Math.random() * (100 - 90) + 90);

    heartRate.textContent = hr;
    oxygenLevel.textContent = oxy;

    if(hr > 100) {
        addSuggestion("Your heart rate is high. Do a 5-minute breathing exercise.");
    }
    if(oxy < 94) {
        addSuggestion("Oxygen low! Perform light stretching & deep breaths.");
    }
}

function addSuggestion(text) {
    const li = document.createElement('li');
    li.textContent = text;
    suggestionsList.appendChild(li);
}


