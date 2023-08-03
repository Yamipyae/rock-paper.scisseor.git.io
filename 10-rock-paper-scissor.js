let score = JSON.parse(localStorage.getItem('score')) ||  {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();
/*
if(!score){
score = {
    wins: 0,
    losses: 0,
    ties: 0
};
}*/

function playGame(playerMove){
const computerMove = pickComputerMove();
// console.log(computerMove2);
let result = '';
if(playerMove === 'Scissor'){
if(computerMove === 'Rock'){
result = 'You lose.';
}
else if(computerMove === 'Paper'){
result = 'You Win.';
}
else {
result = 'You tie.';
}
}


else if (playerMove === 'Paper'){
if(computerMove === 'Rock'){
result = 'You Win.';
}
else if(computerMove === 'Paper'){
result = 'You tie.';
}
else {
result = 'You lose.';
}
}
else if(playerMove === 'Rock'){

if(computerMove === 'Rock'){
result = 'You tie.';
}
else if(computerMove === 'Paper'){
result = 'You lose.';
}
else {
result = 'You Win.';
}
}

if(result === 'You Win.'){
score.wins = score.wins + 1;
}
else if(result === 'You lose.'){
score.losses = score.losses + 1;
}
else {
score.ties = score.ties + 1;
}


localStorage.setItem('score',JSON.stringify(score));
//console.log(result2);

updateScoreElement();
document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-move').innerHTML = 
`You  <img src="${playerMove}-emoji.png" class="moveIcon">  
Computer <img src="${computerMove}-emoji.png" class="moveIcon">`;

//alert(`You pick ${playerMove}.Computer pick ${computerMove}.${result}
// Win: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function updateScoreElement() {
document.querySelector('.js-score').innerHTML = 
`Win: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
const randomNumber = Math.random();
let computerMove = '';
if(randomNumber >= 0 && randomNumber < 1/3){
computerMove = 'Rock';
}
else if(randomNumber >= 1/3 && randomNumber < 2/3){
computerMove = 'Paper';
}
else {
computerMove = 'Scissor';
}
return computerMove;
}