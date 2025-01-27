const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    const output = [];

    quizData.forEach((questionObj, index) => {
        const options = questionObj.options.map(option => 
            `<label><input type="radio" name="question${index}" value="${option}"> ${option}</label>`
        ).join('');
        output.push(`<div class="question">${questionObj.question}</div><div class="options">${options}</div>`);
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    let score = 0;
    let output = '';

    quizData.forEach((questionObj, index) => {
        const selectedOption = document.querySelector(`input[name=question${index}]:checked`);
        if (selectedOption) {
            if (selectedOption.value === questionObj.answer) {
                score++;
                output += `<p>Question ${index + 1}: You answered ${selectedOption.value}. Correct!</p>`;
            } else {
                output += `<p>Question ${index + 1}: You answered ${selectedOption.value}. Incorrect. The correct answer is ${questionObj.answer}.</p>`;
            }
        } else {
            output += `<p>Question ${index + 1}: No answer selected. The correct answer is ${questionObj.answer}.</p>`;
        }
    });

    output += `<p>Your score was ${score}/${quizData.length}</p>`;
    resultsContainer.innerHTML = output;
}

function resetQuiz() {
    quizContainer.innerHTML = '';
    resultsContainer.innerHTML = '';
    buildQuiz();
}

submitButton.addEventListener('click', showResults);
buildQuiz();

const resetButton = document.createElement('button');
resetButton.innerText = 'Reset Quiz';
resetButton.addEventListener('click', resetQuiz);
document.body.appendChild(resetButton);
