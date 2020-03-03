function setup() {
  createCanvas(600,600)
}

function draw() {
var now = clock()
background(255);

let x = 300

fill(50,150,10,150)
noStroke()
rect(0,0,300,300);

fill(255,255,10)
noStroke()
rect(300,0,600,300);

fill(255,150,0)
noStroke()
rect(0,300,300,300);

fill(0,100,255,100)
noStroke()
rect(300,300,600,300);

fill(255)
noStroke()
circle(x-40,x-40,60);

fill(255)
noStroke()
circle(x+40,x+40,60);

fill(255)
noStroke()
circle(x-40,x+40,60);

fill(255)
noStroke()
circle(x+40,x-40,60);

fill(255)
noStroke()
circle(x-100,x-100,40);

fill(255)
noStroke()
circle(x+100,x+100,40);

fill(255)
noStroke()
circle(x-100,x+100,40);

fill(255)
noStroke()
circle(x+100,x-100,40);

fill(255)
noStroke()
circle(x-140,x-140,20);

fill(255)
noStroke()
circle(x+140,x+140,20);

fill(255)
noStroke()
circle(x-140,x+140,20);

fill(255)
noStroke()
circle(x+140,x-140,20);

}