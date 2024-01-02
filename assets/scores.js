document.addEventListener("DOMContentLoaded", function () {
    // Retrieve scores from localStorage
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Get the elemnt where you want to display high scores
    const highScoresList = document.getElementById("highscores");

    //Display each high score in the list
    highScores.forEach((score, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${index + 1}. ${score.initials}: ${score.score}`;
      highScoresList.appendChild(listItem);  
    });
})