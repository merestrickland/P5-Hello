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
  createCanvas(1000, 1000);
  
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

//VERTICAL LINES
for(let x=0; x<250; x+=5) {
  // strokeWeight(3)
  line(x, 0, x, windowHeight)
}

//HORIZONTAL LINES
for(let i = 0; i <= windowHeight; i+=5){
  line(250, i, 500, i)
  }

  //DIAGONAL LINES
  for (let i = 5; i <= 250; i += 5){
    // line(500, i, i, 0);
    line(500, i, 500+i, 0);
}

// for(var i=0; i<300; i+=5) {
//   line(0, windowWidth/4 + i, windowWidth, i)
// }




}
