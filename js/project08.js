const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const resetButton = document.getElementById('reset');
const progressBar = document.getElementById('progress-bar');

const story = {
    start: {
        text: "You're swimming in the vast ocean. Do you want to explore a shipwreck or hunt for fish?",
        choices: [
            { text: "Explore the shipwreck", next: "shipwreck" },
            { text: "Hunt for fish", next: "hunt" }
        ],
        progress: 10
    },
    shipwreck: {
        text: "You found a sunken ship! Do you want to enter or swim around?",
        choices: [
            { text: "Enter", next: "treasure" },
            { text: "Swim around", next: "shark_attack" }
        ],
        progress: 40
    },
    hunt: {
        text: "You caught some fish! But a bigger shark is nearby. Fight or flee?",
        choices: [
            { text: "Fight", next: "win" },
            { text: "Flee", next: "safe" }
        ],
        progress: 40
    },
    treasure: {
        text: "You found treasure! Congratulations!",
        choices: [],
        progress: 100
    },
    shark_attack: {
        text: "A giant shark attacked you! Game over.",
        choices: [],
        progress: 0
    },
    win: {
        text: "You defeated the shark and became the king of the sea!",
        choices: [],
        progress: 100
    },
    safe: {
        text: "You safely escaped and lived another day.",
        choices: [],
        progress: 70
    }
};

function startGame() {
    const savedState = localStorage.getItem('sharkAdventureState');
    if (savedState) {
        showStory(JSON.parse(savedState));
    } else {
        showStory(story.start);
    }
}

function showStory(node) {
    storyElement.textContent = node.text;
    choicesElement.innerHTML = '';
    progressBar.style.width = node.progress + '%';
    localStorage.setItem('sharkAdventureState', JSON.stringify(node));
    
    node.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => showStory(story[choice.next]);
        choicesElement.appendChild(button);
    });
}

resetButton.addEventListener('click', () => {
    localStorage.removeItem('sharkAdventureState');
    startGame();
});

startGame();
