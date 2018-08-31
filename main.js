var centerPoint = {};
var lerpAmount = 0.1;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var radius = 0;
var maxRadius = windowWidth * 0.8;

function lerp(v0, v1, amount) {
  return v0 * (1 - amount) + v1 * amount;
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  centerPoint = createVector(windowWidth / 2, windowHeight / 2)
    
  stroke(153);
  fill(255);
  
  ellipse(centerPoint.x, centerPoint.y, 40, 40);
}

function draw() {
  radius = lerp(radius, maxRadius, lerpAmount);
  ellipse(centerPoint.x, centerPoint.y, radius, radius);

}