import '../css/style.css';

//variable declaration
let speed = 200;

let randomx = getRandomInt(16);
let randomy = getRandomInt(16);
let positionx = 4;
let positiony = 0;
let direction = 'R';
let CheckApple = false;
let SnakeSize = 4;
let checkGameIsRunning = true

let restartButton = {
  x: 250,
  y: 400,
  width: 300,
  height: 100,
}

// The rectangle should have x,y,width,height properties
var rect = {
  x: 250,
  y: 400,
  width: 300,
  height: 100,
};

let snake = [{ x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 },]

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
arrayPlayground[0[0]] = 1

const move = () => {
  //Dessine la grille de jeu
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);

  main();

  // Rafraichit a chaque seconde
  setTimeout(() => {
    requestAnimationFrame(move);
  }, speed);
};

///////////////////////////////////////////////////   Code   /////////////////////////////////////////////////


//////////////////////////////////////////////////    EVENT    ////////////////////////////////////////////////
document.addEventListener('keydown', arrowclicked) //Change the direction
//TODO : Pause menu with an alert

//////////////////////////////////////////////////   Function   ///////////////////////////////////////////////
function main() {
  //Version 3
  drawSnakeHead();
  V3generateApple();
  drawApple();
  moveSnake();
  collisionApple();

  drawScore();
  checkGameOver();
}

function gameInit() {
  positionx = 4
  positiony = 0
  direction = "R"
  SnakeSize = 4
}

function checkGameOver() {
  if (positionx > 16 || positionx < -1 || positiony > 16 || positiony < -1) {
    checkGameIsRunning = false

    //draw a new background
    ctx.fillStyle = 'purple'
    ctx.fillRect(0, 0, 800, 800)

    //Write the game over
    ctx.fillStyle = 'black'
    ctx.font = "100px Arial";
    ctx.fillText("GAME OVER", 100, 300)

    //Write the score
    ctx.font = "30px Arial"
    ctx.fillText(`Your score : ${SnakeSize - 4}`, 300, 350)

    //draw the restart button
    ctx.fillStyle = 'red'
    ctx.fillRect(250, 400, 300, 100)

    //draw the border of the restart button
    ctx.strokeStyle = 'black'
    ctx.strokeRect(250, 400, 300, 100)

    //Write the restart in the button
    ctx.fillStyle = 'black'
    ctx.font = "60px Arial"
    ctx.fillText("Restart", 300, 470)


  }
}

function drawScore() {
  ctx.font = "30px Arial";
  ctx.fillText(SnakeSize - 4, 50, 60);
}

function collisionApple() {
  if (positionx == randomx && positiony == randomy) {
    CheckApple = true;
    ++SnakeSize;
    snake.push()
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function V3generateApple() {
  if (CheckApple) {
    randomx = getRandomInt(16);
    randomy = getRandomInt(16);
    let applePosition = [randomx, randomy]
    CheckApple = false;
  }
}

function moveSnake() {
  if (direction == 'R') { let snakePosition = [++positionx, positiony] } //Going right
  else if (direction == 'L') { let snakePosition = [--positionx, positiony] } //Going left
  else if (direction == 'D') { let snakePosition = [positionx, ++positiony] } //Going up
  else if (direction == 'U') { let snakePosition = [positionx, --positiony] } //Going down
}

function drawApple() {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "darkgreen";
  ctx.fillStyle = "lightgreen";
  ctx.fillRect((randomx * 50), (randomy * 50), 50, 50);
  ctx.stroke();
}

function drawSnakeHead() {
  for (let i = 0; i <= SnakeSize; ++i) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "darkred";
    ctx.fillStyle = "red"; //TODO : find lightred
    ctx.fillRect(positionx * 50, positiony * 50, 50, 50);
    ctx.stroke();
  }
}

function arrowclicked(event) {
  //Version 3
  if (event.keyCode == 37 && direction != 'R') { direction = 'L' }
  else if (event.keyCode == 39 && direction != 'L') { direction = 'R' }
  else if (event.keyCode == 38 && direction != 'D') { direction = 'U' }
  else if (event.keyCode == 40 && direction != 'U') { direction = 'D' }
}

///////////////////////////////////////////////////////////////////////// Snippet ///////////////////////////////////////////////

// Function to get the mouse position
function getMousePos(canvas, event) {
  var restartButton = canvas.getBoundingClientRect();
  return {
    x: event.clientX - restartButton.left,
    y: event.clientY - restartButton.top,
  };
}

// Function to check whether a point is inside a rectangle
function isInside(pos, restartButton) {
  return pos.x > restartButton.x && pos.x < restartButton.x + restartButton.width && pos.y < restartButton.y + restartButton.height && pos.y > restartButton.y
}

// Binding the click event on the canvas
canvas.addEventListener('click', function (evt) {
  var mousePos = getMousePos(canvas, evt);
  if (!checkGameIsRunning) {
    if (isInside(mousePos, restartButton)) {
      checkGameIsRunning = true
      main()

      //Making the variable go back to the init
      gameInit()
    }
  }
}, false);



requestAnimationFrame(move);
