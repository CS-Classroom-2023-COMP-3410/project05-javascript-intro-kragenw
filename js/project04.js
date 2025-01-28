const quizData = [
    {
        question: "What is the largest species of shark?",
        options: ["Great White Shark", "Whale Shark", "Hammerhead Shark", "Tiger Shark"],
        answer: "Whale Shark"
    },
    {
        question: "Which was the name of the shark in Jaws?",
        options: ["Bruce", "Jaws", "Sharky", "Fins"],
        answer: "Bruce"
    },
    {
        question: "How old was the oldest shark ever recorded?",
        options: ["200 years", "400 years", "500 years", "600 years"],
        answer: "400 years"
    },
    {
        question: "What is the smallest species of shark?",
        options: ["Great White Shark", "Whale Shark", "Hammerhead Shark", "Dwarf Lantern Shark"],
        answer: "Dwarf Lantern Shark"
    },
    {
        question: "Which shark is known as the 'trash can of the sea'?",
        options: ["Great White Shark", "Whale Shark", "Hammerhead Shark", "Tiger Shark"],
        answer: "Tiger Shark"
    },
    {
        question: "Which shark has been known to swim up rivers?",
        options: ["Great White Shark", "Whale Shark", "Bull Shark", "Tiger Shark"],
        answer: "Bull Shark"
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const buttonContainer = document.getElementById('button-container');

let currentQuestionIndex = 0;
let score = 0;
const userAnswers = [];

function showQuestion(index) {
    const questionObj = quizData[index];

    const options = questionObj.options.map(option => 
        `<label><input type="radio" name="question" value="${option}"> ${option}</label>`
    ).join('');

    quizContainer.innerHTML = `
        <div class="question">${questionObj.question}</div>
        <div class="options">${options}</div>
        <button id="submit-question">Submit Question</button>
    `;

    document.getElementById('submit-question').addEventListener('click', () => handleAnswer(index));
}

function handleAnswer(index) {
    const selectedOption = document.querySelector(`input[name=question]:checked`);

    if (!selectedOption) {
        alert('Please select an answer.');
        return;
    }

    const userAnswer = selectedOption.value;
    userAnswers[index] = userAnswer;

    const isCorrect = userAnswer === quizData[index].answer;

    if (isCorrect) {
        score++;
        quizContainer.innerHTML = `<p>Correct! The answer is ${quizData[index].answer}.</p>`;
    } else {
        quizContainer.innerHTML = `<p>Incorrect. The correct answer is ${quizData[index].answer}.</p>`;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion(currentQuestionIndex);
        } else {
            showSummary();
        }
    }, 2000);
}

function showSummary() {
    let output = '';
    quizData.forEach((questionObj, index) => {
        const userAnswer = userAnswers[index] || "No answer selected";
        const isCorrect = userAnswer === questionObj.answer;
        output += `<p>Question ${index + 1}: You answered ${userAnswer}. ${isCorrect ? 'Correct!' : `Incorrect. The correct answer is ${questionObj.answer}.`}</p>`;
    });
    output += `<p>Your score was ${score}/${quizData.length}</p>`;

    quizContainer.innerHTML = output;
    const resetButton = document.createElement('button');
    resetButton.innerText = 'Retake Quiz';
    resetButton.addEventListener('click', resetQuiz);
    quizContainer.appendChild(resetButton);
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers.length = 0;
    quizContainer.innerHTML = '';
    showQuestion(currentQuestionIndex);
}

showQuestion(currentQuestionIndex);
