
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
  background(220);
  //For (var BEGIN; END; INTERVAL){
  //DO SOMETHING }
  for (var x = 0; x < width; x += width / 10) {
    for (var y = 0; y < height; y += height / 10) {
      stroke(0);
      strokeWeight(1);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }

  var y = map (now.hour, 0, 12, 50, 50)

fill (0,255,0,200)
noStroke ()
rect (0, 0, y, y)

  var x = map (now.min, 0, 60, 100, 200)

fill (0,0,255,80)
noStroke()
rect (0, 0, x, x)

  var boxsize = map (now.sec, 0, 60, 50, 400)
  
fill (255,0,0,80)
noStroke ()
rect(0, 0,boxsize,boxsize)

  
}