
let humanscore = 0;
let computerscore = 0;


console.log(PlayGame());


function PlayGame(){
    for (let i = 0; i < 5;i++){
        PlayRound();
    }
    if(humanscore > computerscore){
        console.log("you win!")
    }
    else{
        console.log("you lose")
    }
    
}


function PlayRound(){
    let humanchoice = GetHumanChoice();
    let computerchoice = GetComputerChoice();

    if(humanchoice == computerchoice){
        printscore();
        console.log("tie")
        return;
    }
    else if(humanchoice == "rock"){
        if(computerchoice == "paper"){
            computerscore++;
        }
        else{
            humanscore++;
        }
    }
    else if(humanchoice == "paper"){
        if(computerchoice == "rock"){
            humanscore++;
        }
        else{
            computerscore
        }
    }
    else{
        if(computerchoice == rock){
            computerscore++;
            printscore()
        }
        else{
            humanscore++;
        }
    }
    printscore();
    if(humanscore > computerscore){
        console.log("you win this round!")
    }
    else{
        console.log("you lose this round")
    }
}

function printscore(){
    console.log("Your score: " + humanscore);
    console.log("Computer score: " + computerscore);
}

function GetComputerChoice(){
    let b =(Math.floor(Math.random()*3));
    if(b === 0){
        b = "rock";
    }
    else if(b === 1){
        b = "paper";
    }
    else{
        b = "scissors";
    }
    return b;
}

function GetHumanChoice(){
    let a;
    while(a != "rock" && a != "paper" && a!= "scissors"){
        a = prompt("rock, paper, or scissors");
        a = a.toLowerCase();
        if (a != "rock" && a != "paper" && a!= "scissors"){
            alert( a +" is an invalid response");
        }
    }
    return a;
}