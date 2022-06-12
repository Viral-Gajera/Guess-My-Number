let again = document.getElementsByClassName('button')[0];
let check = document.getElementsByClassName('button')[1];
let message = document.querySelector('.message');
let tryLeft = document.getElementById('try-left');
let highscore = document.getElementById('highscore');
let input = document.getElementById('input');
let description = document.getElementById('description');

let secretNum = document.getElementById('secret-num');
let currectAns = document.getElementById('currect-ans');
let middleSection = document.getElementById('middle-section');


const MINIMUM = 1;
const MAXIMUM = 20;
let RANDOM = Math.floor(MINIMUM +( Math.random() * (MAXIMUM - MINIMUM) + 1 ));
console.log(RANDOM);

description.innerHTML = `< Guess the number between ${MINIMUM} and ${MAXIMUM} >`

let Try = (MAXIMUM / 2);
tryLeft.textContent = Try;

let HIGHEST = MAXIMUM/2;
highscore.textContent = HIGHEST; 

again.addEventListener('click', function() {
    secretNum.style.backgroundColor = 'white';
    currectAns.style.backgroundColor = 'white';
    currectAns.style.borderColor = 'white';
    middleSection.style.borderColor = 'white';
    middleSection.style.backgroundColor = 'white'

    message.textContent = '> Start Guessing...'

    RANDOM = Math.floor(MINIMUM +( Math.random() * (MAXIMUM - MINIMUM) + 1 ));

    Try = (MAXIMUM / 2);
    tryLeft.textContent = Try;

    secretNum.textContent = "?";
    console.log(RANDOM);

    input.value = '';


});

check.addEventListener('click',function()
{
    let enteredValue = input.value;
    console.log(enteredValue);

    if(enteredValue == ''){
        message.textContent = `> Invalid input!!`;
    }
    else if(Try === 0 ){
        message.textContent = `> Game Over!!`;

        secretNum.style.backgroundColor = 'red';
        currectAns.style.backgroundColor = 'red';
        currectAns.style.borderColor = 'red';
        middleSection.style.borderColor = 'red';
        middleSection.style.backgroundColor = 'red'

    }
    else{
        if(enteredValue < RANDOM){
            message.textContent = `> Too Low!!`;
            Try -- ;
            tryLeft.textContent = Try;
        }
        else if(enteredValue > RANDOM ){
            message.textContent = `> Too High!!`;
            Try -- ;
            tryLeft.textContent = Try;
        }
        else{
            secretNum.textContent = RANDOM;
            message.textContent = `> Correct !!`;

            secretNum.style.backgroundColor = 'lightgreen';
            currectAns.style.backgroundColor = 'lightgreen';
            currectAns.style.borderColor = 'lightgreen';
            middleSection.style.borderColor = 'lightgreen';
            middleSection.style.backgroundColor = 'lightgreen';

            if( ( (MAXIMUM/2) - Try <= HIGHEST ) )
            {   
                HIGHEST = (MAXIMUM/2) - Try;
                highscore.textContent = HIGHEST;
            }
            
        }
    }
});