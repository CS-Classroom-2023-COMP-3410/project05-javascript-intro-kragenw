const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const resetButton = document.getElementById('reset');
const progressBar = document.getElementById('progress-bar');

const story = {
    start: {
        text: "You're swimming in the vast ocean. Do you want to explore a shipwreck, hunt for fish, or join a group of sharks?",
        choices: [
            { text: "Explore the shipwreck", next: "shipwreck" },
            { text: "Hunt for fish", next: "hunt" },
            { text: "Join the sharks", next: "group" }
        ],
        progress: 10
    },
    shipwreck: {
        text: "You found a sunken ship! Do you want to enter or swim around?",
        choices: [
            { text: "Enter", next: "treasure" },
            { text: "Swim around", next: "shark_attack" }
        ],
        progress: 20
    },
    hunt: {
        text: "You caught some fish! But a bigger shark is nearby. Fight or flee?",
        choices: [
            { text: "Fight", next: "win" },
            { text: "Flee", next: "safe" }
        ],
        progress: 20
    },
    group: {
        text: "You joined a group of sharks. They invite you to their feeding grounds or suggest exploring together. What do you do?",
        choices: [
            { text: "Go to the feeding grounds", next: "feeding" },
            { text: "Explore together", next: "explore_group" }
        ],
        progress: 20
    },
    treasure: {
        text: "You found treasure! But there’s a mysterious chest. Open it or leave?",
        choices: [
            { text: "Open the chest", next: "curse" },
            { text: "Leave it", next: "safe_return" }
        ],
        progress: 40
    },
    shark_attack: {
        text: "A giant shark attacked you! Game over.",
        choices: [],
        progress: 0
    },
    win: {
        text: "You defeated the shark and became the king of the sea! Other sharks now look up to you.",
        choices: [
            { text: "Lead your new followers", next: "leader" },
            { text: "Enjoy your reign", next: "peace" }
        ],
        progress: 60
    },
    safe: {
        text: "You safely escaped and lived another day. Do you want to hunt again or rest?",
        choices: [
            { text: "Hunt again", next: "big_prey" },
            { text: "Rest", next: "reef" }
        ],
        progress: 40
    },
    feeding: {
        text: "At the feeding grounds, you encounter an enormous whale carcass. Share or compete for food?",
        choices: [
            { text: "Share", next: "ally" },
            { text: "Compete", next: "fight_group" }
        ],
        progress: 30
    },
    explore_group: {
        text: "Exploring together, you discover a hidden trench. Enter it or continue exploring?",
        choices: [
            { text: "Enter the trench", next: "trench" },
            { text: "Keep exploring", next: "coral" }
        ],
        progress: 30
    },
    curse: {
        text: "The chest was cursed! You are now trapped in an endless loop of swimming in circles. Game over.",
        choices: [],
        progress: 0
    },
    safe_return: {
        text: "You left the treasure and returned to safety, wiser for your choice.",
        choices: [],
        progress: 80
    },
    leader: {
        text: "As a leader, you organize the sharks to protect the reef. You are respected and powerful.",
        choices: [],
        progress: 100
    },
    peace: {
        text: "You enjoy a peaceful reign, living a long and happy life as the king of the sea.",
        choices: [],
        progress: 100
    },
    big_prey: {
        text: "You find a school of tuna and feast like never before! Congratulations!",
        choices: [],
        progress: 80
    },
    reef: {
        text: "You find a peaceful coral reef and rest, feeling rejuvenated.",
        choices: [],
        progress: 70
    },
    ally: {
        text: "You made a new ally who promises to help you in future adventures.",
        choices: [],
        progress: 50
    },
    fight_group: {
        text: "You fought with your group and ended up injured. Be careful next time!",
        choices: [],
        progress: 30
    },
    trench: {
        text: "The trench led to an ancient underwater city! Explore further or leave?",
        choices: [
            { text: "Explore further", next: "city_treasure" },
            { text: "Leave", next: "back_safe" }
        ],
        progress: 50
    },
    coral: {
        text: "You found a beautiful coral garden and made some new friends among the marine life.",
        choices: [],
        progress: 60
    },
    city_treasure: {
        text: "You discovered ancient treasures and secrets of the ocean! You are now a legend.",
        choices: [],
        progress: 100
    },
    back_safe: {
        text: "You returned to the ocean safely, knowing some mysteries are better left unexplored.",
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