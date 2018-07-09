//define a circle object
/*var circle = {
    diameter: 80,
    xCoor: 0,
    yCoor: 0,
    color: [255,0,0], //RGB values gives circle a red color
    xSpeed: 5,
    ySpeed: 5
}
*/

//ellipse(x, y, w,)
//ellipse(x, y, w, h)
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


function setup() {
    createCanvas(parseInt(prompt("Enter canvas width")),parseInt(prompt("Enter canvas height"))); //Canvas size
    frameRate(50);
    ballAmount();
}


function randomColor(){
    return[random(0, 255), random(0, 255), random(0, 255)];
}


//Random number & loops until circles equals a number within number array
function ballAmount(){
    var circles = random([2,5,9,16]);
    for(var numBall = 0; numBall < circles; numBall ++){
        circleList.push(new Circle(0,0, 80, [random(0, 255), random(0, 255), random(0, 255)], random(0, 20), random(0, 20))); //adds new circles to empty array
    };
}

//empty array
var circleList = [];


function draw(){
    background(255,255,255); //White Background

    
    for(var i = 0; i < circleList.length; i++){
        fill(circleList[i].color);
        ellipse(circleList[i].xCoor, circleList[i].yCoor, circleList[i].diameter);
        
        //Hit the right and left side of canvas
        if(circleList[i].xCoor > width || circleList[i].xCoor <0){
            circleList[i].color = [random(0,255), random(0,255), random(0,255)] //Changes to random Color
            circleList[i].xSpeed = -circleList[i].xSpeed; //changes direction


        //Hit the right and left side of canvas
        }if(circleList[i].yCoor < 0 || circleList[i].yCoor > height){
            circleList[i].diameter = random(0,100); //changes to random diameter 
            circleList[i].ySpeed = -circleList[i].ySpeed; //changes direction
        }
            
        //changes position of circle
        circleList[i].xCoor += circleList[i].xSpeed;
        circleList[i].yCoor += circleList[i].ySpeed;
    }
}