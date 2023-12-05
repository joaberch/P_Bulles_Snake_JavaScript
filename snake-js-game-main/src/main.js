import '../css/style.css';
/*TODO
 Add a piece of snake where the head is
 Move the head
 If it hasn't eat anything we destroy the last piece
*/

//variable declaration
let speed = 200;

let applex = getRandomInt(16);
let appley = getRandomInt(16);
let positionx = 4;
let positiony = 0;
let direction = 'R';
let CheckApple = false;
let checkGameIsRunning = true
let checkHasNotEaten = true
let checkGameIsOver

let restartButton = {
  x: 250,
  y: 400,
  width: 300,
  height: 100,
}

//let snake = [{ x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 },] //dictionnaire
let snake = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }]

//const declaration
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

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

//////////////////////////////////////////////////    EVENT    ////////////////////////////////////////////////
document.addEventListener('keydown', arrowclicked) //Change the direction
//TODO : Pause menu with ???

//////////////////////////////////////////////////   Function   ///////////////////////////////////////////////
function main() {
  V3generateApple();
  drawApple();
  collisionApple();
  manageSnake();

  drawScore();
  checkGameOver();
  if (checkGameIsOver) {
    gameOver()
  }
}

function manageSnake() {
  addAChunckOfTheSnakeAtThePlaceOfTheHead()
  moveTheHead()
  
  deleteSnakeTail()
  drawAllSnake()
  //snake.forEach(drawSnake(positionx, positiony))
}

function drawAllSnake() {
  for(let i = 0; i < snake.length; i++) {
    ctx.beginPath()
    ctx.lineWidth = 5
    ctx.strokeStyle = "pink"
    ctx.fillStyle = "red"
    ctx.fillRect(snake[i].x*50, snake[i].y*50, 50, 50)
    ctx.stroke()
  }
}

function deleteSnakeTail() {
  snake.shift()
}

function moveTheHead() {
  if (direction == 'R') { ++positionx } //Going right
  else if (direction == 'L') { --positionx } //Going left
  else if (direction == 'D') { ++positiony } //Going up
  else if (direction == 'U') { --positiony } //Going down
}

function addAChunckOfTheSnakeAtThePlaceOfTheHead() {
  snake.push({x: positionx, y: positiony})
}

function gameInit() {
  positionx = 4
  positiony = 0
  direction = "R"
  checkGameIsOver = false
  snake = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }]
}

function gameOver() {
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
    ctx.fillText(`Your score : ${snake.length - 4}`, 300, 350)

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

function checkGameOver() {
  //if the snake touches the border
  if (positionx > 15 || positionx < 0 || positiony > 15 || positiony < 0) {
    checkGameIsOver = true
  }

  //if the snake touches one of his chunk
  for(let i = 0; i < snake.length; i++) {
    if (positionx == snake[i].x && positiony == snake[i].y) {
      checkGameIsOver = true
    }
  }
}

function drawScore() {
  ctx.strokeStyle = "green";
  ctx.fillStyle = "green"
  ctx.font = "30px Arial";
  ctx.fillText(snake.length - 4, 50, 60);
}

function collisionApple() {
  if (positionx == applex && positiony == appley) {
    CheckApple = true;
    snake.push({x: positionx, y: positiony})
    checkHasNotEaten = false
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function V3generateApple() {
  if (CheckApple) {
    applex = getRandomInt(16);
    appley = getRandomInt(16);
    let applePosition = [applex, appley]
    CheckApple = false;
  }
}

function drawApple() {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "darkgreen";
  ctx.fillStyle = "lightgreen";
  ctx.fillRect((applex * 50), (appley * 50), 50, 50);
  ctx.stroke();
}

function drawSnakeHead() {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "darkred";
  ctx.fillStyle = "red"; //TODO : find light_red
  ctx.fillRect(positionx*50, positiony*50, 50, 50);
  ctx.stroke();
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
