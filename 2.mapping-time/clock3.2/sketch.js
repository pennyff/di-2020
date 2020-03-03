function setup() {
  // set the width & height of the sketch
  createCanvas(1300, 450)
}

function draw() {
  background('black')
  noStroke()

  var now = clock()
  var spacing = 20

     fill(0)
  _.times(now.hours, i => {
    noFill()
    stroke(255)
    rect(0, 100, 24+i*spacing, 20)
  })
     fill(0)
  _.times(now.min, i => {
    noFill()
    stroke(255)
    rect(0, 200, 60+i*spacing, 20)
  })
     fill(0)
  _.times(now.sec, i => {
    noFill()
    stroke(255)
    rect(0, 300, 60+i*spacing, 20)
  })
}