//variables

//GPS
var myInitLoc;
var currentLat;
var currentLon;

const fencePosIncr = 0.00012;//in coordinates

//player
var myCircle;
var myCircleX;
var myCircleY;

//div html
var myPosX;
var myPosY;

var myCanvas;


var fence1;
var fence1circle;
var fence1circleX;
var fence1circleY;
let fence1LatPos;
let fence1LongPos;




function preload() {
  myInitLoc = getCurrentPosition();
}

function setup() {

  myPosX = document.querySelector('#pos-x');
  myPosY = document.querySelector('#pos-y');

  myCanvas = createCanvas(600, 600);


  //Get device position every 10ms and execute callback showPosition
  intervalCurrentPosition(showPosition, 50);

  myCircle = new Ball('white', 25);

  //FENCES
  const fenceRadius = 0.006; //in km

  fenceOptions = {
    enableHighAccuracy: true,
  };

  const fence1LatIncr = fencePosIncr;
  const fence1LongIncr = -fencePosIncr;
  fence1LatPos = myInitLoc.latitude + fence1LatIncr;
  fence1LongPos = myInitLoc.longitude + fence1LongIncr;
  fence1 = new geoFenceCircle(fence1LatPos, fence1LongPos, fenceRadius, insideTheFence1, outsideTheFence, 'km', fenceOptions);

  fence1circle = new Ball('yellow', 50);
  fence1circleX = map(fence1LongPos, myInitLoc.longitude - fencePosIncr, myInitLoc.longitude + fencePosIncr, 0, myCanvas.width);
  fence1circleY = map(fence1LatPos, myInitLoc.latitude - fencePosIncr, myInitLoc.latitude + fencePosIncr, 0, myCanvas.height);





}


function insideTheFence1() {}
function outsideTheFence() {}

function draw() {
  clear();
  background("green");




  myCircle.display(myCircleX, myCircleY);

  fence1circle.display(fence1circleX, fence1circleY);

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


function Ball(_fill, _size) {
  // Properties defined by constructor
  this.fill = _fill;
  this.size = _size;


  this.display = function(_x, _y) {
    this.x = _x;
    this.y = _y;
	  fill(this.fill);
	  ellipse(this.x, this.y, this.size);
  }
}
