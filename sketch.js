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
var fenceNum;

var fence0;
var fence1;
var fence2;
var fence3;
var fence4;
var fence5;
var fence6;
var fence7;
var fence8;


function preload() {
  // put preload code here
  myInitLoc = getCurrentPosition();

  intervalCurrentPosition(showPosition, 50);
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
  fenceNum = document.querySelector('#fence-num');



  latInit.innerHTML = myInitLoc.latitude;
  longInit.innerHTML = myInitLoc.longitude;


  //FENCES
  const fenceRadius = 0.002; //in km
  const fencePosIncr = 0.000025;

  fenceOptions = {
  enableHighAccuracy: false,
  };

  const fence0LatIncr = 0;
  const fence0LongIncr = 0;
  const fence0LatPos = myInitLoc.latitude + fence0LatIncr;
  const fence0LongPos = myInitLoc.longitude + fence0LongIncr;
  fence1 = new geoFenceCircle(fence0LatPos, fence0LongPos, fenceRadius, insideTheFence0, outsideTheFence, 'km', fenceOptions);


  const fence1LatIncr = fencePosIncr;
  const fence1LongIncr = -fencePosIncr;
  const fence1LatPos = myInitLoc.latitude + fence1LatIncr;
  const fence1LongPos = myInitLoc.longitude + fence1LongIncr;
  fence1 = new geoFenceCircle(fence1LatPos, fence1LongPos, fenceRadius, insideTheFence1, outsideTheFence, 'km', fenceOptions);


  const fence2LatIncr = fencePosIncr;
  const fence2LongIncr = 0;
  const fence2LatPos = myInitLoc.latitude + fence2LatIncr;
  const fence2LongPos = myInitLoc.longitude + fence2LongIncr;
  fence2 = new geoFenceCircle(fence2LatPos, fence2LongPos, fenceRadius, insideTheFence2, outsideTheFence, 'km', fenceOptions);

  const fence3LatIncr = fencePosIncr;
  const fence3LongIncr = fencePosIncr;
  const fence3LatPos = myInitLoc.latitude + fence3LatIncr;
  const fence3LongPos = myInitLoc.longitude + fence3LongIncr;
  fence3 = new geoFenceCircle(fence3LatPos, fence3LongPos, fenceRadius, insideTheFence3, outsideTheFence, 'km', fenceOptions);

  const fence4LatIncr = 0;
  const fence4LongIncr = -fencePosIncr;
  const fence4LatPos = myInitLoc.latitude + fence4LatIncr;
  const fence4LongPos = myInitLoc.longitude + fence4LongIncr;
  fence4 = new geoFenceCircle(fence4LatPos, fence4LongPos, fenceRadius, insideTheFence4, outsideTheFence, 'km', fenceOptions);

  const fence5LatIncr = 0;
  const fence5LongIncr = fencePosIncr;
  const fence5LatPos = myInitLoc.latitude + fence5LatIncr;
  const fence5LongPos = myInitLoc.longitude + fence5LongIncr;
  fence5 = new geoFenceCircle(fence5LatPos, fence5LongPos, fenceRadius, insideTheFence5, outsideTheFence, 'km', fenceOptions);

  const fence6LatIncr = -fencePosIncr;
  const fence6LongIncr = -fencePosIncr;
  const fence6LatPos = myInitLoc.latitude + fence6LatIncr;
  const fence6LongPos = myInitLoc.longitude + fence6LongIncr;
  fence6 = new geoFenceCircle(fence6LatPos, fence6LongPos, fenceRadius, insideTheFence6, outsideTheFence, 'km', fenceOptions);

  const fence7LatIncr = -fencePosIncr;
  const fence7LongIncr = 0;
  const fence7LatPos = myInitLoc.latitude + fence7LatIncr;
  const fence7LongPos = myInitLoc.longitude + fence7LongIncr;
  fence7 = new geoFenceCircle(fence7LatPos, fence7LongPos, fenceRadius, insideTheFence7, outsideTheFence, 'km', fenceOptions);

  const fence8LatIncr = -fencePosIncr;
  const fence8LongIncr = fencePosIncr;
  const fence8LatPos = myInitLoc.latitude + fence8LatIncr;
  const fence8LongPos = myInitLoc.longitude + fence8LongIncr;
  fence8 = new geoFenceCircle(fence8LatPos, fence8LongPos, fenceRadius, insideTheFence8, outsideTheFence, 'km', fenceOptions);
}


function insideTheFence0() {
  testBg.style.backgroundColor = "black";
  fenceNum.innerHTML = "0";
}
function insideTheFence1() {
  testBg.style.backgroundColor = "red";
  fenceNum.innerHTML = "1";
}
function insideTheFence2() {
  testBg.style.backgroundColor = "blue";
  fenceNum.innerHTML = "2";
}
function insideTheFence3() {
  testBg.style.backgroundColor = "yellow";
  fenceNum.innerHTML = "3";
}
function insideTheFence4() {
  testBg.style.backgroundColor = "green";
  fenceNum.innerHTML = "4";
}
function insideTheFence5() {
  testBg.style.backgroundColor = "pink";
  fenceNum.innerHTML = "5";
}
function insideTheFence6() {
  testBg.style.backgroundColor = "orange";
  fenceNum.innerHTML = "6";
}
function insideTheFence7() {
  testBg.style.backgroundColor = "purple";
  fenceNum.innerHTML = "7";
}
function insideTheFence8() {
  testBg.style.backgroundColor = "cyan";
  fenceNum.innerHTML = "8";
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
