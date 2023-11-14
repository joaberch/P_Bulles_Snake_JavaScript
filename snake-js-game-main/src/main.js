import '../css/style.css';

//variable declaration
let direction = 'R' //R = Right | L = Left | D = Down | U = Up
let positionx = 3, positiony = 3;

//let snake = [  {x: 200, y: 200},  {x: 190, y: 200},  {x: 180, y: 200},  {x: 170, y: 200},  {x: 160, y: 200},];
let longueursnake = 3;

//const declaration
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//const move = () => {

  // Dessine la grille de jeu
  //ctx.fillStyle = 'black';
  //ctx.fillRect(0, 0, 800, 800);

  // Rafraichit a chaque seconde
  //setTimeout(() => {
  //  requestAnimationFrame(move);
  //}, 1000);
  
//};

///////////////////////////////////////////////////   Code   /////////////////////////////////////////////////
//alert(canvas);
//alert(ctx);

setTimeout(() => {
  main();
}, 1000);


//////////////////////////////////////////////////   Function   ///////////////////////////////////////////////
function main() {
  drawAllSnake();
  checkDirection()
}

function checkDirection() { //TODO : border and check up/down
  if (direction == 'R') { positionx += 50 }
  else if (direction == 'L') {positionx -= 50}
  else if (direction == 'U') {positiony += 50}
  else {positiony -= 50}
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
  ctx.strokeStyle = "black";
  ctx.fillStyle = "Red";
  ctx.rect(positionx, positiony, 50, 50);
  ctx.stroke();
}

requestAnimationFrame(move);

