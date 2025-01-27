const textDisplay = document.getElementById('text-display');
const textInput = document.getElementById('text-input');
const results = document.getElementById('results');
const finalResults = document.getElementById('final-results');
const trainer = document.getElementById('trainer');
const summaryScreen = document.getElementById('summary-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

let targetText = '';
let startTime;
let totalTyped = 0;
let errors = 0;

const difficultyLevels = {
    easy: 'hello world',
    medium: 'practice makes perfect',
    hard: 'the quick brown fox jumps over the lazy dog'
};

startBtn.addEventListener('click', () => {
    const difficulty = document.getElementById('difficulty').value;
    targetText = difficultyLevels[difficulty];
    textDisplay.innerHTML = targetText.split('').map(char => `<span>${char}</span>`).join('');
    textInput.value = '';
    textInput.focus();
    trainer.style.display = 'block';
    startTime = new Date().getTime();
});

textInput.addEventListener('input', () => {
    const inputText = textInput.value;
    totalTyped++;
    let correct = true;
    
    [...targetText].forEach((char, index) => {
        const span = textDisplay.children[index];
        if (inputText[index] === char) {
            span.classList.add('highlight');
            span.classList.remove('error');
        } else if (inputText[index]) {
            span.classList.add('error');
            span.classList.remove('highlight');
            correct = false;
            errors++;
        } else {
            span.classList.remove('highlight', 'error');
        }
    });

    if (inputText === targetText) {
        const timeTaken = (new Date().getTime() - startTime) / 1000;
        const accuracy = Math.max(0, (targetText.length - errors) / totalTyped * 100).toFixed(2);
        finalResults.innerHTML = `Time: ${timeTaken}s | Accuracy: ${accuracy}%`;
        trainer.style.display = 'none';
        summaryScreen.style.display = 'block';
    }
});

restartBtn.addEventListener('click', () => {
    trainer.style.display = 'none';
    summaryScreen.style.display = 'none';
    totalTyped = 0;
    errors = 0;
    results.innerHTML = '';
});
