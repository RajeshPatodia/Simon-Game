//alert("hello");
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomNumber;
var level = 0;
var userChosenColor;
var count;
var flag=0;
start();
function start(){
    
    $("body").on("keydown", function (e) {
        
        if(flag==0){
            nextSequence();
            flag=1;
        }


});
}   
   

$(".btn").on("click", function (e) {
userChosenColor = e.target.id;
            //console.log(userChosenColor);
playSound(userChosenColor);
animatePress(userChosenColor);
userClickedPattern.push(userChosenColor);
checkAnswer(userClickedPattern.length-1);
            
});

function nextSequence() {
    //count=0;
    userClickedPattern=[];
    randomNumber = Math.floor(Math.random() * 4);
    var randomColor = buttonColors[randomNumber];
    gamePattern.push(randomColor);
    level++;
    $("h1").text("Level " + level);

    $("#" + randomColor).fadeOut(100).fadeIn(100);
    playSound(randomColor);
   // nextSequence();
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");
    setTimeout(function () {
        $("." + currentColor).removeClass("pressed");
    }, 100);
}
function checkAnswer(currentAnswer)
{
    if(gamePattern[currentAnswer]===userClickedPattern[currentAnswer]){
        if(currentAnswer==gamePattern.length-1)
        {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    //console.log("Success");
    else
    {
       // console.log("Fail");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        flag=0;
        level=0;
        gamePattern=[];
        start();
    }
    
}