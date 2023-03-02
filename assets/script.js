var timer = document.querySelector(".timer");
var mainPage = document.querySelector("#main-page");
var mainElement = document.querySelector("main");
var startQuizButton = document.querySelector("#start-quiz");

// timer.setAttribute("style", "float: right;");

startQuizButton.addEventListener("click", function(event){
    event.preventDefault();

    //starting page is removed
    mainPage.remove();

    //question 1 is appended here 
    var question1 = document.createElement("div");
    question1.textContent = "TESTERRRRRRRR";
    document.body.children[1].appendChild(question1);


})


