var num = localStorage.getItem('number');
num = parseInt(num);
var question = document.getElementById('question');
var options = Array.from(document.getElementsByClassName('option-text'));
var scoreText = document.getElementById('score-text');
var questionCounterText = document.getElementById('question-counter-text');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let correct = 0;
let _false = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What is HTML?',
        option1: 'Programming Language',
        option2: 'Forign Language',
        option3: 'Markup Language',
        option4: 'Not a Language',
        answer: 3,
    },
    {
        question: 'What is 2 + 3 * 52?',
        option1: '158',
        option2: '260',
        option3: '159',
        answer: 1,
    },
    {
        question: 'CPU is a storage device?',
        option1: 'True',
        option2: 'Flase',
        option3: 'None',
        answer: 2,
    },
    {
        question: 'Elements of html?',
        option1: 'h1, p, br',
        option2: 'if, for, else',
        option3: 'main, function, array',
        answer: 1,
    },
];

const SCORE_POINT = (100 / num);
const MAX_QUESTIONS = num;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    correct = 0;
    _false = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {  
        localStorage.setItem("score", score);
        localStorage.setItem("correct", correct);
        localStorage.setItem("_false", _false);
        
        return window.location.assign('/result.html');
    }

    questionCounter++;
    questionCounterText.innerText = `Question: ${questionCounter}/${MAX_QUESTIONS}`;

    const quesIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[quesIndex];
    question.innerText = currentQuestion.question;

    options.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];
    });

    availableQuestions.splice(quesIndex, 1);

    acceptingAnswers = true;
}

options.forEach(option => {
    option.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false;
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINT);
            correct++;
        } else {
            _false++;
        }

        selectedOption.parentElement.classList.remove('option-box-default');
        selectedOption.parentElement.classList.add(classToApply);

        options[currentQuestion.answer - 1].parentElement.classList.remove('option-box-default');
        options[currentQuestion.answer - 1].parentElement.classList.add('correct');
        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply);
            selectedOption.parentElement.classList.add('option-box-default');
            options[currentQuestion.answer - 1].parentElement.classList.remove('correct');
            options[currentQuestion.answer - 1].parentElement.classList.add('option-box-default');
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score +=num
    scoreText.innerText = score.toFixed(2);
}

startQuiz();