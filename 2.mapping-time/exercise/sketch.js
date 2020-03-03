function setup() {
  // set the width & height of the sketch
  createCanvas(400, 800)
}

function draw() {
  background('white')
  noStroke()

  var now = clock()
  var spacing = 10

  // draw as many circles as the current `now.hours` value
  // using _.times. The first circle's y position should be at 100
  // and each circle below it should be `spacing` pixels below it
 
  
  // fill(0)
  // _.times(now.hours, i => {
  //   push()
  //   translate(100,50)
  //   circle(0, i*spacing, 20)
  //   pop()
  // })
  
  // // draw as many circles as the current now.min value
  // // by creating a list from 0 .. `now.min` using _.range
  // // and then stepping through that list using _.each
  // fill(100)
  // _.times(now.min, i => {
  //   push()
  //   translate(200,50)
  //   circle(0, i*spacing, 20)
  //   pop()
  // })

  // // draw as many circles as the current `now.sec` value
  // // using `for (;;){...}` syntax
  // fill(200)
  // _.times(now.sec, i => {
  //   push()
  //   translate(300,50)
  //   circle(0, i*spacing, 20)
  //   pop()
  // })

  // fill(0)
  // _.times(now.hours, i => {
  //   noFill()
  //   stroke(0)
  //   circle(200, 200, 20+i*spacing)

  // })

  // fill(0)
  // _.times(now.min, i => {
  //   Fill(80,0,0)
  //   noStroke()
  //   circle(400, 200, 20+i*spacing)

  // })

  // fill(0)
  // _.times(now.sec, i => {
  //   noFill()
  //   stroke(0)
  //   circle(200, 200, 20+i*spacing)

  // })
  function pointAt()
}