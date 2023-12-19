import '../css/style.css'
import snakeclass from './snake'


/* TODO :
Using classes (snake/apple)
use "rest" "..."
*/

////////////////////////////////////////////////////////////// Variable declaration //////////////////////////////////////////////////

let applex = getRandomInt(16), appley = getRandomInt(16)  //Apple coordinate
let positionx = 4, positiony = 0                          //Position of the head of the snake
let direction = 'R'                                       //Direction the snake is going (R = Right | L = Left | U = Up | D = Down)
let checkApple = false                                    //Check whether there's an apple in the game
let checkGameIsRunning = true                             //Check whether the game is playing or it's in the game over menu
let checkGameIsOver                                       //Check whether the game is over
let appleSpawnIsOkay                                      //Check whether the apple is spawning at a good position
let checkOneMoveByFrame                                   //Check whether there was already an input pressed this frame

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
const speed = 150                                         //Speed at which the game is refreshing

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

  addAChunckOfTheSnakeWhereTheHeadIs()
  deleteSnakeTail()

  generateApple()

  drawApple()

  drawScore()

  drawAllSnake()
  moveTheHead()

  checkGameIsOver ? gameOver():undefined

  checkGameOver()
  
  checkOneMoveByFrame = false
}

//Draw all the part of the snake
function drawAllSnake() {
  //Foreach chunk of the snake we draw it
  snake.forEach ((element) => {
    ctx.beginPath()
    ctx.lineWidth = 1
    ctx.strokeStyle = "white"
    //If the it's the first element it is in pink because it is the head
    element.x == positionx && element.y == positiony ? ctx.fillStyle = "pink" : ctx.fillStyle = "red"
    ctx.fillRect(element.x * 50, element.y * 50, 50, 50)
    ctx.strokeRect(element.x * 50, element.y * 50, 50, 50)
    ctx.stroke()
  }
  )
}

//Remove a chunk of the snake
function deleteSnakeTail() {
  //Remove the last chunk of the snake
  snake.shift()
}

//Moving the snake depending the direction
function moveTheHead() {
  direction == "R" ? ++positionx:undefined
  direction == "L" ? --positionx:undefined
  direction == "D" ? ++positiony:undefined
  direction == "U" ? --positiony:undefined
}

//Add a chunk of the snake where the head is
function addAChunckOfTheSnakeWhereTheHeadIs() {
  //Add a new chunk to the snake where the head is
  snake.push({ x: positionx, y: positiony })
}

//initialise a new game
function gameInit() {
  positionx = 4
  positiony = 0
  direction = "R"
  checkGameIsOver = false
  snake = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }]
  checkApple = true
}

//Draw the game over menu
function gameOver() {
  checkGameIsRunning = false

  //Draw a new background
  ctx.fillStyle = 'purple'
  ctx.fillRect(0, 0, 800, 800)

  //Write the game over
  ctx.fillStyle = 'black'
  ctx.font = "100px Arial"
  ctx.fillText("GAME OVER", 100, 300)

  //Write the score
  ctx.font = "30px Arial"
  ctx.fillText(`Your score : ${snake.length - 4}`, 300, 350)

  //Draw the restart button
  ctx.fillStyle = 'red'
  ctx.fillRect(250, 400, 300, 100)

  //Draw the border of the restart button
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 5
  ctx.strokeRect(250, 400, 300, 100)

  //Write the restart in the button
  ctx.fillStyle = 'black'
  ctx.font = "60px Arial"
  ctx.fillText("Restart", 300, 470)
}

//Check the game is over
function checkGameOver() {
  //In case the snake touches the border
  positionx > 15 || positionx < 0 || positiony > 15 || positiony < 0 ? checkGameIsOver = true : undefined

  //In case the snake touches one of his chunk
  snake.forEach((element) => positionx == element.x && positiony == element.y ? checkGameIsOver = true : undefined)
}

//Draw the score
function drawScore() {
  ctx.fillStyle = "green"
  ctx.font = "30px Arial"
  ctx.fillText(snake.length - 4, 50, 60)
}

//Check if the snake has eaten an apple
function collisionApple() {
  checkGameIsOver ? undefined : positionx == applex && positiony == appley ? checkApple = true && snake.push({x: positionx, y: positiony}) : undefined
}

//Get a random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

//Generate a new apple
function generateApple() {
  if (checkApple) {
    while (!appleSpawnIsOkay) {
      applex = getRandomInt(16)
      appley = getRandomInt(16)
      checkApple = false
      appleSpawnIsOkay = true

      //Check if the apple is spawning on a chunk of the snake
      snake.forEach((element) => element.x == applex && element.y == appley ? appleSpawnIsOkay = false : undefined)
    }
    appleSpawnIsOkay = false
  }
}

//Draw the apple
function drawApple() {
  ctx.beginPath()
  ctx.lineWidth = 1
  ctx.fillStyle = "lightgreen"
  ctx.strokeStyle = "white"
  ctx.fillRect((applex * 50), (appley * 50), 50, 50)
  ctx.strokeRect((applex * 50), (appley * 50), 50, 50)
  ctx.stroke()
}

//event if the player click on an arrow
function arrowclicked(event) {
  checkOneMoveByFrame ? undefined : event.keyCode == 37 && direction != 'R' ? direction = 'L' : event.keyCode == 39 && direction != 'L' ? direction = 'R' : event.keyCode == 38 && direction != 'D' ? direction = 'U' : event.keyCode == 40 && direction != 'U' ? direction = 'D' : undefined 
  checkOneMoveByFrame = true
}

///////////////////////////////////////////////////////////////////////// Snippet ///////////////////////////////////////////////

//Function to get the mouse position
function getMousePos(canvas, event) {
  let restartButton = canvas.getBoundingClientRect()
  return {
    x: event.clientX - restartButton.left,
    y: event.clientY - restartButton.top,
  }
}

//Function to check whether a point is inside the rectangle
let isInside = (pos, restartButton) => pos.x > restartButton.x && pos.x < restartButton.x + restartButton.width && pos.y < restartButton.y + restartButton.height && pos.y > restartButton.y

//Binding the click event on the canvas
canvas.addEventListener('click', function (evt) {
  var mousePos = getMousePos(canvas, evt)
  if (!checkGameIsRunning) {
    if (isInside(mousePos, restartButton)) {
      checkGameIsRunning = true

      //Initialise the variable for a new game
      gameInit()
    }
  }
}, false)

//Loop
requestAnimationFrame(move)
