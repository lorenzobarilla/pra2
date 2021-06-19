//variables

//GPS
var myInitLoc;
var currentLat;
var currentLon;

const fencePosIncr = 0.00008;//in coordinates

//player
var myCircle;
var myCircleX;
var myCircleY;

//div html
var myPosX;
var myPosY;

var myCanvas;




function preload() {
  myInitLoc = getCurrentPosition();
}

function setup() {

  myPosX = document.querySelector('#pos-x');
  myPosY = document.querySelector('#pos-y');

  myCanvas = createCanvas(600, 600);


  //Get device position every 10ms and execute callback showPosition
  intervalCurrentPosition(showPosition, 100);

  myCircle = new Ball(myCircleX, myCircleY);



}


function draw() {
  clear();
  background("green");




  myCircle.display(myCircleX, myCircleY);

}


//callback when intervalCurrentPosition is executed
function showPosition(position) {
  currentLat = position.latitude;
  currentLon = position.longitude;

  myCircleX  = map(currentLon, myInitLoc.longitude - fencePosIncr, myInitLoc.longitude + fencePosIncr, 0, myCanvas.width);
  myCircleY = map(currentLat, myInitLoc.latitude - fencePosIncr, myInitLoc.latitude + fencePosIncr, 0, myCanvas.height);

  myPosX.innerHTML = myCircleX;
  myPosY.innerHTML = myCircleY;


}


function Ball() {
  // Properties defined by constructor

  // Hardcoded properties
  this.size = 50;


  // Methods
  // this.move = function() {
 	// this.x += this.speed;
 	// this.y += this.speed;
  // }

  this.display = function(_x, _y) {
    this.x = _x;
    this.y = _y;
	fill("white");
	ellipse(this.x, this.y, this.size);
  }
}
