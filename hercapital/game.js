const questions = [
    {
        question: "What is a budget?",
        options: ["A plan for saving and spending money", "A bank account", "A credit card", "A loan"],
        answer: "A plan for saving and spending money"
    },
    {
        question: "What is interest?",
        options: ["A fee paid for borrowing money", "A type of savings account", "A loan", "A budgeting tool"],
        answer: "A fee paid for borrowing money"
    },
    {
        question: "What is a loan?",
        options: ["Borrowed money that must be repaid", "A savings account", "Interest on savings", "A budget plan"],
        answer: "Borrowed money that must be repaid"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Clear previous options

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option';
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('next-btn').style.display = 'none';
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('quiz-container').innerHTML = <p>Your score is ${score} out of ${questions.length}</p>;
}

window.onload = function() {
    loadQuestion();
    document.getElementById('next-btn').style.display = 'none';
}