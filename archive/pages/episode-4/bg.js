var colors = {};
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
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


function windowResized() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  resizeCanvas(windowWidth, windowHeight);
  drawBgPattern(innerWidth, innerHeight, 5, 13, colors.bgBlueDots, 8, 8);
}



function setup() {  
  createCanvas(windowWidth, windowHeight); 
  background(color(255, 255, 255));

  colors = Object.assign({}, {
    bgBlueDots: color(30, 0, 255, 200)
  });

  drawBgPattern(innerWidth, innerHeight, 5, 13, colors.bgBlueDots, 8, 8);
  
}

function draw() {

}