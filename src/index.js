function setup() {
  createCanvas(windowWidth, windowHeight);
  background(77, 104, 115)
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(77, 104, 115)
}

function draw() {
  ellipse(50, 50, 100, 100);
}
