export class snakeclass {
    
    constructor() {
        let positionx = 4, positiony = 0                                                //Position of the head of the snake
        let direction = 'R'                                                             //Direction the snake is going (R = Right | L = Left | U = Up | D = Down)
        let snake = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }]    //coordinates of each chunk of the snake
    }

    testestestest() {

    }

    manageSnakes() {
        addAChunckOfTheSnakeAtThePlaceOfTheHead()
        moveTheHead()

        deleteSnakeTail()
        drawAllSnake()
    }

    //add a chunk of the snake where the head is
    addAChunckOfTheSnakeAtThePlaceOfTheHead() {
        snake.push({ x: positionx, y: positiony })
    }

    //Moving the snake
    moveTheHead() {
        if (direction == 'R') { ++positionx } //Going right
        else if (direction == 'L') { --positionx } //Going left
        else if (direction == 'D') { ++positiony } //Going up
        else if (direction == 'U') { --positiony } //Going down
    }

    //Remove a chunk of the snake
    deleteSnakeTail() {
        snake.shift()
    }

    //Draw all the part of the snake
    drawAllSnake() {
        for (let i = 0; i < snake.length; i++) {
            ctx.beginPath()
            ctx.lineWidth = 5
            ctx.strokeStyle = "pink"
            ctx.fillStyle = "red"
            ctx.fillRect(snake[i].x * 50, snake[i].y * 50, 50, 50)
            ctx.stroke()
        }
    }
}