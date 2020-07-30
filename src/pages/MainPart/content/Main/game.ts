let img = new Image();
img.src =  require('../../images/moto.png');
img.width = img.naturalWidth
img.height = img.naturalHeight


export const game = async () => {

    let canvas: any = document.querySelector("#canv");

    canvas.width = window.innerWidth;

    let ctx = canvas.getContext("2d");
    let x = canvas.width;
    let y = canvas.height;
    let dx = 8;
    let dy = -8;
    let paddleHeight = img.naturalHeight / 2;
    let paddleWidth = img.naturalWidth;
    let paddleX = 0;
    let rightPressed = false;
    let leftPressed = false;

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    
    function keyDownHandler(e: any) {
        if (e.key === "Right" || e.key === "ArrowRight") {
            rightPressed = true;
        }
        else if (e.key === "Left" || e.key === "ArrowLeft") {
            leftPressed = true;
        }
    }
    
    function keyUpHandler(e: any) {
        if (e.key === "Right" || e.key === "ArrowRight") {
            rightPressed = false;
        }
        else if (e.key === "Left" || e.key === "ArrowLeft") {
            leftPressed = false;
        }
    }

    function drawPaddle() {
        ctx.beginPath();
        ctx.fill();
        ctx.drawImage(img, paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ctx.closePath();
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawPaddle();
        
        if (x + dx > canvas.width || x + dx) {
            dx = -dx;
        }
        if (y + dy > canvas.height || y + dy) {
            dy = -dy;
        }
        
        if (rightPressed) {
            paddleX += 3;
            if (paddleX + paddleWidth > canvas.width) {
                paddleX = canvas.width - paddleWidth;
            }
        }
        else if (leftPressed) {
            paddleX -= 3;
            if (paddleX < 0) {
                paddleX = 0;
            }
        }
        
        x += dx;
        y += dy;
    }

    setInterval(draw, 5);
}