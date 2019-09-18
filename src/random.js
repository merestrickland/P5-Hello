//random(min, max)

//while (true condition) {
    //expressions happen each loop
// }

function setup(){
    let canvas = createCanvas(500, 500)
    canvas.center()
}

function draw(){
    let x = 10
    while(x < width){
        ellipse(x, height/2, 20, 20)
        x+=60
    }
}
