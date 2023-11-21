import '../css/style.css';

//variable declaration
let direction = 'R' //R = Right | L = Left | D = Down | U = Up
let positionx = 3, positiony = 3;
let speed = 200;

let head = true;
let snakeSize = 1;
let framereset = 0;
let snakeChunk = 0;
let checkreplay = false;
let checkapple = false; //Check if there's an apple in the game
let randomcolumn
let randomlist

let cptrmap = 0
let map = [
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //1
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //2
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //3
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //4
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //5
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //6
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //7
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //8
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //9
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //10
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //11
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //12
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //13
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //14
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //15
  [++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap, ++cptrmap,], //16
];

let once = true;
let randomx;
let randomy;
//do {

//} while (randomx % 50 == 0)

//do {
//} while (randomy % 500 == 0)
randomx = Math.floor(0 + Math.random()*(750 - 0 + 1));
randomy = Math.floor(0 + Math.random()*(750 - 0 + 1));
let V3positionx = 0;
let V3positiony = 0;
let V3direction = 'R';
let V3SnakeTail = 0;
let V3CheckApple = false;
let V3arrayColumn = 0;
let V3arrayList = 0;

//const declaration
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const arraySize = 15;

//Making an array of array
let arrayPlayground = new Array(arraySize);
for (let i = 0; i < arraySize; ++i) { //0 = empty | 1 = snake | 2 = apple
  arrayPlayground[i] = new Array(arraySize)
}

for (let x = 0; x < arraySize; ++x) {
  for (let y = 0; y < arraySize; ++y) {
    arrayPlayground[x[y]] = 0
  }
}
arrayPlayground[V3arrayColumn[V3arrayList]] = 1

const move = () => {
  //Dessine la grille de jeu
  //if (framereset == snakeSize) {
  //framereset = 0;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);
  //ctx.stroke;
  //}
  main();

  // Rafraichit a chaque seconde
  setTimeout(() => {
    requestAnimationFrame(move);
  }, speed);
  //head = true;
};

///////////////////////////////////////////////////   Code   /////////////////////////////////////////////////
//alert(canvas);
//alert(ctx);

//////////////////////////////////////////////////    EVENT    ////////////////////////////////////////////////
document.addEventListener('keydown', arrowclicked) //Change the direction
//TODO : Pause menu with an alert



//////////////////////////////////////////////////   Function   ///////////////////////////////////////////////
function main() {
  //Version 1
  /*generateApple();
  DisplayApple();
  //drawAllSnake();
  drawSnakePart();
  checkDirection();
  getallcoordinate();
  framereset++;
  
  if(positionx > 803 || positionx < -53 || positiony < -50 || positiony > 853)
  {
    gameOver()
  }
  */

  //Version 2
  /*
  startAGame();
  gridDisplay();
  */

  //Version 3
  drawSnake();
  drawSnakeTail();
  V3generateApple();
  drawApple();
  moveSnake();
  collisionApple();
}

function collisionApple() {

}

function V3generateApple() {
  if (V3CheckApple) {
    while (randomx % 5000 == 0) {randomx = Math.floor(0 + Math.random()*(750 - 0 + 1))} //TODO
    do {randomy = Math.floor(0 + Math.random()*(750 - 0 + 1));} while (randomx % 50 == 0) {}
    V3CheckApple = false;
  }
}

function drawSnakeTail() {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";
  ctx.fillRect(V3positionx, V3positiony, 50, 50);
  ctx.stroke();
}

function moveSnake() {
  if(V3direction == 'R') {V3positionx += 50;} //Going right
  else if (V3direction == 'L') {V3positionx -= 50;} //Going left
  else if (V3direction == 'D') {V3positiony += 50} //Going up
  else if (V3direction == 'U') {V3positiony -= 50} //Going down
}

function drawApple() {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "green";
  ctx.fillStyle = "green";
  ctx.fillRect(randomx, randomy, 50, 50);
  ctx.stroke();
}

function drawSnake() {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";
  ctx.fillRect(V3positionx, V3positiony, 50, 50);
  ctx.stroke();
}

function gridDisplay() {
  for (let x = 0; x < arraySize + 1; ++x) {
    for (let y = 0; y < arraySize + 1; ++y) {
      if (arrayPlayground[x[y]] == 0) //Floor
      {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        ctx.fillRect(x - 10, y - 10, 50, 50);
        ctx.rect((x * 50) + 3, (y * 50) + 3, 50, 50);
        ctx.stroke();
      }
      else if (arrayPlayground[x[y]] == 1) //Snake
      {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
        ctx.fillRect(x - 10, y - 10, 50, 50);
        ctx.rect((x * 50) + 3, (y * 50) + 3, 50, 50);
        ctx.stroke();
      }
      else if (arrayPlayground[x[y]] == 2) //Apple
      {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "green";
        ctx.fillStyle = "green";
        ctx.rect((x * 50) + 3, (y * 50) + 3, 50, 50);
        ctx.stroke();
      }
    }
  }
}

function startAGame() {
  if (once) {
    once = false

    gridinit()
    snakeinit()
  }
}

function snakeinit() {
  arrayPlayground[0[0]] = 1
}

function gridinit() {
  for (let x = 0; x < arraySize; ++x) {
    for (let y = 0; y < arraySize; ++y) {
      arrayPlayground[x[y]] = 0
    }
  }
}

function generateApple() {
  if (!checkapple) {
    randomcolumn = Math.floor(1 + Math.random() * (15 - 1 + 1)); //colonne random
    randomlist = Math.floor(1 + Math.random() * (15 - 1 + 1)); //liste random
  }
}

function DisplayApple() {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "Red";
  ctx.fillStyle = "Red";
  ctx.rect(3 + (randomcolumn * 50), 3 + (randomlist * 50), 50, 50);
  ctx.stroke;
}

function gameOver() {
  alert(`You are dead. You have made a score of ${snakeSize - 1}`)
  checkreplay = confirm('Wanna retry?')
  if (checkreplay) {
    positionx = 3;
    positiony = 3;
    direction = 'R'
  }
}

function getallcoordinate() {

}

function arrowclicked(event) {
  //Version 1
  if (event.keyCode == 37 && direction != 'R') { direction = 'L' }
  else if (event.keyCode == 39 && direction != 'L') { direction = 'R' }
  else if (event.keyCode == 38 && direction != 'D') { direction = 'U' }
  else if (event.keyCode == 40 && direction != 'U') { direction = 'D' }

  //Version 3
  if (event.keyCode == 37 && V3direction != 'R') { V3direction = 'L' }
  else if (event.keyCode == 39 && V3direction != 'L') { V3direction = 'R' }
  else if (event.keyCode == 38 && V3direction != 'D') { V3direction = 'U' }
  else if (event.keyCode == 40 && V3direction != 'U') { V3direction = 'D' }
}

function checkDirection() { //TODO : border and check up/down
  if (direction == 'R') { positionx += 50 }
  else if (direction == 'L') { positionx -= 50 }
  else if (direction == 'U') { positiony -= 50 }
  else { positiony += 50 }
}

function drawAllSnake() {
  for (let i = 0; i < snakeSize; ++i) {
    if (i == snakeSize - 1) { head = true }
    else { head = false }
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
  ctx.rect(positionx + (snakeChunk * 50), positiony, 50, 50);
  ++snakeChunk
  ctx.stroke();
  snakeChunk = 0;
}

requestAnimationFrame(move);
