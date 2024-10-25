alert("Lets play rock, paper, scissors")
play = prompt("¿Press 1 for rock, 2 for paper, 3 for scissors?");
pcPlay=Math.floor(Math.random()*(3-1+1)+1)
player(play)
computer(pcPlay)
results(play, pcPlay)



function player(play){
    if(play==1){
        alert("You picked rock")
    }
    else if (play==2){
        alert("You picked paper")
    } 
    else if (play==3){
        alert("You picked scissors")
     }
}

function computer(pcPlay){
    if(pcPlay==1){
        alert("Computer picked rock")
    }
    else if (pcPlay==2){
        alert("Computer picked paper")
    } 
    else if (pcPlay==3){
        alert("Computer picked scissors")
     }
    }
function results(play, pcPlay) {
    if(play==pcPlay){
        alert("You tied (°ー°〃)")
    }
    else if((play == 1 && pcPlay == 3)||(play == 3 && pcPlay == 2 )||(play == 2 && pcPlay == 1)){
        alert("You won!!! ;D ")
    } 
    else alert("YOU LOST!!! ಥ_ಥ")
}
