//variables
var myInitLoc;

var currentLat;
var currentLon;
var showPosition;

//html div
var latCurr;
var longCurr;
var latInit;
var longInit;
var latIncr;
var longIncr;
var testBg;

var fence1;
var fence2;
var fence3;


function preload() {
  // put preload code here
  myInitLoc = getCurrentPosition();

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

  latIncr = document.querySelector('#lat-incr');
  longIncr = document.querySelector('#long-incr');

  testBg = document.querySelector('#test-bg');




  console.log(myInitLoc);

  latInit.innerHTML = myInitLoc.latitude;
  longInit.innerHTML = myInitLoc.longitude;


  //FENCES
  const fenceRadius = 0.001; //in km

  fenceOptions = {
  enableHighAccuracy: true,
  };

  const fence1LatIncr = 0.000025;
  const fence1LongIncr = 0.000025;
  const fence1LatPos = myInitLoc.latitude + fence1LatIncr;
  const fence1LongPos = myInitLoc.longitude + fence1LongIncr;
  fence1 = new geoFenceCircle(fence1LatPos, fence1LongPos, fenceRadius, insideTheFence, outsideTheFence, 'km', fenceOptions);


  const fence2LatIncr = -0.000020;
  const fence2LongIncr = -0.000020;
  const fence2LatPos = myInitLoc.latitude + fence2LatIncr;
  const fence2LongPos = myInitLoc.longitude + fence2LongIncr;
  fence2 = new geoFenceCircle(fence2LatPos, fence2LongPos, fenceRadius, insideTheFence2, outsideTheFence, 'km', fenceOptions);

  const fence3LatIncr = 0.000010;
  const fence3LongIncr = 0.000010;
  const fence3LatPos = myInitLoc.latitude + fence3LatIncr;
  const fence3LongPos = myInitLoc.longitude + fence3LongIncr;
  fence3 = new geoFenceCircle(fence3LatPos, fence3LongPos, fenceRadius, insideTheFence3, outsideTheFence, 'km', fenceOptions);
}

function insideTheFence() {
  testBg.style.backgroundColor = "red";
  console.log("fence 1");
}
function insideTheFence2() {
  testBg.style.backgroundColor = "blue";
  console.log("fence 2");
}
function insideTheFence3() {
  testBg.style.backgroundColor = "yellow";
  console.log("fence 3");

}

function outsideTheFence() {

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

  var latVariat = (currentLat - myInitLoc.latitude).toFixed(6);
  var longVariat = (currentLon - myInitLoc.longitude).toFixed(6);

  latIncr.innerHTML = latVariat;
  longIncr.innerHTML = longVariat;
}
