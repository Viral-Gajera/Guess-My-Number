let again = document.getElementsByClassName('button')[0];
let check = document.getElementsByClassName('button')[1];
let message = document.querySelector('.message');
let scrore = document.getElementById('score');
let highscore = document.getElementById('highscore');
let input = document.getElementById('input');
let description = document.getElementById('description');

let secretNum = document.getElementById('secret-num');
let currectAns = document.getElementById('currect-ans');
let middleSection = document.getElementById('middle-section');

const MINIMUM = 1;
const MAXIMUM = 20;
let RANDOM = MINIMUM +( Math.random() * (MAXIMUM - MINIMUM) + 1 ) ;
RANDOM = Math.floor(RANDOM);

secretNum.textContent = RANDOM;

again.addEventListener('click', function() {
    secretNum.style.backgroundColor = 'white';
    currectAns.style.backgroundColor = 'white';
    currectAns.style.borderColor = 'white';
    middleSection.style.borderColor = 'white';
    middleSection.style.backgroundColor = 'white'

    message.textContent = '> Start Guessing...'

    RANDOM = MINIMUM +( Math.random() * (MAXIMUM - MINIMUM) + 1 ) ;
    RANDOM = Math.floor(RANDOM);

    secretNum.textContent = RANDOM;

});

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
            secretNum.textContent = RANDOM;
            message.textContent = `> Correct 🏆 !!`;

            secretNum.style.backgroundColor = 'lightgreen';
            currectAns.style.backgroundColor = 'lightgreen';
            currectAns.style.borderColor = 'lightgreen';
            middleSection.style.borderColor = 'lightgreen';
            middleSection.style.backgroundColor = 'lightgreen'
            
        }
    }
});

console.log( typeof Math);
console.log(Math);