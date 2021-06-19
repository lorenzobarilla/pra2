//variables
var myInitLoc;

var currentLat;
var currentLon;

//?????????????????????????????
// var showPosition;



var myCircle;
var myCanvas;

const fencePosIncr = 0.00008;//in coordinates



function preload() {
  // put preload code here
  myInitLoc = getCurrentPosition();

}

function setup() {
  // noCanvas();
  myCanvas = createCanvas(600, 600);
  background("red");
  fill("white");
  myCircle = circle(myCanvas.width/2, myCanvas.height/2, 15);


  //Get device position every 10ms and execute callback showPosition
  intervalCurrentPosition(showPosition, 10);

}


function draw() {
  // put drawing code here

  myCircle.x = map(currentLong, myInitLoc.longitude - fencePosIncr, myInitLoc.longitude + fencePosIncr, 0, myCanvas.width);
  myCircle.y = map(currentLat, myInitLoc.latitude - fencePosIncr, myInitLoc.latitude + fencePosIncr, 0, myCanvas.height);

}


//callback when intervalCurrentPosition is executed
function showPosition(position) {
  currentLat = position.latitude;
  currentLon = position.longitude;


  var latVariat = (currentLat - myInitLoc.latitude).toFixed(6);
  var longVariat = (currentLon - myInitLoc.longitude).toFixed(6);


  // myCircle.x = map(currentLong, myInitLoc.longitude - fencePosIncr * 2, myInitLoc.longitude + fencePosIncr * 2, 0, myCanvas.width);
  // myCircle.y = map(currentLat, myInitLoc.latitude - fencePosIncr * 2, myInitLoc.latitude + fencePosIncr * 2, 0, myCanvas.height);

}
