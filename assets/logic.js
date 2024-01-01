const startButton = document.getElementById("start");
const questionsDiv = document.getElementById("questions");
const choicesUl = document.getElementById("choices");
const startScreen = document.getElementById("start-screen")
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


function startQuiz() {
    startButton.classList.add("hide");//Hide start button and display questions
    startScreen.classList.add("hide");
    questionsDiv.classList.remove("hide");


    displayQuestion();
} 

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-title").textContent = currentQuestion.question;
    choicesUl.innerHTML = "";

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        const choice = currentQuestion.choices[i];
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", function () {
            checkAnswer(choice, currentQuestion.correctAnswer);
        });
        choicesUl.appendChild(li);
    }
}

//finction to check correct answer
function checkAnswer(selectedAnswer, correctAnswer){
    if (selectedAnswer === correctAnswer) {
        feedbackDiv.textContent = "Correct!";
    } else {
        feedbackDiv.textContent = "Wrong! -10 seconds";
        timeLeft -= 10;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    questionsDiv.classList.add("hide");
    endScreenDiv.classList.remove("hide");

    const finalScore = Math.max(0, timeLeft); //ensure the final score is non-negative
    finalScoreSpan.textContent = finalScore;

    //Store the correct final score in localStorage
    localStorage.setItem("finalScore", finalScore.toString());
}

function submitScore() {
    const intials = initialsInput.value.trim();
    const finalScore = parseInt(localStorage)
}