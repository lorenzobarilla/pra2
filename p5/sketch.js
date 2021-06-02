//variables
var myInitLoc;

var currentLat;
var currentLon;
var showPosition;


var latCurr;
var longCurr;
var latInit;
var longInit;


function preload(){
  // put preload code here
  myInitLoc =  getCurrentPosition();

  intervalCurrentPosition(showPosition, 1000);
}

function setup() {
  noCanvas();
  // createCanvas(windowWidth, windowHeight);
  // put setup code here
  latCurr = document.querySelector('#lat-curr');
  longCurr = document.querySelector('#long-curr');

  latInit = document.querySelector('#lat-init');
  longInit = document.querySelector('#long-init');
  console.log(myInitLoc);
}

function draw() {
  // put drawing code here
}


//callback when intervalCurrentPosition is executed
function showPosition(position) {
  currentLat = position.latitude;
  currentLon = position.longitude;

  latCurr.innerHTML = currentLat;
  longCurr.innerHTML = currentLon;
}
