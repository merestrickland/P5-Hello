//random(min, max)

//while (true condition) {
    //expressions happen each loop
// }

function setup(){
    let canvas = createCanvas(windowWidth, windowHeight)
    frameRate(2)
    // canvas.center()
}

function draw(){
    let x = 10
    while(x < width){
        ellipse(x, height/2, 20, 20)
        x+=10
    }

    for(let i=0; i<=height; i+=10) {
        ellipse(random(10, width), i, 20, 20)
    }
}
