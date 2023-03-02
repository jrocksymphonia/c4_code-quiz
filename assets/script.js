var timer = document.querySelector(".timer");
var secondsLeft = 75;
var startingPage = document.querySelector("#main-page");
var mainElement = document.querySelector("main");
var startQuizButton = document.querySelector("#start-quiz");

// timer.setAttribute("style", "float: right;");

startQuizButton.addEventListener("click", function(event){
    event.preventDefault();

    //starting page is removed
    startingPage.remove();

    //timer starts @75 seconds
    startTimer();
    question1();

})

function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Time: " + secondsLeft;
  
    //   if (timerCount >= 0) {
    //     // Tests if win condition is met
    //     if (isWin && timerCount > 0) {
    //       // Clears interval and stops timer
    //       clearInterval(timerInterval);
    //       winGame();
    //     }
    //   }
    //   // Tests if time has run out
    //   if (timerCount === 0) {
    //     // Clears interval
    //     clearInterval(timerInterval);
    //     loseGame();
    //   }
  
    }, 1000);
}

function question1() {
    //question 1 is appended here 
    var question1 = document.createElement("div");
    var q1Title = document.createElement("h2");
    
    var answer1 = document.createElement("button");
    var answer2 = document.createElement("button");
    var answer3 = document.createElement("button");
    var answer4 = document.createElement("button");

    q1Title.textContent = "Commonly used data types DO NOT include:";
    answer1.textContent = "1. strings";
    answer2.textContent = "2. booleans";
    answer3.textContent = "3. alerts";
    answer4.textContent = "4. numbers";

    document.body.children[1].appendChild(question1);
    document.body.children[1].children[0].appendChild(q1Title);
    document.body.children[1].children[0].appendChild(answer1);
    document.body.children[1].children[0].appendChild(answer2);
    document.body.children[1].children[0].appendChild(answer3);
    document.body.children[1].children[0].appendChild(answer4);



}

