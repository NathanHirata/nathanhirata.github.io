var x1 = 20
var y1 = 250

var x2 = 470
var y2 = 250

var xb = 250
var yb = 250

var dy = 5
var dx = 2.5

var score1 = 0
var score2 = 0

var num = 1

var ballColor = "white"

var bar1 = "white"
var bar2 = "white"

var colors = ["red", "white", "blue", "yellow", "green", "brown", "pink", "orange", "lightblue", "purple", "black", "lightgreen"]

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function gameOver() {
    xb = 250
    yb = 250
    dx = 0
    dy = 0
    num++

    x1 = 20
    y1 = 250
    x2 = 470
    y2 = 250

    score1 = 0
    score2 = 0
}

function keyPressed() {
    if (keyCode === 32) {
        dy = 5
        dx = 2.5
        num++
    }

    if (keyCode === 82) {
        gameOver()
    }
}

function resetGame() {
    xb = 250
    yb = 250
    dx = 0
    dy = 0
    num++

    x1 = 20
    y1 = 250
    x2 = 470
    y2 = 250
}

function randColor() {
    var rnum = randomNum(0, colors.length - 1)
    return colors[rnum]
}

function draw() {
    var canvas = createCanvas(500, 500);
    
    canvas.parent('holder');
    
    background("#501F3A");

    if (keyIsDown(87)) {
        y1 -= 5
    }
    if (keyIsDown(83)) {
        y1 += 5
    }

    if (keyIsDown(38)) {
        y2 -= 5
    }
    if (keyIsDown(40)) {
        y2 += 5
    }

    if (y1 < 0) {
        y1 = 0
    } else if (y1 + 50 > 500) {
        y1 = 450
    }

    if (y2 < 0) {
        y2 = 0
    } else if (y2 + 50 > 500) {
        y2 = 450
    }


    fill(bar1)
    rect(x1, y1, 10, 50)
    fill(bar2)
    rect(x2, y2, 10, 50)

    //------------------------------------BALL

    if (num % 2 == 0) {
        xb += dx
        yb += dy
    }

    if (xb + 10 > 500) {
        score2++
        resetGame()

    }

    if (xb - 10 < 0) {
        score1++
        resetGame()

    }

    if (yb + 10 > 500 || yb - 10 < 0) {
        dy = -dy
    }

    if ((xb + 10 > x2) && (yb < y2 + 50 && yb > y2)) {
        dx = -dx
        ballColor = randColor()
        bar2 = randColor()
    }

    if ((xb - 10 < x1 + 10) && (yb < y1 + 50 && yb > y1)) {
        dx = -dx
        ballColor = randColor()
        bar1 = randColor()

    }


    fill(ballColor)
    ellipse(xb, yb, 20, 20)



}

