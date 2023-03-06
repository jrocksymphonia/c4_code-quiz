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

var testOver = {
    title: "All done!",
    message: "Your final score is " + "",
    enterInitials: "Enter initials: ",
};

var highscores = {
    title: "Highscores",
    entries: "",
    buttons: ["Go Back", "Clear Highscores"],
}


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

    // Get the current question object from the above array. 
    var currentQuestion = questions[0];

    //update the DOM by making and appending the elements
    var question1 = document.createElement("section");

    var qTitle = document.createElement("h2");
    var answers = document.createElement("div");

    qTitle.textContent = currentQuestion["title"];

    mainElement.appendChild(question1);
    question1.appendChild(qTitle);
    question1.appendChild(answers);

    // Loop over the choices in the current question:
    for (var i = 0; i < currentQuestion["choices"].length; i++){
        //enters question buttons into the DOM
        var currentChoices = document.createElement("button");
        currentChoices.textContent = currentQuestion.choices[i];
        currentChoices.setAttribute("value", currentQuestion.choices[i]);
        answers.appendChild(currentChoices);

        
        //makes the 4 buttons work to go to the next question and show the right/wrong answer
        currentChoices.addEventListener("click", function (event){
            event.preventDefault();
        
            console.log(event.target.value);
        
            // //call next question with right or wrong answer
            if (event.target.value === currentQuestion["answer"]) {
                console.log("Correct!");

        
            }else {
                console.log("wrong!");
            }
        
            // question 1 is removed
            question1.remove();
        
            //call the next question
            question2();
        
        });

    }
    
}

function selectAnswer(event){
    event.preventDefault();

    console.log(event.target);

    // //call next question with right or wrong answer
    // //bug: for some reason all the questions are coming out as wrong rather than one correct one
    // if (currentChoices.textContent === currentQuestion["answer"]) {
    //     console.log("Correct!")

    // }else {
    //     console.log("wrong!")
    // }

    //question 1 is removed
    // question1.remove();

    // //call the next question
    // question2();

}





function question2() {
    // Get the current question object from the above array. 
    var currentQuestion = questions[1];

    var question2 = document.createElement("section");

    var qTitle = document.createElement("h2");
    var answers = document.createElement("div");

    qTitle.textContent = currentQuestion["title"];

    document.body.children[1].appendChild(question2);
    document.body.children[1].children[0].appendChild(qTitle);
    document.body.children[1].children[0].appendChild(answers);

       for (var i = 0; i < currentQuestion["choices"].length; i++){
        //enters question buttons into the DOM
        var currentChoices = document.createElement("button");
        currentChoices.textContent = currentQuestion.choices[i];
        document.body.children[1].children[0].children[1].appendChild(currentChoices);

        currentChoices.addEventListener("click", function(event){
            event.preventDefault();

            //question 2 is removed
            question2.remove();

            //call the next question
            question3();
        
            if (currentChoices === currentQuestion["answer"]) {
                console.log("Correct!")
            }else {
                console.log("wrong!")
            }
        });
    }
}

// function question3() {
//     // Get the current question object from the above array. 
//     var currentQuestion = questions[2];

//     var question3 = document.createElement("section");

//     var qTitle = document.createElement("h2");
//     var answers = document.createElement("div");

//     qTitle.textContent = currentQuestion["title"];

//     document.body.children[1].appendChild(question3);
//     document.body.children[1].children[0].appendChild(qTitle);
//     document.body.children[1].children[0].appendChild(answers);

//        for (var i = 0; i < currentQuestion["choices"].length; i++){
//         //enters question buttons into the DOM
//         var currentChoices = document.createElement("button");
//         currentChoices.textContent = currentQuestion.choices[i];
//         document.body.children[1].children[0].children[1].appendChild(currentChoices);

//         currentChoices.addEventListener("click", function(event){
//             event.preventDefault();
        
//             //question 3 is removed
//             question3.remove();

//             //call the next question
//             question4();
    
//             if (currentChoices === currentQuestion["answer"]) {
//                 console.log("Correct!")
//             }else {
//                 console.log("wrong!")
//             }
//         });
//     }
// }

// function question4() {
//     // Get the current question object from the above array. 
//     var currentQuestion = questions[3];

//     var question4 = document.createElement("section");

//     var qTitle = document.createElement("h2");
//     var answers = document.createElement("div");

//     qTitle.textContent = currentQuestion["title"];

//     document.body.children[1].appendChild(question4);
//     document.body.children[1].children[0].appendChild(qTitle);
//     document.body.children[1].children[0].appendChild(answers);

//        for (var i = 0; i < currentQuestion["choices"].length; i++){
//         //enters question buttons into the DOM
//         var currentChoices = document.createElement("button");
//         currentChoices.textContent = currentQuestion.choices[i];
//         document.body.children[1].children[0].children[1].appendChild(currentChoices);

//         currentChoices.addEventListener("click", function(event){
//             event.preventDefault();
        
//             //question 4 is removed
//             question4.remove();

//             //call the next question
//             question5();
        
    
//             if (currentChoices === currentQuestion["answer"]) {
//                 console.log("Correct!")
//             }else {
//                 console.log("wrong!")
//             }
//         });
//     }
// }

// function question5() {
//     // Get the current question object from the above array. 
//     var currentQuestion = questions[4];

//     var question5 = document.createElement("section");

//     var qTitle = document.createElement("h2");
//     var answers = document.createElement("div");

//     qTitle.textContent = currentQuestion["title"];

//     document.body.children[1].appendChild(question5);
//     document.body.children[1].children[0].appendChild(qTitle);
//     document.body.children[1].children[0].appendChild(answers);

//        for (var i = 0; i < currentQuestion["choices"].length; i++){
//         //enters question buttons into the DOM
//         var currentChoices = document.createElement("button");
//         currentChoices.textContent = currentQuestion.choices[i];
//         document.body.children[1].children[0].children[1].appendChild(currentChoices);

//         currentChoices.addEventListener("click", function(event){
//             event.preventDefault();
        
//             //question 5 is removed
//             question5.remove();

//             //calls the test being over
        
//             if (currentChoices === currentQuestion["answer"]) {
//                 console.log("Correct!")
//             }else {
//                 console.log("wrong!")
//             }
//         });
//     }
// }