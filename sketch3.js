//variables

//GPS
var myInitLoc;
var currentLat;
var currentLon;

const fencePosIncr = 0.00025;//in coordinates
const fencePosIncr2 = fencePosIncr + 0.00007;//in coordinates



//player
var myCircle;
var myCircleX;
var myCircleY;

//div html
var myPosX;
var myPosY;
var myPosLatIncr;
var myPosLonIncr;

var myCanvas;


var fence1;
let fence1LatPos;
let fence1LongPos;
var fence1circle;
var fence1circleX;
var fence1circleY;
var distanceFence1;
let dist1Txt;
let maxDist1Txt;
var maxDistFence1;
var fence1circleAlpha = 0;



var fence3;
let fence3LatPos;
let fence3LongPos;
var fence3circle;
var fence3circleX;
var fence3circleY;
var distanceFence3;
var fence3circleAlpha = 0;



var fence6;
let fence6LatPos;
let fence6LongPos;
var fence6circle;
var fence6circleX;
var fence6circleY;
var distanceFence6;
var fence6circleAlpha = 0;



var fence8;
let fence8LatPos;
let fence8LongPos;
var fence8circle;
var fence8circleX;
var fence8circleY;
var distanceFence8;
var fence8circleAlpha = 0;




//TERRENO
let phase = 0;
let zoff = 0;
let myRadians = 0.1;
let noiseMax = 0.4;
//aumenta fino a 2
var uiColor = 'white';
var zoffRemap = 0.003;

//SOUNDS
var sound1;
var sound2;
var sound3;
var sound4;

//UI TEXT
let latTxt = 'loading';
let lonTxt = 'loading';

function preload() {
  myInitLoc = getCurrentPosition();

  sound1 = loadSound("./sounds/cat.mp3");
  sound2 = loadSound("./sounds/cow.mp3");
  sound3 = loadSound("./sounds/dog.mp3");
  sound4 = loadSound("./sounds/frog.mp3");

}

function setup() {

  myCanvas = createCanvas(windowWidth, windowHeight);


  //Get device position every 10ms and execute callback showPosition
  intervalCurrentPosition(showPosition, 100);

  //FENCES
  const fenceRadius = 0.008; //in km


  fenceOptions = {
    enableHighAccuracy: true,
  };

  const fence1LatIncr = fencePosIncr;
  const fence1LongIncr = -fencePosIncr;
  fence1LatPos = myInitLoc.latitude + fence1LatIncr;
  fence1LongPos = myInitLoc.longitude + fence1LongIncr;
  fence1 = new geoFenceCircle(fence1LatPos, fence1LongPos, fenceRadius, insideTheFence1, outsideTheFence, 'km', fenceOptions);
  maxDistFence1 = calcGeoDistance(myInitLoc.latitude, myInitLoc.longitude, fence1LatPos, fence1LongPos, 'km') * 1000;
  var fence1color = color(255, 0, 0);

  fence1circle = new Segnaposto(fence1color, 50);



  const fence3LatIncr = fencePosIncr;
  const fence3LongIncr = fencePosIncr;
  fence3LatPos = myInitLoc.latitude + fence3LatIncr;
  fence3LongPos = myInitLoc.longitude + fence3LongIncr;
  fence3 = new geoFenceCircle(fence3LatPos, fence3LongPos, fenceRadius, insideTheFence3, outsideTheFence, 'km', fenceOptions);
  var fence3color = color(0, 255, 0);

  fence3circle = new Segnaposto(fence3color, 50);


  const fence6LatIncr = -fencePosIncr;
  const fence6LongIncr = -fencePosIncr;
  fence6LatPos = myInitLoc.latitude + fence6LatIncr;
  fence6LongPos = myInitLoc.longitude + fence6LongIncr;
  fence6 = new geoFenceCircle(fence6LatPos, fence6LongPos, fenceRadius, insideTheFence6, outsideTheFence, 'km', fenceOptions);
  var fence6color = color(0, 0, 255);

  fence6circle = new Segnaposto(fence6color, 50);



  const fence8LatIncr = -fencePosIncr;
  const fence8LongIncr = fencePosIncr;
  fence8LatPos = myInitLoc.latitude + fence8LatIncr;
  fence8LongPos = myInitLoc.longitude + fence8LongIncr;
  fence8 = new geoFenceCircle(fence8LatPos, fence8LongPos, fenceRadius, insideTheFence8, outsideTheFence, 'km', fenceOptions);
  var fence8color = color(255, 255, 0);

  fence8circle = new Segnaposto(fence8color, 50);

}


