let again = document.getElementsByClassName('button')[0];
let check = document.getElementsByClassName('button')[1];
let message = document.querySelector('.message');
let scrore = document.getElementById('score');
let highscore = document.getElementById('highscore');
let secretNum = document.getElementById('secret-num');
let input = document.getElementById('input');
let description = document.getElementById('description');


const MINIMUM = 1;
const MAXIMUM = 20;
let RANDOM = MINIMUM +( Math.random() * (MAXIMUM - MINIMUM) + 1 ) ;
RANDOM = Math.floor(RANDOM);
console.log(RANDOM);

description.innerHTML = `< Between ${MINIMUM} and ${MAXIMUM} >`

check.addEventListener('click',function(){
    let enteredValue = input.value;
    console.log(enteredValue);

    if(enteredValue == ''){
        message.textContent = `> Invalid input!!`;
    }
    else{
        if(enteredValue < RANDOM){
            message.textContent = `> Too Low!!`;
        }
        else if(enteredValue > RANDOM ){
            message.textContent = `> Too High!!`;
        }
        else{
            message.textContent = `> Correct 🏆 !!`;
        }
    }
});