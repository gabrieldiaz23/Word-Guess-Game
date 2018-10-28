


var keyPressed = document.getElementById("user-key");
var winCounter = document.getElementById("winCounter");
var loseCounter = document.getElementById("loseCounter");
var guessesLeft = document.getElementById("guessesLeft");

var won = 0;
var lose = 0;
var gLeft = 10;

      // Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) 
{
    keyPressed.textContent = event.key;

    var letterArray = ['q','w','e','r','t','y','u','i','o','p'];
    //var letterArray = ['a','b','c','d'];
    var randLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
    
    if (event.key === randLetter)
    {
        keyPressed.textContent = event.key;
        won++;
        winCounter.textContent = won.toString();
        alert("Nice One! You guessed the correct letter!");
    }
    else if (event.key != randLetter)
    {
        keyPressed.textContent = event.key;
        gLeft--;
        guessesLeft.textContent = gLeft.toString();
        alert("Incorrect. Try again.");
        
    }
    
    if (gLeft == 0)
    {
        keyPressed.textContent = event.key;
        lose++;
        loseCounter.textContent = lose.toString();
        alert("You lose. No attempts left.");

        var newGame = confirm("Do you want to play again?");

        if (newGame)
        {
            won = 0;
            lose = 0;
            gLeft = 10;
        }
        else
        {
            alert("Alright. Thanks for playing this game! :D");
        }
    }

}
