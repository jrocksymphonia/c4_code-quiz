var timer = document.querySelector(".timer");
var mainPage = document.querySelector("#main-page");
var mainElement = document.querySelector("main");
var startQuizButton = document.querySelector("#start-quiz");

timer.setAttribute("style", "float: right");
mainElement.setAttribute("style", "text-align: center")

startQuizButton.addEventListener("click", function(event){
    event.preventDefault();

    mainPage.remove();
    // console.log(mainPage.remove())

    // var question1 = document.createElement(<div></div>);
    // question1.textContent("TESTERRRRRRRR")
    // document.body.children[1].appendChild(question1);


})


