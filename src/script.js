const grid = document.getElementById('grid');
let cards = document.querySelectorAll('.card');
let mole = document.querySelector('.mole')
const timeDiv = document.getElementById('time');
const scoreDiv = document.getElementById('score');
const btn = document.getElementById('btn');
let score = 0;
let hitPosition ;
let time = 20;

function randomCard(){
    cards.forEach(element =>{
        element.classList.remove('mole')
    })

    let randomCard = cards[Math.floor(Math.random() * 9)]
    randomCard.classList.add('mole');

    hitPosition = randomCard.id
}   
    cards.forEach(card =>{
        card.addEventListener('mousedown', () =>{
            if(card.id == hitPosition){
                score++;
                scoreDiv.textContent ="Score:" + score;
                hitPosition = null;
            }
        })
    })

function moveMole(){
    timerId = setInterval(randomCard, 350);
}

function timerMinus(){
    if(time == 1){
        clearInterval(timeDown)
        clearInterval(timerId)
    }
    time--;
    timeDiv.textContent ="Time:" + time;
}

function countDown(){
    timeDown = setInterval(timerMinus, 1000)
}

btn.addEventListener('click', startFunction);

function startFunction(){
    btn.removeEventListener('click', startFunction)
    moveMole();
    countDown();
}

