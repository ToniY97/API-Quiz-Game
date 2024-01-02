document.addEventListener("DOMContentLoaded", function () {
    // Retrieve scores from localStorage
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    
    // sort high scores in descending order
    highScores.sort((a, b) => b.score - a.score);
    // Get the elemnt from where to display high scores
    const highScoresList = document.getElementById("highscores");

    //Display each high score in the list
    highScores.forEach((score, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${score.initials}: ${score.score}`;
      highScoresList.appendChild(listItem);  
    });
  
    
})