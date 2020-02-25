
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')

var pct = now.hours
  rect(0,0, 400*pct, 50)
  fill(0,0,200,200)
  noStroke()

var x = now.min
  rect(0,50, 400*pct, 50)
  fill(0,0,200,100)
  noStroke()

var y = now.sec
  rect(0,100, 400*pct, 50)
  fill(0,0,200,50)
  noStroke()






}