//initialize variables
var Start = 0 
var unAnswer = 0
var Answer = " "
var CorrectAnswers = 0
var IncorrectAnswers = 0
// var ArrQuestion1 = ["answer1","answer2","answer3","answer4"]
// var ArrQuestion2 = ["answer5", "answer6", "answer7", "answer9"]
// var ArrQuestion3 = ["answer9", "answer10", "answer11", "answer12"]
// var ArrQuestion4 = ["answer13", "answer14", "answer15", "answer16"]
// var ArrQuestion5 = ["answer17", "answer18", "answer19", "answer20"]
var CorrectArr = ["Venezuela", "19,354", "Havanesse", "middle", "No-one"]
var Done = 0 

var downloadTimer = setInterval(function () {
    document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Time is up!"
        // FinishGame()
    }
}, 1000);


// Function to start the game 

$("#Start").click(function(){
    var timeleft = 15;
    downloadTimer
  
})

$('.custom-control-input').click(function(event) {
    var answer = event.target.value
    
    console.log(event.target.value)

    for (var i = 0; i < CorrectArr.length; i++) {
        if (answer === CorrectArr[i]) {
            CorrectAnswers +=1;
            return 
        }
        
        // else if (answer === 0) {
        //     unAnswer = + 1;
        // }
    }
   
            IncorrectAnswers +=1;
} );


// var obj = {
//    CorrectAnswers = 0,
//     IncorrectAnswers = 0,
//     num = 0,
//     unAnswer = 0 
// }

//  function FinishedGame(){
//      obj.num !== 0     
//      var unAnswer = 0
//      var Answer 
//      var CorrectAnswers 
//      var IncorrectAnswers 
//  }


// // Function to end the game 

var Done = $("#done").click(function (){

    clearInterval(downloadTimer);

    document.getElementById("corrects").innerHTML = "Correct Answers: " + CorrectAnswers;
    document.getElementById("Incorrects").innerHTML = "Incorrect Answers: " + IncorrectAnswers;
    document.getElementById("notanswered").innerHTML = "Not Answered: " + unAnswer;


});


