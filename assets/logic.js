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
        question: "What is the name of the heaviest dinosaur? (estimated weight 60-124 tonnes)?",
        choices: ["Argentinosaurus", "Gorgosaurus", "Tyrannosaurus rex", "Stegosaurus"],
        correctAnswer: "Argentinosaurus",
    },
    {
        question: " What's the most amount of money dinosaur fossils have sold for at auction?",
        choices: ["1 million", "4 million", "8.3 million", "4.3 million"],
        correctAnswer: "8.3 million",
    },
    {
        question: "Which dinosaur's name means 'Tyrant Lizard'?",
        choices: ["Pterodactyl", "Gorgosaurus", "Spinosaurus", "Tyrannosaurus"],
        correctAnswer: "Tyrannosaurus",
    },
    {
        question: "How many horns did Triceratops have?",
        choices: ["1", "2", "3", "4"],
        correctAnswer: "3",
    },
    {
        question: "The name Pachycephalosaurus means what?",
        choices: ["Tyrant Lizard", "Thick-Headed Lizard", "Big Lizard", "Big-headed Lizard"],
        correctAnswer: "Thick-Headed Lizard",
    },
];

let currentQuestionIndex = 0;
let timeLeft = 60;
let timerInterval;

startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submitScore);

function startQuiz() {
    startButton.classList.add("hide");//Hide start button and display questions
    startScreen.classList.add("hide");
    questionsDiv.classList.remove("hide");
    timerInterval = setInterval(function () {
        timeLeft--;
        timerSpan.textContent = timeLeft;

        if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
            endQuiz();
        }
    }, 1000);

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

//function to check correct answer
function checkAnswer(selectedAnswer, correctAnswer) {
    const feedbackDiv = document.getElementById("feedback");

    // Unhide the feedback element
    feedbackDiv.classList.remove("hide");
  
    if (selectedAnswer === correctAnswer) {
      feedbackDiv.textContent = "Correct!";
      setTimeout(function () {
        feedbackDiv.textContent = ""; // to clear the feedback after a short delay
      }, 1000); // to adjust the delay time as needed
    
    } else {
      feedbackDiv.textContent = "Wrong! -10 seconds";
      timeLeft -= 10;
      setTimeout(function () {
        feedbackDiv.textContent = ""; 
      }, 1000); 
    
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
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
    const initials = initialsInput.value.trim();
    const finalScore = parseInt(localStorage.getItem("finalScore")) || 0;

    if (initials !== "") {
        //Store the score and initials in localStorage
        const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        const newScore = { initials: initials, score: finalScore };
        highScores.push(newScore);
        localStorage.setItem("highScores", JSON.stringify(highScores));

        //Redirect to high scores page
        window.location.href = "highscores.html";
    }
}