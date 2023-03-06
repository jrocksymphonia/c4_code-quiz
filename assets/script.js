var timer = document.querySelector(".timer");
var secondsLeft = 75;
var startingPage = document.querySelector("#main-page");
var mainElement = document.querySelector("main");
var startQuizButton = document.querySelector("#start-quiz");


var questions = [
    {
        title: "Commonly used data types DO NOT include:", 
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"], 
        answer: "3. alerts",
    }, 
    {
        title: "The condition in an if / else statement is enclosed within ____.", 
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "2. curly brackets",
    }, 
    {
        title: "Arrays in JavaScript can be used to store _____.", 
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above",
    },
    {
        title: "String values must be enclosed within _____ when being assigned to variables.", 
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes",
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        choices: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"],
        answer: "4. console.log",
    }
];



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

    // TODO:
    // get the current question object from the above array. 
    var currentQuestion;


    //  TODO: update the dom with the question


    // TODO: Loop over the choices in the current question:
    
    //question 1 is appended here 
    var question1 = document.createElement("section");

    var q1Title = document.createElement("h2");
    var answers = document.createElement("div");

    //forloop this
    var answer1 = document.createElement("button");
    var answer2 = document.createElement("button");
    var answer3 = document.createElement("button");
    var answer4 = document.createElement("button");



    //text component of the page
    q1Title.textContent = "Commonly used data types DO NOT include:";
    answer1.textContent = "1. strings";
    answer2.textContent = "2. booleans";
    answer3.textContent = "3. alerts";//this is the right answer
    answer4.textContent = "4. numbers";

    //document.body.main.section.div
    document.body.children[1].appendChild(question1);
    document.body.children[1].children[0].appendChild(q1Title);
    document.body.children[1].children[0].appendChild(answers);
    document.body.children[1].children[0].children[1].appendChild(answer1);
    document.body.children[1].children[0].children[1].appendChild(answer2);
    document.body.children[1].children[0].children[1].appendChild(answer3);
    document.body.children[1].children[0].children[1].appendChild(answer4);

   //call next question with right or wrong answer


}

function question2() {
    //question 2 is appended here 
    var question1 = document.createElement("section");

    var q1Title = document.createElement("h2");
    var answers = document.createElement("div");

    var answer1 = document.createElement("button");
    var answer2 = document.createElement("button");
    var answer3 = document.createElement("button");
    var answer4 = document.createElement("button");

    //text component of the page
    q1Title.textContent = "The condition in an if / else statement is enclosed within___.";
    answer1.textContent = "1. quotes";
    answer2.textContent = "2. curly brackets";//this is the right answer
    answer3.textContent = "3. parentheses";
    answer4.textContent = "4. square brackets";

    //document.body.main.section.div
    document.body.children[1].appendChild(question1);
    document.body.children[1].children[0].appendChild(q1Title);
    document.body.children[1].children[0].appendChild(answers);
    document.body.children[1].children[0].children[1].appendChild(answer1);
    document.body.children[1].children[0].children[1].appendChild(answer2);
    document.body.children[1].children[0].children[1].appendChild(answer3);
    document.body.children[1].children[0].children[1].appendChild(answer4);

   //call next question with right or wrong answer


}



function answers() {

    // if ()

}