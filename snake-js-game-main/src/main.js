import '../css/style.css';

//variable declaration
let direction = 'D' //R = Right | L = Left | D = Down | U = Up
let positionx = 3, positiony = 3;
let speed = 250;

let head = true;
let longueursnake = 3;

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
  //ctx.fillStyle = 'black';
  //ctx.fillRect(0, 0, 800, 800);
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


//////////////////////////////////////////////////   Function   ///////////////////////////////////////////////
function main() {
  drawAllSnake();
  checkDirection();
}

function checkDirection() { //TODO : border and check up/down
  if (direction == 'R') { positionx += 50 }
  else if (direction == 'L') {positionx -= 50}
  else if (direction == 'U') {positiony -= 50}
  else {positiony += 50}
}

function drawAllSnake() {
  for(let i = 0; i < longueursnake; ++i)
  {
    drawSnakePart();
  }
}

function drawSnakePart() {
  ctx.beginPath();
  ctx.lineWidth = "5";
  if (head) {
    ctx.strokeStyle = "Red"
  } else {
    ctx.strokeStyle = "black"
  }
  head = false;
  ctx.fillStyle = "Red";
  ctx.rect(positionx, positiony, 50, 50);
  ctx.stroke();
}

requestAnimationFrame(move);

