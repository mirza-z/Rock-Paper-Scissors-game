const condition = document.getElementById("con"),
result = document.getElementById("result");


function game(user){
    let computer= Math.floor(Math.random() * 3);

    switch(computer){
        case 0: computer = "Rock";
                break;
        case 1: computer = "Paper";
                break;
        case 2: computer = "Scissors";
                break;
    }
    
    condition.innerText = `Computer picks: ${computer}`;
    

    if(user == computer){
        result.innerText = `You picked ${user} so it's a Draw!`
    }else if((user == "Rock" && computer=="Scissors")||(user == "Paper" && computer=="Rock")||(user == "Scissors" && computer=="Paper")){
        result.innerText = `You picked ${user} so you Win!`
    }else{
        result.innerText = `You picked ${user} so you Lose!`
    }
}
