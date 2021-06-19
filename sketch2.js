//variables
var myInitLoc;

var currentLat;
var currentLon;

//?????????????????????????????
// var showPosition;



var myCircle;
var myCircleX;
var myCircleY;

var myPosX;
var myPosY;


var myCanvas;

const fencePosIncr = 0.00008;//in coordinates



function preload() {
  // put preload code here
  myInitLoc = getCurrentPosition();

}

function setup() {

  myPosX = document.querySelector('#pos-x');
  myPosY = document.querySelector('#pos-y');

  // noCanvas();
  myCanvas = createCanvas(600, 600);
  background("red");
  fill("white");
  //
  // myCircleX = myCanvas.width/2;
  // myCircleY = myCanvas.height/2;




  //Get device position every 10ms and execute callback showPosition
  intervalCurrentPosition(showPosition, 300);

  myCircle = new Ball(myCircleX, myCircleY);



}


function draw() {
  clear();
  background("red");




  myCircle.display(myCircleX, myCircleY);

}


//callback when intervalCurrentPosition is executed
function showPosition(position) {
  currentLat = position.latitude;
  currentLon = position.longitude;


  var latVariat = (currentLat - myInitLoc.latitude).toFixed(6);
  var longVariat = (currentLon - myInitLoc.longitude).toFixed(6);


  myCircleX = map(currentLon, myInitLoc.longitude - fencePosIncr * 2, myInitLoc.longitude + fencePosIncr * 2, 0, myCanvas.width);
  myCircleY = map(currentLat, myInitLoc.latitude - fencePosIncr * 2, myInitLoc.latitude + fencePosIncr * 2, 0, myCanvas.height);

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
