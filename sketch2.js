//variables

//GPS
var myInitLoc;
var currentLat;
var currentLon;

const fencePosIncr = 0.00015;//in coordinates

//player
var myCircle;
var myCircleX;
var myCircleY;

//div html
var myPosX;
var myPosY;

var myCanvas;


var fence1;
let fence1LatPos;
let fence1LongPos;
var fence1circle;
var fence1circleX;
var fence1circleY;


var fence3;
let fence3LatPos;
let fence3LongPos;
var fence3circle;
var fence3circleX;
var fence3circleY;

var fence6;
let fence6LatPos;
let fence6LongPos;
var fence6circle;
var fence6circleX;
var fence6circleY;

var fence8;
let fence8LatPos;
let fence8LongPos;
var fence8circle;
var fence8circleX;
var fence8circleY;





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



  const fence3LatIncr = fencePosIncr;
  const fence3LongIncr = fencePosIncr;
  fence3LatPos = myInitLoc.latitude + fence3LatIncr;
  fence3LongPos = myInitLoc.longitude + fence3LongIncr;
  fence3 = new geoFenceCircle(fence3LatPos, fence3LongPos, fenceRadius, insideTheFence3, outsideTheFence, 'km', fenceOptions);

  fence3circle = new Ball('blue', 50);
  fence3circleX = map(fence3LongPos, myInitLoc.longitude - fencePosIncr, myInitLoc.longitude + fencePosIncr, 0, myCanvas.width);
  fence3circleY = map(fence3LatPos, myInitLoc.latitude - fencePosIncr, myInitLoc.latitude + fencePosIncr, 0, myCanvas.height);


  const fence6LatIncr = -fencePosIncr;
  const fence6LongIncr = -fencePosIncr;
  const fence6LatPos = myInitLoc.latitude + fence6LatIncr;
  const fence6LongPos = myInitLoc.longitude + fence6LongIncr;
  fence6 = new geoFenceCircle(fence6LatPos, fence6LongPos, fenceRadius, insideTheFence6, outsideTheFence, 'km', fenceOptions);

  fence6circle = new Ball('red', 50);
  fence6circleX = map(fence6LongPos, myInitLoc.longitude - fencePosIncr, myInitLoc.longitude + fencePosIncr, 0, myCanvas.width);
  fence6circleY = map(fence6LatPos, myInitLoc.latitude - fencePosIncr, myInitLoc.latitude + fencePosIncr, 0, myCanvas.height);



  const fence8LatIncr = -fencePosIncr;
  const fence8LongIncr = fencePosIncr;
  const fence8LatPos = myInitLoc.latitude + fence8LatIncr;
  const fence8LongPos = myInitLoc.longitude + fence8LongIncr;
  fence8 = new geoFenceCircle(fence8LatPos, fence8LongPos, fenceRadius, insideTheFence8, outsideTheFence, 'km', fenceOptions);

  fence8circle = new Ball('pink', 50);
  fence8circleX = map(fence8LongPos, myInitLoc.longitude - fencePosIncr, myInitLoc.longitude + fencePosIncr, 0, myCanvas.width);
  fence8circleY = map(fence8LatPos, myInitLoc.latitude - fencePosIncr, myInitLoc.latitude + fencePosIncr, 0, myCanvas.height);


}


function insideTheFence1() {}
function insideTheFence3() {}
function insideTheFence6() {}
function insideTheFence8() {}



function outsideTheFence() {}

function draw() {
  clear();
  background("green");




  myCircle.display(myCircleX, myCircleY);

  fence1circle.display(fence1circleX, fence1circleY);
  fence3circle.display(fence3circleX, fence3circleY);
  fence6circle.display(fence6circleX, fence6circleY);
  fence8circle.display(fence8circleX, fence8circleY);




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