function insideTheFence1() {
  background(50, 0, 0);
  if (sound1.isPlaying() == false) {
      sound1.play();
  }
}
function insideTheFence3() {
  background(0, 50, 0);
  if (sound2.isPlaying() == false) {
      sound2.play();
  }
}
function insideTheFence6() {
  background(0, 0, 50);
  if (sound3.isPlaying() == false) {
      sound3.play();
  }
}
function insideTheFence8() {
  background(50, 50, 0);
  if (sound4.isPlaying() == false) {
      sound4.play();
  }
}

function outsideTheFence() {}

function draw() {
  clear();



  if (fence1.insideFence){
    background(30, 0, 0);
  } else if (fence3.insideFence){
    background(0, 30, 0);
  } else if (fence6.insideFence) {
    background(0, 0, 30);
  } else if (fence8.insideFence) {
    background(30, 30, 0);
  } else {
  background("black");
  }
  //TEXT
  push();
  var sizeFont = 25;
  textSize(sizeFont);
  textAlign(RIGHT);
  // textFont(arial);

  fill('white');

  text('PrA_2', windowWidth*0.975, windowHeight*0.025);
  // text('Soundscape Experiecne', windowWidth*0.975, windowHeight*0.025 + sizeFont * 1.25);

  text('LATITUDE', windowWidth*0.975, windowHeight*0.975 -  sizeFont * 4.25);
  text(latTxt, windowWidth*0.975, windowHeight*0.975 - sizeFont * 3);
  text('LONGITUDE', windowWidth*0.975, windowHeight*0.975 - sizeFont * 1.25);
  text(lonTxt, windowWidth*0.975, windowHeight*0.975);

  textAlign(LEFT);
  text('EXPERIENCE_1', windowWidth*0.025, windowHeight*0.975);

  pop();


  push();
  translate(width / 2, height / 2);
  stroke(uiColor);
  strokeWeight(4);
  noFill();

  noiseSeed(1);

  beginShape();
  for (let a = 0; a < TWO_PI; a += radians(myRadians)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 100);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);



  noiseSeed(45);
  var uiColor2 = color(uiColor);
  uiColor2.setAlpha(210);
  stroke(uiColor2);

  beginShape();
  for (let a = 0; a < TWO_PI; a += radians(myRadians)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 5);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

  noiseSeed(18);

  beginShape();
  for (let a = 0; a < TWO_PI; a += radians(myRadians)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 2.5);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

  noiseSeed(4);
  var uiColor3 = color(uiColor);
  uiColor3.setAlpha(170);
  stroke(uiColor3);


  beginShape();
  for (let a = 0; a < TWO_PI; a += radians(myRadians)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 1.5);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

  noiseSeed(5);
  var uiColor4 = color(uiColor);
  uiColor4.setAlpha(120);
  stroke(uiColor4);


  beginShape();
  for (let a = 0; a < TWO_PI; a += radians(myRadians)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 1);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

  noiseSeed(651);
  var uiColor5 = color(uiColor);
  uiColor5.setAlpha(80);
  stroke(uiColor5);

  beginShape();
  for (let a = 0; a < TWO_PI; a += radians(myRadians)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 0.7);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);


  phase += 0.001;
  zoff += zoffRemap;
  //aumenta fino 0.006
  pop();

    push();
    fill(uiColor);
    noStroke();
    myCircle = circle(myCanvas.width/2, myCanvas.height/2, 25);
    pop();


  var coeffMaxTrigger = 0.5;
  var coeffMinTrigger = 0.15;


  //UI
  if (distanceFence1 < distanceFence3 && distanceFence1 < distanceFence6 && distanceFence1 < distanceFence8){
    if (distanceFence1 < maxDistFence1 * coeffMaxTrigger) {
      var color1Remap = map(distanceFence1, maxDistFence1*coeffMaxTrigger, maxDistFence1 *coeffMaxTrigger, 255, 0);
      // uiColor = color(255, color1Remap, color1Remap);
      uiColor = color(255, 0, 0);
      zoffRemap = map(distanceFence1, maxDistFence1*coeffMaxTrigger, maxDistFence1 *coeffMaxTrigger, 0.003, 0.007);
      noiseMax = map(distanceFence1, maxDistFence1*coeffMaxTrigger, maxDistFence1 *coeffMaxTrigger, 0.4, 2);
    } else {
      uiColor = 'white';
      noiseMax = 0.4;
      zoffRemap = 0.003;
    }
  } else if (distanceFence3 < distanceFence1 && distanceFence3 < distanceFence6 && distanceFence3 < distanceFence8){
    if (distanceFence3 < maxDistFence1 * coeffMaxTrigger) {
      var color3Remap = map(distanceFence3, maxDistFence1*coeffMaxTrigger, maxDistFence1 *coeffMinTrigger, 255, 0);
      // uiColor = color(color3Remap, 255, color3Remap);
      uiColor = color(0, 255, 0);
      zoffRemap = map(distanceFence3, maxDistFence1*coeffMaxTrigger, maxDistFence1 *coeffMinTrigger, 0.003, 0.007);
      noiseMax = map(distanceFence3, maxDistFence1*coeffMaxTrigger, maxDistFence1 *coeffMinTrigger, 0.4, 2);
    } else {
      uiColor = 'white';
      noiseMax = 0.4;
      zoffRemap = 0.003;
    }
  } else if (distanceFence6 < distanceFence1 && distanceFence6 < distanceFence3 && distanceFence6 < distanceFence8){
    if (distanceFence6 < maxDistFence1 * coeffMaxTrigger) {
      var color6Remap = map(distanceFence6, maxDistFence1*coeffMaxTrigger, maxDistFence1 *coeffMinTrigger, 255, 0);
      // uiColor = color(color6Remap, color6Remap, 255);
      uiColor = color(0, 0, 255);
      zoffRemap = map(distanceFence6, maxDistFence1*coeffMaxTrigger, maxDistFence1 *coeffMinTrigger, 0.003, 0.007);
      noiseMax = map(distanceFence6, maxDistFence1*coeffMaxTrigger, maxDistFence1 *coeffMinTrigger, 0.4, 2);
    } else {
      uiColor = 'white';
      noiseMax = 0.4;
      zoffRemap = 0.003;
    }
  } else if (distanceFence8 < distanceFence1 && distanceFence8 < distanceFence3 && distanceFence8 < distanceFence6){
    if (distanceFence8 < maxDistFence1 * coeffMaxTrigger) {
      var color8Remap = map(distanceFence8, maxDistFence1*coeffMaxTrigger, maxDistFence1 *coeffMinTrigger, 255, 0);
      // uiColor = color(255, 255, color8Remap);
      uiColor = color(255, 255, 0);
      zoffRemap = map(distanceFence8, maxDistFence1*coeffMaxTrigger, maxDistFence1 *coeffMinTrigger, 0.003, 0.007);
      noiseMax = map(distanceFence8, maxDistFence1*coeffMaxTrigger, maxDistFence1 *coeffMinTrigger, 0.4, 2);
    } else {
      uiColor = 'white';
      noiseMax = 0.4;
      zoffRemap = 0.003;
    }
  }else {
    uiColor = 'white';
    noiseMax = 0.4;
    zoffRemap = 0.003;
  }

  //trigger ALPHA
  if (distanceFence1 < maxDistFence1 * 0.6) {
    fence1circleAlpha = map(distanceFence1, maxDistFence1*0.6, maxDistFence1 *0.25, 0, 255);
  }
  else {
    fence1circleAlpha = 0;
  }

  if (distanceFence3 < maxDistFence1 * 0.6) {
    fence3circleAlpha = map(distanceFence3, maxDistFence1*0.6, maxDistFence1 *0.25, 0, 255);
  }
  else {
    fence3circleAlpha = 0;
  }

  if (distanceFence6 < maxDistFence1 * 0.6) {
    fence6circleAlpha = map(distanceFence6, maxDistFence1*0.6, maxDistFence1 *0.25, 0, 255);
  }
  else {
    fence6circleAlpha = 0;
  }

  if (distanceFence8 < maxDistFence1 * 0.6) {
    fence8circleAlpha = map(distanceFence8, maxDistFence1*0.6, maxDistFence1 *0.25, 0, 255);
  }
  else {
    fence8circleAlpha = 0;
  }
  //end trigger ALPHA

  fence1circleX = map(fence1LongPos - myPosLonIncr, myInitLoc.longitude - fencePosIncr2, myInitLoc.longitude + fencePosIncr2, 0, myCanvas.width);
  fence1circleY = map(fence1LatPos - myPosLatIncr, myInitLoc.latitude - fencePosIncr2, myInitLoc.latitude + fencePosIncr2, 0, myCanvas.height);

  fence3circleX = map(fence3LongPos - myPosLonIncr, myInitLoc.longitude - fencePosIncr2, myInitLoc.longitude + fencePosIncr2, 0, myCanvas.width);
  fence3circleY = map(fence3LatPos - myPosLatIncr, myInitLoc.latitude - fencePosIncr2, myInitLoc.latitude + fencePosIncr2, 0, myCanvas.height);

  fence6circleX = map(fence6LongPos - myPosLonIncr, myInitLoc.longitude - fencePosIncr2, myInitLoc.longitude + fencePosIncr2, 0, myCanvas.width);
  fence6circleY = map(fence6LatPos - myPosLatIncr, myInitLoc.latitude - fencePosIncr2, myInitLoc.latitude + fencePosIncr2, 0, myCanvas.height);

  fence8circleX = map(fence8LongPos - myPosLonIncr, myInitLoc.longitude - fencePosIncr2, myInitLoc.longitude + fencePosIncr2, 0, myCanvas.width);
  fence8circleY = map(fence8LatPos - myPosLatIncr, myInitLoc.latitude - fencePosIncr2, myInitLoc.latitude + fencePosIncr2, 0, myCanvas.height);


  fence1circle.display(fence1circleX, fence1circleY, fence1circleAlpha);
  fence3circle.display(fence3circleX, fence3circleY, fence3circleAlpha);
  fence6circle.display(fence6circleX, fence6circleY, fence6circleAlpha);
  fence8circle.display(fence8circleX, fence8circleY, fence8circleAlpha);

}


