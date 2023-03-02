var mainPage = document.querySelector('#main-page');
var startQuizButton = document.querySelector('#start-quiz');



startQuizButton.addEventListener("click", function(event){
    event.preventDefault();

    mainPage.remove();
    // console.log(mainPage.remove())

    // var question1 = document.createElement(<div></div>);
    // question1.textContent("TESTERRRRRRRR")
    // document.body.children[1].appendChild(question1);


})


