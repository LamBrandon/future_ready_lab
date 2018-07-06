//define circle object
/*
var circle = {
    diameter:80,
    xCoor: 0,
    yCoor:0,
    color:[255,0,0], //RGB values give circle a red color
    xSpeed: 15,
    ySpeed: 15
}
*/
function Circle(x, y, size, color, xSpeed, ySpeed){
    this.xCoor = x;
    this.yCoor = y;
    this.diameter = size;
    this.color = color;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
}

var circle = new Circle(0,0,80, [255,0,0], 2, 10);
var circle2 = new Circle(0, 30, 50, 7, 7);
var circleList = [circle, circle2, new Circle(100,0,18)]

function setup() {
    createCanvas(640, 480);
    background(20, 255, 460);
    frameRate(15);
}
function ballAmount() {
    var random = random([2,5,9,16]);
    return ballAmount[random];
}


function draw() {
    //creates drawing for
    background(20, 255, 460)
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);


    //if we hit the right edge of the canvas
    if(circle.xCoor >640 || circle.xCoor <0){
        circle.color = [random(0, 255),random(0, 255),random(0, 255)]//makes circle random color
        circle.xSpeed = -circle.xSpeed; //reverse direction

    }else if(circle.yCoor <0 || circle.yCoor >480){
        circle.diameter = random(0, 100); //set range for diamater of circle
        circle.ySpeed = -circle.ySpeed; //changes direction

        
    }
    //change position of circle
    circle.xCoor += circle.xSpeed; 
    circle.yCoor += circle.ySpeed;
}