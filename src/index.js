// import './index.styles.scss'

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(77, 104, 115)
// }
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   background(77, 104, 115)
// }

// Wall Drawing #65 (1971)
// Lines not short, not straight, crossing and touching, drawn at random, using four colors, uniformly dispersed with maximum density, covering the entire surface of the wall.

// Wall Drawing #97 (1971)
// Within an 80 inch (200cm) square, 10,000 straight lines. Next to it is an 80 inch (200 cm) square with 10,000 not straight lines.

function setup() {
  let canvas = createCanvas(1000, 500);
  canvas.center()
  frameRate(3)
  
  
  // createCanvas(1024, 768)
  // background(245, 296, 243)
}

function draw() {
//   //Anything you draw later will be drawn on top of what you've already drawn
//   //strokeWeight(weight)
//   //noStroke() --> disable a stroke
//   //noFill() --> disable a fill
//   //stroke(strokeColor)
//   //fill(R, G, B)
//   //add a fourth color to set transparency 255 is opaque, 0 is transparent
//   //use only two arguments if you want grayscale and transparency
//   // strokeWeight(10);
//   // fill(255, 0, 0)
//   // ellipse(500, 500, 100, 100);


//   noStroke()
//   fill(237, 224, 203)
//   quad(336.98, 301.63, 572.52, 301.63, 580.33, 494.75, 351.5, 494.75)
//   fill(183, 182, 161, 200)
//   quad(467.59, 374.19, 521.17, 374.19, 521.17, 494.75, 467.59, 494.75)
//   fill(219, 199, 171)
//   quad(395.03, 373.36, 467.59, 373.36, 467.59, 494.75, 395.03, 494.75)
//   arc(283.84, 109.64, 80, 0, 180, 90)


//Wall Drawing #17 (1969)
// Four-part drawing with a different line direction in each part.

//Text


//VERTICAL LINES
const vertical = () => {
  for(let x=0; x<250; x+=5) {
    // strokeWeight(3)
    line(x, 0, x, 500)
  }
}

// //HORIZONTAL LINES

const horizontal = () => {
  for(let i = 0; i <= 500; i+=5){
    line(250, i, 500, i)
    }
}

// //DIAGONAL LINES (#1)
const diagonalThree = () => {
  for (let i = 0; i <= 250; i += 5){
    line(500, i, 500+i, 0);
    line(750, i, 500+i, 250);
    line(500, 250+i, 500+i, 250)
    line(750, 250+i, 500+i, 500)
    
  }
}

//DIAGONAL LINES (#2)
const diagonalFour = () => {
  for (let i=0; i<=250; i+=5) {
    line(750, i, 1000-i, 250)
    line(1000-i, 0, 1000, i)
    line(750, 250+i, 1000-i, 500)
    line(1000, 250+i, 1000-i, 250)
  }
}

// vertical()
// horizontal()
// diagonalThree()
// diagonalFour()

let quadrants = [vertical(), horizontal(), diagonalThree(), diagonalFour()]

for (var i=1; i<=100; i++) {
  random(quadrants)
}






}
