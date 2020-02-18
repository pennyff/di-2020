
function setup() {
  // set the width & height of the sketch
  createCanvas(720, 400)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

// A design for a simple flower
  translate(580, 200);
  noStroke();
  for (let i = 0; i < 12; i ++) {ellipse(0, 30, 20, 80);
    rotate(PI/6);}
}
    