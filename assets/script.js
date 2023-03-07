var timer = document.querySelector(".timer");
var secondsLeft = 75;
var startingPage = document.querySelector("#main-page");
var mainElement = document.querySelector("main");
var headerElement = document.querySelector("header");
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
    message: "Your final score is " + "" + ".",
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
  
    //   if (secondsLeft > 0) {
    //     // Tests if win condition is met
    //       // Clears interval and stops timer
    //       clearInterval(timerInterval);
    //     }

        // If time has run out, go straight to yourResults
        if (secondsLeft === 0) {
            // Clears interval
            clearInterval(timerInterval);
            //gotta remove the current question here 
            yourResults();
        }
      
  
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
        
            //call next question with right or wrong answer
            if (event.target.value === currentQuestion["answer"]) {
                var result = document.createElement("h3");
                result.textContent = "Correct!";
                mainElement.appendChild(result);

        
            }else {
                var result = document.createElement("h3");
                result.textContent = "Wrong!";
                mainElement.appendChild(result);
                console.log("wrong!")

            }
        
            // question 1 is removed
            question1.remove();
        
            //call the next question
            question2();
        
        });

    }
    
}


function question2() {
    // Get the current question object from the above array. 
    var currentQuestion = questions[1];

    //update the DOM by making and appending the elements
    var question2 = document.createElement("section");

    var qTitle = document.createElement("h2");
    var answers = document.createElement("div");

    qTitle.textContent = currentQuestion["title"];

    mainElement.appendChild(question2);
    question2.appendChild(qTitle);
    question2.appendChild(answers);

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
        
            //call next question with right or wrong answer
            if (event.target.value === currentQuestion["answer"]) {
                var result = document.createElement("h3");
                result.textContent = "Correct!";
                mainElement.appendChild(result);
            }else {
                var result = document.createElement("h3");
                result.textContent = "Wrong!";
                mainElement.appendChild(result);
                console.log("wrong!")

            }
        
            // question 2 is removed
            question2.remove();
            // result.remove();
        
            //call the next question
            question3();
        
        });
    }
}

function question3() {
    // Get the current question object from the above array. 
    var currentQuestion = questions[2];

    var question3 = document.createElement("section");

    var qTitle = document.createElement("h2");
    var answers = document.createElement("div");

    qTitle.textContent = currentQuestion["title"];

    mainElement.appendChild(question3);
    question3.appendChild(qTitle);
    question3.appendChild(answers);

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
        
            //call next question with right or wrong answer
            if (event.target.value === currentQuestion["answer"]) {
                var result = document.createElement("h3");
                result.textContent = "Correct!";
                mainElement.appendChild(result);
                console.log("Correct!")
            }else {
                var result = document.createElement("h3");
                result.textContent = "Wrong!";
                mainElement.appendChild(result);
                console.log("wrong!")


            }
            //question 3 is removed
            question3.remove();
            // result.remove();

            //call the next question
            question4();
        });
    }
}

function question4() {
    // Get the current question object from the above array. 
    var currentQuestion = questions[3];

    var question4 = document.createElement("section");

    var qTitle = document.createElement("h2");
    var answers = document.createElement("div");

    qTitle.textContent = currentQuestion["title"];

    mainElement.appendChild(question4);
    question4.appendChild(qTitle);
    question4.appendChild(answers);

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
        
            //call next question with right or wrong answer
            if (event.target.value === currentQuestion["answer"]) {
                var result = document.createElement("h3");
                result.textContent = "Correct!";
                mainElement.appendChild(result);
                console.log("Correct!")
            }else {
                var result = document.createElement("h3");
                result.textContent = "Wrong!";
                mainElement.appendChild(result);
                console.log("wrong!")


            }

            //question 4 is removed
            question4.remove();
            // result.remove();
            
            //call the next question
            question5();
        });
    }
}

function question5() {
    // Get the current question object from the above array. 
    var currentQuestion = questions[4];

    //update the DOM by making and appending the elements
    var question5 = document.createElement("section");

    var qTitle = document.createElement("h2");
    var answers = document.createElement("div");

    qTitle.textContent = currentQuestion["title"];

    mainElement.appendChild(question5);
    question5.appendChild(qTitle);
    question5.appendChild(answers);

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
        
            //call next question with right or wrong answer
            if (event.target.value === currentQuestion["answer"]) {
                var result = document.createElement("h3");
                result.textContent = "Correct!";
                mainElement.appendChild(result);
                console.log("Correct!")
            }else {
                var result = document.createElement("h3");
                result.textContent = "Wrong!";
                mainElement.appendChild(result);
                console.log("wrong!")


            }

            //question 5 is removed
            question5.remove();
            // result.remove();

            //calls the test being over
            yourResults()
        });
    }
}

function yourResults() {
    var results = testOver;

    //update the DOM by making and appending the elements
    var finalScore = document.createElement("section");

    var title = document.createElement("h2");
    var message = document.createElement("p");
    var saveScore = document.createElement("form");
    var initials = document.createElement("label");
    var textbox = document.createElement("input");
    var submit = document.createElement("input");
    submit.setAttribute("type", "submit");

    title.textContent = results["title"];
    message.textContent = results["message"];
    initials.textContent = results["enterInitials"];
    submit.textContent = "Submit";

    mainElement.appendChild(finalScore);
    finalScore.appendChild(title);
    finalScore.appendChild(message);
    finalScore.appendChild(saveScore);
    saveScore.appendChild(initials);
    saveScore.appendChild(textbox);
    saveScore.appendChild(submit);

    submit.addEventListener("click", function (event){
        event.preventDefault();
    
        

        //question 5 is removed
        finalScore.remove();
        headerElement.remove();
        // result.remove();

        //calls the test being over
        highScores()
    });

}

function highScores() {
    var highScoreLog = document.createElement("section");

    var title = document.createElement("h1");
    var goBack = document.createElement("input");
    goBack.setAttribute("type", "submit");
    var clearHighscores = document.createElement("input");
    clearHighscores.setAttribute("type", "submit");

    title.textContent = highscores["title"];
    goBack.textContent = highscores.buttons[0];
    clearHighscores.textContent = highscores.buttons[1];

    mainElement.appendChild(highScoreLog);




}