import '../css/style.css';

//variable declaration
let direction = 'R' //R = Right | L = Left | D = Down | U = Up
let positionx = 3, positiony = 3;
let speed = 250;

let head = true;
let snakeSize = 3;
let snakeChunk = 0;

//Making an array of array
let x = new Array(16);
for(let i = 0; i<16; ++i)
{
  x[i] = new Array(16)
}

//const declaration
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const move = () => {
  //Dessine la grille de jeu
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 800, 800);
  main();
  // Rafraichit a chaque seconde
  setTimeout(() => {
    requestAnimationFrame(move);
  }, speed);
  head = true;
};

///////////////////////////////////////////////////   Code   /////////////////////////////////////////////////
//alert(canvas);
//alert(ctx);

//////////////////////////////////////////////////    EVENT    ////////////////////////////////////////////////
document.addEventListener('keydown', arrowclicked) //Change the direction
//TODO : Pause menu with an alert



//////////////////////////////////////////////////   Function   ///////////////////////////////////////////////
function main() {
  drawAllSnake();
  checkDirection();
  getallcoordinate()
}

function getallcoordinate() {
  
}

function arrowclicked(event) {
  if(event.keyCode == 37 && direction != 'R') {direction = 'L'}
  else if (event.keyCode == 39 && direction != 'L') {direction = 'R'}
  else if (event.keyCode == 38 && direction != 'D') {direction = 'U'}
  else if (event.keyCode == 40 && direction != 'U') {direction = 'D'}
}

function checkDirection() { //TODO : border and check up/down
  if (direction == 'R') { positionx += 50 }
  else if (direction == 'L') {positionx -= 50}
  else if (direction == 'U') {positiony -= 50}
  else {positiony += 50}
}

function drawAllSnake() {
  for(let i = 0; i < snakeSize; ++i)
  {
    if (i == snakeSize-1)
    {head=true}
    else{head = false}
    drawSnakePart();
  }
  head = false;
  snakeChunk = 0;
}

function drawSnakePart() {
  ctx.beginPath();
  ctx.lineWidth = 5;
  if (head) {
    ctx.strokeStyle = "Red"
  } else {
    ctx.strokeStyle = "black"
  }
  ctx.fillStyle = "Red";
  //TODO
  ctx.rect(positionx+(snakeChunk*50), positiony, 50, 50);
  ++snakeChunk
  ctx.stroke();
}

requestAnimationFrame(move);

