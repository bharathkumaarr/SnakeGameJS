const playBoard = document.querySelector('.playboard');

let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;

const changeFoodPosition = () => {
    //0 - 30 value as food position
    foodX = Math.floor(Math.random()*30)+1;
    foodY = Math.floor(Math.random()*30)+1;
}

const changeDirection = (e) => {
    if(e.key === "ArrowUp") { 
        velocityX = 0; 
        velocityY = -1; 
    } else if(e.key === "ArrowDown") { 
        velocityX = 0; 
        velocityY = 1; 
    } else if(e.key === "ArrowLeft") { 
        velocityX = -1;
        velocityY = 0;
    } else if(e.key === "ArrowRight") { 
        velocityX = 1; 
        velocityY = 0;
    }

}

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`

    if (snakeX === foodX && snakeY===foodY) {
        changeFoodPosition();
        snakeBody.push([foodX,foodY])
        console.log(snakeBody);
    } 
    for (let i = snakeBody.length-1; i>0; i--) {
        snakeBody[i] = snakeBody[i-1]
        
    }

    snakeBody[0] = [snakeX,snakeY]

    snakeX += velocityX;
    snakeY += velocityY;

    for (let i = 0; i < snakeBody.length; i++) {
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`
        
        
    }
    playBoard.innerHTML = htmlMarkup;
}
changeFoodPosition();
setInterval(initGame, 125);

document.addEventListener('keydown',changeDirection);