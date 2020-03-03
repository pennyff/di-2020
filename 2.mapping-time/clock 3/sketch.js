var x = 0 // starting x position to draw
var y = 0  // starting y position to draw
var barHeight = 200 // height of each bar
var maxWidth = 600 // maximum width of each bar (the actual width will always be ≤ this)
var spacing = 0 // the vertical space to skip between bars

var discrete = false


function setup() {
  // set the width & height of the sketch
  createCanvas(600, 600)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  background('white')
  
  var now = clock()

  if (discrete){
    // the map() function lets us *normalize* a value from a starting range then *project* it into another range
    var hourWidth = map(now.hour, 1,12, 0,maxWidth) // from hours (1-12) to pixels (0–maxWidth)
    var minsWidth = map(now.min,  0,60, 0,maxWidth)  // from mins (0–60) to pixels (0–maxWidth)
    var secsWidth = map(now.sec,  0,60, 0,maxWidth)  // from secs (0–60) to pixels (0–maxWidth)
  }else{
    // alternatively, we can use the clock's 'progress' percentages
    hourWidth = maxWidth * now.progress.day
    minsWidth = maxWidth * now.progress.hour
    secsWidth = maxWidth * now.progress.min
  }

// var pct = now.hours
  rect(0,0, hourWidth, barHeight)
  fill(0,0,200,100)
  noStroke()

// var x = now.min
  rect(0,200, minsWidth, barHeight)
  fill(0,0,200,50)
  noStroke()

// var y = now.sec
  rect(0,400, secsWidth, barHeight)
  fill(0,0,200,200)
  noStroke()






}