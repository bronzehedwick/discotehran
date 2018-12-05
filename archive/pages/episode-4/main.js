var centerPoint = {};

var sizes = {
  vinyl: {
    desktop: 600,
    phone: 250
  }
};
var MOBILE_MAX_WIDTH = 768;

var vinylContainer = document.querySelector('.vinyl-container');
var vinylContainerPosition = vinylContainer.getBoundingClientRect()

var lerpAmount1 = 0.08;
var lerpAmount2 = 0.07;
var lerpAmount3 = 0.05;
var lerpAmount4 = 0.03;
var lerpAmount5 = 0.03;
var lerpAmount6 = 0.02;

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var vinylDiameter = windowWidth < MOBILE_MAX_WIDTH ? sizes.vinyl.phone : sizes.vinyl.desktop;

var radius1 = 0;
var radius2 = 0;
var radius3 = 0;
var radius4 = 0;
var radius5 = 0;
var radius6 = 0;

var maxRadius1 = vinylDiameter * 1.3;
var maxRadius2 = vinylDiameter * 1.26;
var maxRadius3 = vinylDiameter * 1.22;
var maxRadius4 = vinylDiameter * 1.18;
var maxRadius5 = vinylDiameter * 1.14;
var maxRadius6 = vinylDiameter * 1.1;

var colors = {};

function drawBgPattern(width, height, dotRadius, shift, fillColor, horizMargin, vertMargin) {
  noStroke();
  fill(fillColor);
  var row = 0;
  var padding = 30;
  for(var y = 0; y < (height); y += vertMargin) {
    for(var x = 0; x < (width + padding); x += horizMargin) {
      if (row % 2 === 0) {
        ellipse(x, y, dotRadius, dotRadius);
      } else {
        ellipse(x - shift, y, dotRadius, dotRadius);
      }
    }
    row++;
  }
}

// function lerp(v0, v1, amount) {
//   return v0 * (1 - amount) + v1 * amount;
// }

function windowResized() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  resizeCanvas(windowWidth, windowHeight);
  drawBgPattern(innerWidth, innerHeight, 5, 13, colors.bgBlueDots, 8, 8);
  setCenterPoint();
}

function setCenterPoint() {
  centerPoint = windowWidth >= MOBILE_MAX_WIDTH ?
  createVector(windowWidth / 2, windowHeight / 2) :
  createVector(
    vinylContainerPosition.left + (vinylContainerPosition.width / 2),
    vinylContainerPosition.top + (vinylContainerPosition.height / 2)
  );
}


function setup() {  
  createCanvas(windowWidth, windowHeight); 
  background(color(255, 255, 255));
  // define what should be the circle's centerpoint
  setCenterPoint();

  colors = Object.assign({}, {
    bgBlueDots: color(30, 0, 255, 200),
    blue: color(16, 81, 251),
    purple: color(83, 36, 250),
    eggplant: color(201, 39, 251),
    red: color(252, 31, 28),
    orange: color(251, 81, 31),
    yellow: color(253, 145, 38)
  });

  drawBgPattern(innerWidth, innerHeight, 5, 13, colors.bgBlueDots, 8, 8);
  
}

function draw() {

  fill(colors.blue);
  radius1 = lerp(radius1, maxRadius1, lerpAmount1);
  ellipse(centerPoint.x, centerPoint.y, radius1, radius1); 

  fill(colors.purple);
  radius2 = lerp(radius2, maxRadius2, lerpAmount2);
  ellipse(centerPoint.x, centerPoint.y, radius2, radius2);

  fill(colors.eggplant);
  radius3 = lerp(radius3, maxRadius3, lerpAmount3);
  ellipse(centerPoint.x, centerPoint.y, radius3, radius3);

  fill(colors.red);
  radius4 = lerp(radius4, maxRadius4, lerpAmount4);
  ellipse(centerPoint.x, centerPoint.y, radius4, radius4);

  fill(colors.orange);
  radius5 = lerp(radius5, maxRadius5, lerpAmount5);
  ellipse(centerPoint.x, centerPoint.y, radius5, radius5);

  fill(colors.yellow);
  radius6 = lerp(radius6, maxRadius6, lerpAmount6);
  ellipse(centerPoint.x, centerPoint.y, radius6, radius6);
}