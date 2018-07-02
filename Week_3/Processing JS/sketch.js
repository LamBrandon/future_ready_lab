//define circle object
var circle = {
    diameter:80,
    xCoor: 0,
    yCoor:0,
    color:[255,0,0], //RGB values give circle a red color
    xSpeed: 15,
    ySpeed: 15
}

function setup() {
    createCanvas(640, 480);
    background(20, 255, 460);
    frameRate(15);
}

function draw() {
    //creates drawing for
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);

    
    //if we hit the right edge of the canvas
    if(circle.xCoor >640){
        circle.color = [Math.random()*255,Math.random()*255,Math.random()*255]//makes circle random color
        circle.xSpeed = -circle.xSpeed; //reverse direction
    }else if(circle.xCoor <0){
        circle.color = [Math.random()*255,Math.random()*255,Math.random()*255]; //make the circle random color
        circle.xSpeed = -circle.xSpeed; //changes direction
    }else if(circle.yCoor <0){
        circle.diameter = Math.random()*100; //set range for diamater of circle
        circle.ySpeed = -circle.ySpeed; //changes direction
    }else if(circle.yCoor >480){
        circle.diameter =Math.random()*100; //set range for diameter of circle
        circle.ySpeed = -circle.ySpeed; //changes directiom
    
        
    }
    //change position of circle
    circle.xCoor += circle.xSpeed; 
    circle.yCoor += circle.ySpeed;
}