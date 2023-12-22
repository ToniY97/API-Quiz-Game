const startButton = document.getElementById("start");
const questionsDiv = document.getElementById("questions");
const choicesUl = document.getElementById("choices");
const endScreenDiv = document.getElementById("end-screen");
const finalScoreSpan = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const timerSpan = document.getElementById("time");
const feedbackDiv = document.getElementById("feedback");

const questions = [
    {
        question: "What is the name of the heaviest dinosaur? (estimated weight 60-124 tonnes)",
        choices: ["Argentinosaurus, Gorgosaurus, Tyrannosaurus rex, Stegosaurus"],
        correctAnswer: "Argentinosaurus",
    },
];

let currentQuestionIndex = 0;
let timeLeft = 60;
let timerInterval;

startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submitScore);

function startQuiz() {
    startButton.classList.add("hide");//Hide start button and display questions
    questionsDiv.classList.remove("hide");
    timerInterval = setInterval(function () {
        timeLeft--;
        timerSpan.textContent = timeLeft;
    
        // function to decrement timeLeft every second
        if (timeLeft <= 0 || currentQuestionIndex >= question.length) {
            ;
        }
    }, 1000);
    displayQuestion();
} 

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-title").textContent = currentQuestion;

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        const choice = currentQuestion.choices[i];
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", function () {
            checkAnswer(choice, currentQuestion.correctAnswer);
        });
    }
}