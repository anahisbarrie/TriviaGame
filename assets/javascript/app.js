//initialize global variables
var unAnswer = 5
var Answer = " "
var CorrectAnswers = 0
var IncorrectAnswers = 0
var CorrectArr = ["Venezuela", "19,354", "Havanesse", "middle", "No-one"]
var Timer = 0 

// Function to start the game 
$("#Start").click(function(){
    start()
    var timeleft = 15;
    Timer = setInterval(function () {
        document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;
        if (timeleft <= 0) {
            done()  
        }
    }, 1000);
})

$('.custom-control-input').click(function(event) {
    var answer = event.target.value
    console.log(event.target.value)
    for (var i = 0; i < CorrectArr.length; i++) {
        if (answer === CorrectArr[i]) {
            CorrectAnswers +=1;
            return 
        }
      
    }
            IncorrectAnswers +=1;     
} );

function start(){

    unAnswer = 5
    Answer = " "
    CorrectAnswers = 0
    IncorrectAnswers = 0
    CorrectArr = ["Venezuela", "19,354", "Havanesse", "middle", "No-one"]
    Timer = 0 
    document.getElementById("corrects").innerHTML = "Correct Answers: " + CorrectAnswers;
    document.getElementById("Incorrects").innerHTML = "Incorrect Answers: " + IncorrectAnswers;
    document.getElementById("notanswered").innerHTML = "Not Answered: 0";
    $('.custom-control-input').prop( "checked", false )
    $("#my-questions").css("display", "block")
}

$("#done").click(done)

function done () {
    unAnswer = unAnswer - CorrectAnswers - IncorrectAnswers

    clearInterval(Timer);
    
    document.getElementById("timer").innerHTML = "Well Done! Check your Results Below!"
    document.getElementById("corrects").innerHTML = "Correct Answers: " + CorrectAnswers;
    document.getElementById("Incorrects").innerHTML = "Incorrect Answers: " + IncorrectAnswers;
    document.getElementById("notanswered").innerHTML = "Not Answered: " + unAnswer;
    $("#my-questions").css("display", "none")

}


