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



var fence3;
let fence3LatPos;
let fence3LongPos;
var fence3circle;
var fence3circleX;
var fence3circleY;
var distanceFence3;


var fence6;
let fence6LatPos;
let fence6LongPos;
var fence6circle;
var fence6circleX;
var fence6circleY;
var distanceFence6;


var fence8;
let fence8LatPos;
let fence8LongPos;
var fence8circle;
var fence8circleX;
var fence8circleY;
var distanceFence8;



//TERRENO
let phase = 0;
let zoff = 0;
let myRadians = 0.1;
let noiseMax = 0.4;
//aumenta fino a 2
var uiColor = 'white';
var zoffRemap = 0.003;



function preload() {
  myInitLoc = getCurrentPosition();

}

function setup() {

  myPosX = document.querySelector('#pos-x');
  myPosY = document.querySelector('#pos-y');
  maxDist1Txt = document.querySelector('#max-dist-fence-1');

    dist1Txt = document.querySelector('#dist-fence-1');

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
  maxDistFence1 = calcGeoDistance(myInitLoc.latitude, myInitLoc.longitude, fence1LatPos, fence1LongPos, 'km') * 1000;
  maxDist1Txt.innerHTML = maxDistFence1;
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


function insideTheFence1() {}
function insideTheFence3() {}
function insideTheFence6() {}
function insideTheFence8() {}



function outsideTheFence() {}

function draw() {
  clear();
  background("black");



  push();
  translate(width / 2, height / 2);
  stroke(uiColor);
  strokeWeight(2);
  noFill();


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

  beginShape();
  for (let a = 0; a < TWO_PI; a += radians(myRadians)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

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

  // //sonar interface
  // push();
  // fill(0, 0, 0, 0);
  // stroke('white');
  // ellipse(myCanvas.width/2, myCanvas.height/2, myCanvas.width*0.15);
  // ellipse(myCanvas.width/2, myCanvas.height/2, myCanvas.width*0.30);
  // ellipse(myCanvas.width/2, myCanvas.height/2, myCanvas.width*0.45);
  // ellipse(myCanvas.width/2, myCanvas.height/2, myCanvas.width*0.60);
  // line(0, 0, myCanvas.width, myCanvas.height);
  // line(myCanvas.width, 0, 0, myCanvas.height);
  //
  // strokeWeight(3);
  // line(myCanvas.width/2, 0, myCanvas.width/2, myCanvas.height);
  // line(0, myCanvas.height/2, myCanvas.width, myCanvas.height/2);
  // ellipse(myCanvas.width/2, myCanvas.height/2, myCanvas.width*0.75);
  // pop();

  // //dots
  // push();
  // fill('white');
  // noStroke();
  // //vertical
  // ellipse(myCanvas.width*0.5, myCanvas.height*0.4, 10);
  // ellipse(myCanvas.width*0.5, myCanvas.height*0.6, 10);
  // //horizontal
  // ellipse(myCanvas.width*0.4, myCanvas.height*0.5, 10);
  // ellipse(myCanvas.width*0.6, myCanvas.height*0.5, 10);
  // //diagonal 1
  // ellipse(myCanvas.width*0.433, myCanvas.height*0.433, 10);
  // ellipse(myCanvas.width*0.566, myCanvas.height*0.566, 10);
  // //diagonal 2
  // ellipse(myCanvas.width*0.433, myCanvas.height*0.566, 10);
  // ellipse(myCanvas.width*0.566, myCanvas.height*0.433, 10);
  // pop()





  myCircle.display(myCanvas.width/2, myCanvas.height/2);

  fence1circleX = map(fence1LongPos + myPosLonIncr, myInitLoc.longitude - fencePosIncr2, myInitLoc.longitude + fencePosIncr2, 0, myCanvas.width);
  fence1circleY = map(fence1LatPos + myPosLatIncr, myInitLoc.latitude - fencePosIncr2, myInitLoc.latitude + fencePosIncr2, 0, myCanvas.height);

  fence3circleX = map(fence3LongPos + myPosLonIncr, myInitLoc.longitude - fencePosIncr2, myInitLoc.longitude + fencePosIncr2, 0, myCanvas.width);
  fence3circleY = map(fence3LatPos + myPosLatIncr, myInitLoc.latitude - fencePosIncr2, myInitLoc.latitude + fencePosIncr2, 0, myCanvas.height);

  fence6circleX = map(fence6LongPos + myPosLonIncr, myInitLoc.longitude - fencePosIncr2, myInitLoc.longitude + fencePosIncr2, 0, myCanvas.width);
  fence6circleY = map(fence6LatPos + myPosLatIncr, myInitLoc.latitude - fencePosIncr2, myInitLoc.latitude + fencePosIncr2, 0, myCanvas.height);

  fence8circleX = map(fence8LongPos + myPosLonIncr, myInitLoc.longitude - fencePosIncr2, myInitLoc.longitude + fencePosIncr2, 0, myCanvas.width);
  fence8circleY = map(fence8LatPos + myPosLatIncr, myInitLoc.latitude - fencePosIncr2, myInitLoc.latitude + fencePosIncr2, 0, myCanvas.height);


  fence1circle.display(fence1circleX, fence1circleY);
  fence3circle.display(fence3circleX, fence3circleY);
  fence6circle.display(fence6circleX, fence6circleY);
  fence8circle.display(fence8circleX, fence8circleY);


  //UI
  if (distanceFence1 < distanceFence3 && distanceFence1 < distanceFence6 && distanceFence1 < distanceFence8){
    if (distanceFence1 < maxDistFence1 * 0.95) {
      var color1Remap = map(distanceFence1, maxDistFence1*0.95, maxDistFence1 *0.9, 255, 0);
      uiColor = color(255, color1Remap, color1Remap);
      zoffRemap = map(distanceFence1, maxDistFence1*0.9, maxDistFence1 *0.2, 0.003, 0.007);
    } else {
      uiColor = 'white';
    }
  } else if (distanceFence3 < distanceFence1 && distanceFence3 < distanceFence6 && distanceFence3 < distanceFence8){
    if (distanceFence3 < maxDistFence1 * 0.95) {
      var color3Remap = map(distanceFence3, maxDistFence1*0.95, maxDistFence1 *0.9, 255, 0);
      uiColor = color(color3Remap, 255, color3Remap);
      zoffRemap = map(distanceFence3, maxDistFence1*0.9, maxDistFence1 *0.2, 0.003, 0.007);
    } else {
      uiColor = 'white';
    }
  } else if (distanceFence6 < distanceFence1 && distanceFence6 < distanceFence3 && distanceFence6 < distanceFence8){
    if (distanceFence6 < maxDistFence1 * 0.95) {
      var color6Remap = map(distanceFence6, maxDistFence1*0.95, maxDistFence1 *0.9, 255, 0);
      uiColor = color(color6Remap, color6Remap, 255);
      zoffRemap = map(distanceFence6, maxDistFence1*0.9, maxDistFence1 *0.2, 0.003, 0.007);
    } else {
      uiColor = 'white';
    }
  } else if (distanceFence8 < distanceFence1 && distanceFence8 < distanceFence3 && distanceFence8 < distanceFence6){
    if (distanceFence8 < maxDistFence1 * 0.95) {
      var color8Remap = map(distanceFence8, maxDistFence1*0.95, maxDistFence1 *0.9, 255, 0);
      uiColor = color(255, 255, color8Remap);
      zoffRemap = map(distanceFence8, maxDistFence1*0.9, maxDistFence1 *0.2, 0.003, 0.007);
    } else {
      uiColor = 'white';
    }
  }else {
    uiColor = 'white';
  }




}


//callback when intervalCurrentPosition is executed
function showPosition(position) {
  currentLat = position.latitude;
  currentLon = position.longitude;

  myPosLatIncr = currentLat - myInitLoc.latitude;
  myPosLonIncr = currentLon - myInitLoc.longitude;

  distanceFence1 = calcGeoDistance(currentLat, currentLon, fence1LatPos, fence1LongPos, 'km') * 1000;
  dist1Txt.innerHTML = distanceFence1;

  distanceFence3 = calcGeoDistance(currentLat, currentLon, fence3LatPos, fence3LongPos, 'km') * 1000;
  distanceFence6 = calcGeoDistance(currentLat, currentLon, fence6LatPos, fence6LongPos, 'km') * 1000;
  distanceFence8 = calcGeoDistance(currentLat, currentLon, fence8LatPos, fence8LongPos, 'km') * 1000;

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
    noStroke();
	  ellipse(this.x, this.y, this.size);
  }
}

function Segnaposto(_fill, _size) {
  this.fill = _fill;
  this.size = _size;
  this.size2 = _size*0.75;
  this.size3 = _size*0.5;

  this.display = function(_x, _y) {
    this.x = _x;
    this.y = _y;

    push();
    translate(-this.size/2, -this.size/2);
    fill(this.fill);
    noStroke();
    square(this.x, this.y, this.size);
    pop();

    push();
    translate(-this.size2/2, -this.size2/2);
    fill('black');
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