//callback when intervalCurrentPosition is executed
function showPosition(position) {
  currentLat = position.latitude;
  currentLon = position.longitude;

  latTxt = currentLat.toFixed(6);
  lonTxt = currentLon.toFixed(6);

  myPosLatIncr = currentLat - myInitLoc.latitude;
  myPosLonIncr = currentLon - myInitLoc.longitude;

  distanceFence1 = calcGeoDistance(currentLat, currentLon, fence1LatPos, fence1LongPos, 'km') * 1000;

  distanceFence3 = calcGeoDistance(currentLat, currentLon, fence3LatPos, fence3LongPos, 'km') * 1000;
  distanceFence6 = calcGeoDistance(currentLat, currentLon, fence6LatPos, fence6LongPos, 'km') * 1000;
  distanceFence8 = calcGeoDistance(currentLat, currentLon, fence8LatPos, fence8LongPos, 'km') * 1000;

  // myCircleX  = map(currentLon, myInitLoc.longitude - fencePosIncr, myInitLoc.longitude + fencePosIncr, 0, myCanvas.width);
  // myCircleY = map(currentLat, myInitLoc.latitude - fencePosIncr, myInitLoc.latitude + fencePosIncr, 0, myCanvas.height);

}

function Segnaposto(_fill, _size) {
  this.fill = _fill;
  this.size = _size;
  this.size2 = _size*0.75;
  this.size3 = _size*0.5;

  this.display = function(_x, _y, _a) {
    this.x = _x;
    this.y = _y;
    this.alpha = _a;

    push();
    translate(-this.size/2, -this.size/2);
    fill(this.fill);
    noStroke();
    var square1 = square(this.x, this.y, this.size);
    this.fill.setAlpha(this.alpha);
    pop();

    push();
    translate(-this.size2/2, -this.size2/2);
    var secondColor = color(0,0,0);
    secondColor.setAlpha(this.alpha);
    fill(secondColor);
    noStroke();
    square(this.x, this.y, this.size2);
    pop();

    push();
    translate(-this.size3/2, -this.size3/2);
    fill(this.fill);
    noStroke();
    square(this.x, this.y, this.size3);
    pop();
  }
}
