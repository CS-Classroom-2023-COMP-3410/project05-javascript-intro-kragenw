const cardsArray = ['S', 'S', 'H', 'H', 'A', 'A', 'R', 'R', 'K', 'K', 'B', 'B', 'I', 'I', 'G', 'G'];
let moves = 0;
let timer;
let seconds = 0;
let flippedCards = [];
let matchedPairs = 0;

function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
}

function startGame() {
    const grid = document.getElementById('game-grid');
    grid.innerHTML = '';
    const shuffledCards = shuffle(cardsArray);
    shuffledCards.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    });
    moves = 0;
    matchedPairs = 0;
    document.getElementById('move-count').textContent = moves;
    clearInterval(timer);
    seconds = 0;
    document.getElementById('time-count').textContent = seconds;
    timer = setInterval(() => {
        seconds++;
        document.getElementById('time-count').textContent = seconds;
    }, 1000);
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        this.textContent = this.dataset.value;
        flippedCards.push(this);
        if (flippedCards.length === 2) {
            moves++;
            document.getElementById('move-count').textContent = moves;
            checkMatch();
        }
    }
}

function checkMatch() {
    const [first, second] = flippedCards;
    if (first.dataset.value === second.dataset.value) {
        flippedCards = [];
        matchedPairs++;
        if (matchedPairs === cardsArray.length / 2) {
            clearInterval(timer);
        }
    } else {
        setTimeout(() => {
            first.classList.remove('flipped');
            second.classList.remove('flipped');
            first.textContent = '';
            second.textContent = '';
            flippedCards = [];
        }, 1000);
    }
}

document.getElementById('restart-btn').addEventListener('click', startGame);

startGame();