function setup() {
  createCanvas(1000,400)
}

function draw() {
  background(255)
  
  strokeWeight(3)
  line(100,50,100,150)
  line(130,50,130,150)

  stroke(0,255,0)
  line(160,50,160,150)

  stroke(0)
  line(190,50,190,150)
  line(220,50,220,150)

let x = 200, y = 300

  line(100,200,100,300)
  line(130,x,130,y)
  line(160,x,160,y)
  line(190,x,190,y)
  line(220,x,220,y)
  line(250,x,250,y)
}