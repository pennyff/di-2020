
function setup() {
  // set the width & height of the sketch
  createCanvas(1000, 1000)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}
  // var hRot = 0
  // var mRot = 0
  // var sRot = 0

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  
  // let from = color(70,50,150);
  // let to = color (220,200,0);
  // colorMode(RGB);
  // lerpColor(from, to, 0.5);

  if (now.pm){
    background(70,50,150)
  }else{
    background(220,200,0)
  }

 let x = 0, y = 30

//flower 1
 x+= now.hours; 
 translate(580, 200);
  // rotate(x);
  noStroke();
  for (let i = 0; i < 12; i ++) {ellipse(x, y, 20, 80);
    rotate(PI/6);
  }

//flower 2
 x+= now.min;
    translate(100, 200);
  noStroke();
  for (let i = 0; i < 12; i ++) {ellipse(x, y, 20, 80);
    rotate(PI/6);}

//flower 3
 x+= now.sec;
    translate(200, 150);
  noStroke();
  for (let i = 0; i < 12; i ++) {ellipse(x, y, 20, 80);
    rotate(PI/6);}

    
}