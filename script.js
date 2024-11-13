
let humanscore = 0;
let computerscore = 0;


function PlayRound(humanchoice){
    let computerchoice = GetComputerChoice();

    if(humanchoice == computerchoice){
        UpdateScore();
        document.getElementById("pr").textContent = "you tied this round!";
        return;
    }
    else if(humanchoice == "rock"){
        if(computerchoice == "paper"){
            computerscore++;
            document.getElementById("pr").textContent = "you lose this round"
        }
        else{
            humanscore++;
            document.getElementById("pr").textContent = "you win this round!";
        }
    }
    else if(humanchoice == "paper"){
        if(computerchoice == "rock"){
            humanscore++;
            document.getElementById("pr").textContent = "you win this round!";
        }
        else{
            computerscore++;
            document.getElementById("pr").textContent = "you lose this round"
        }
    }
    else{
        if(computerchoice == "rock"){
            computerscore++;
            document.getElementById("pr").textContent = "you lose this round!";
            printscore()
        }
        else{
            humanscore++;
            document.getElementById("pr").textContent = "you win this round!";
        }
    }
    UpdateScore();
    console.log(humanscore)
    console.log(computerscore)
    setTimeout(Decide, 250)
}
    function Decide(){
    if(humanscore == 5){
        alert("You WON!");
        humanscore = 0;
        computerscore = 0;
        UpdateScore();
        document.getElementById("pr").textContent = "pr";
    }
    else if(computerscore == 5){
        alert("You Lost");
        humanscore = 0;
        computerscore = 0;
        UpdateScore();
        document.getElementById("pr").textContent = "pr";
    }
}

function UpdateScore(){
    document.getElementById("hs").textContent = "Human Score: " + humanscore;
    document.getElementById("cs").textContent = "Computer Score: " + computerscore;
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


    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors =document.querySelector("#scissors");


    const hs = document.querySelector("#hs");
    const cs = document.querySelector("#cs");

    

    rock.onclick = () => PlayRound("rock");
    paper.onclick = () => PlayRound("paper");
    scissors.onclick = () => PlayRound("scissors");
    
    // = (PlayRound){}

/*
so we have out buttons
when we click o nbutton it will return the value of the button which is the textof the button
we will play the game (whcih is computer generate etc until one person reaches 5 wins)
*/
