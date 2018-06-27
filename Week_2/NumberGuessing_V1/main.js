/*eslint-env browser*/
function playGame(){
    alert("First enter a low number, then a high number. Then, guess a random number between them.");

    //get the low and high bounds
    //uses parseInt() to make sure we have numbers and not strings
    var from = parseInt(prompt("Enter the lower bound.")); 
    while(from<0||from>1000||isNaN(from)){
        from = parseInt(prompt("Enter a number between 0 and 1000."));
    }
    var to = parseInt(prompt("Enter the higher bound.")); 
    while(to<from||to>1000||isNaN(to)){
        to = parseInt(prompt("Enter a number between 0 than 1000."));
    }
    //get an integer between [from, to]
    //Math.random() returns decimals, used Math.round to get whole number
    var target = Math.round(Math.random() * (to - from) + from);

    var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));

    var totalGuesses = 1;

    //loop until user guesses correct number
    while(currentGuess != target){
        if(currentGuess > from || currentGuess < to || isNaN(currentGuess)){
            currentGuess = parseInt(prompt("You did not enter a number between from and to."))
        }
        if(currentGuess < target){
            currentGuess = parseInt(prompt("Enter a higher number"));

        totalGuesses++;
        }else if (currentGuess > target){""
            currentGuess = parseInt(prompt("Enter a lower number"));
        
            totalGuesses ++;
        }
    }

    alert("It took " + totalGuesses + " tries to guess the correct number.");
}