
function setup() {
  // set the width & height of the sketch
  createCanvas(800, 500)

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
  noFill ()

  if (now.pm){
    background(70,50,150)
  }else{
    background(200,200,0)
  }

  var boxsize = map (now.sec,0, 60, 50, 200)
  
stroke ("red")
rect(200,100,boxsize,boxsize)

  var x = map (now.min,0, 60, 100, 400)

stroke ('orange')
rect(100,100,x,x)

  var y = map (now.hour, 0, 12, 200, 400)

stroke ('blue')
rect(100,100,y,y)

}