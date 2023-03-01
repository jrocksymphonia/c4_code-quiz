var mainPage = document.querySelector('#main-page');
var startQuizButton = document.querySelector('#start-quiz');

startQuizButton.addEventListener('click', function(event){
    event.preventDefault();

    mainPage.remove();

    var question1 = document.createElement(<div></div>);
    
    document.body.children[1].appendChild(question1);


})


