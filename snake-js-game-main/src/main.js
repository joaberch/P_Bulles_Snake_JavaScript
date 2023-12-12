import '../css/style.css'
//import snakeclass from './snake'


/* TODO :
check copy/paste
namespace/classes/commit log
Test
Using classes (snake/apple)
use fonction fleches
use "rest" "..."
use snake.forEach
*/

////////////////////////////////////////////////////////////// Variable declaration //////////////////////////////////////////////////

const speed = 150                                         //Speed at which the game is refreshing
let applex = getRandomInt(16), appley = getRandomInt(16)  //Apple coordinate
let positionx = 4, positiony = 0                          //Position of the head of the snake
let direction = 'R'                                       //Direction the snake is going (R = Right | L = Left | U = Up | D = Down)
let CheckApple = false                                    //Check if there's an apple in the game
let checkGameIsRunning = true                             //Check if the game is playing or if it's in the game over menu
let checkGameIsOver                                       //Check if the game is over
let appleSpawnIsOkay                                      //Check if the apple is spawning at the good position
let checkOneMoveByFrame                                   //Check if there was already an input this frame

//information about the restart button
let restartButton = {
  x: 250,
  y: 400,
  width: 300,
  height: 100,
}

let snake = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }]  //coordinates of each chunk of the snake

//const declaration
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const move = () => {
  //draw the grid
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, 800, 800)

  //All function for the game are inside
  main()
  
  //Refresh every seconds
  setTimeout(() => {
    requestAnimationFrame(move)
  }, speed)
}

//////////////////////////////////////////////////    EVENT    ////////////////////////////////////////////////
document.addEventListener('keydown', arrowclicked) //Change the direction

//////////////////////////////////////////////////   Function   ///////////////////////////////////////////////
function main() {
  collisionApple()
  manageSnake()
  generateApple()
  drawApple()
  drawScore()
  checkGameOver()
  checkGameIsOver ? gameOver():undefined
  checkOneMoveByFrame = false
}

function manageSnake() {
  addAChunckOfTheSnakeAtThePlaceOfTheHead()
  moveTheHead()
  deleteSnakeTail()
  drawAllSnake()
}

//Draw all the part of the snake
function drawAllSnake() {
  for (let i = 0; i < snake.length; i++) {
    ctx.beginPath()
    ctx.lineWidth = 5
    i == snake.length-1 ? ctx.fillStyle = "blue" : ctx.fillStyle = "red"
    ctx.fillRect(snake[i].x * 50, snake[i].y * 50, 50, 50)
    ctx.stroke()
  }
}

//Remove a chunk of the snake
function deleteSnakeTail() {
  snake.shift()
}

//Moving the snake
function moveTheHead() {
  direction == "R" ? ++positionx:undefined
  direction == "L" ? --positionx:undefined
  direction == "D" ? ++positiony:undefined
  direction == "U" ? --positiony:undefined
}

//add a chunk of the snake where the head is
function addAChunckOfTheSnakeAtThePlaceOfTheHead() {
  snake.push({ x: positionx, y: positiony })
}

//initialise a new game
function gameInit() {
  positionx = 4
  positiony = 0
  direction = "R"
  checkGameIsOver = false
  snake = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }]
  CheckApple = true
}

//Draw the game over menu
function gameOver() {
  checkGameIsRunning = false

  //draw a new background
  ctx.fillStyle = 'purple'
  ctx.fillRect(0, 0, 800, 800)

  //Write the game over
  ctx.fillStyle = 'black'
  ctx.font = "100px Arial"
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

//Check the game is over
function checkGameOver() {
  //if the snake touches the border
  positionx > 15 || positionx < 0 || positiony > 15 || positiony < 0 ? checkGameIsOver = true : undefined
  /*if (positionx > 15 || positionx < 0 || positiony > 15 || positiony < 0) {
    checkGameIsOver = true
  }*/

  //if the snake touches one of his chunk
  for (let i = 0; i < snake.length; i++) {
    positionx == snake[i].x && positiony == snake[i].y ? checkGameIsOver = true : undefined
    /*if (positionx == snake[i].x && positiony == snake[i].y) {
      checkGameIsOver = true
    }*/
  }
}

//draw the score
function drawScore() {
  ctx.fillStyle = "green"
  ctx.font = "30px Arial"
  ctx.fillText(snake.length - 4, 50, 60)
}

//check if the snake has eaten an apple
function collisionApple() {
  positionx == applex && positiony == appley ? CheckApple = true && snake.push({x: positionx, y: positiony}) : undefined
  /*if (positionx == applex && positiony == appley) {
    CheckApple = true
    snake.push({ x: positionx, y: positiony })
  }*/
}

//get a random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

//generate a new apple
function generateApple() {
  if (CheckApple) {
    while (!appleSpawnIsOkay) {
      applex = getRandomInt(16)
      appley = getRandomInt(16)
      //let applePosition = [applex, appley]
      CheckApple = false

      for (let i = 0; i < snake.length; ++i) {
        if (snake[i].x == applex && snake[i].y == appley) {
          appleSpawnIsOkay = false
        } else {
          appleSpawnIsOkay = true
        }
      }
    }
    appleSpawnIsOkay = false
  }
}

//draw the apple
function drawApple() {
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.fillStyle = "lightgreen"
  ctx.fillRect((applex * 50), (appley * 50), 50, 50)
  ctx.stroke()
}

//event if the player click on an arrow
function arrowclicked(event) {
  if (!checkOneMoveByFrame) {
    if (event.keyCode == 37 && direction != 'R') { direction = 'L'; checkOneMoveByFrame = true }
    else if (event.keyCode == 39 && direction != 'L') { direction = 'R'; checkOneMoveByFrame = true }
    else if (event.keyCode == 38 && direction != 'D') { direction = 'U'; checkOneMoveByFrame = true }
    else if (event.keyCode == 40 && direction != 'U') { direction = 'D'; checkOneMoveByFrame = true }
  }
}

///////////////////////////////////////////////////////////////////////// Snippet ///////////////////////////////////////////////

//Function to get the mouse position
function getMousePos(canvas, event) {
  var restartButton = canvas.getBoundingClientRect()
  return {
    x: event.clientX - restartButton.left,
    y: event.clientY - restartButton.top,
  }
}

//Function to check whether a point is inside a rectangle
function isInside(pos, restartButton) {
  return pos.x > restartButton.x && pos.x < restartButton.x + restartButton.width && pos.y < restartButton.y + restartButton.height && pos.y > restartButton.y
}

//Binding the click event on the canvas
canvas.addEventListener('click', function (evt) {
  var mousePos = getMousePos(canvas, evt)
  if (!checkGameIsRunning) {
    if (isInside(mousePos, restartButton)) {
      checkGameIsRunning = true
      main()

      //Initialise the variable for a new game
      gameInit()
    }
  }
}, false)

//loop
requestAnimationFrame(move)
