let font,
fontsize = 80;

function preload() {
  font = loadFont('Lato-Regular.ttf');
  
let x = 0, y = 0
let barWidth = 200
let maxHeight = 1024
let spacing = 80
let discrete = false
}

function setup() {
  createCanvas(768, 1024);
  textFont(font);
  textSize(fontsize);
  print('starting time:', clock() )
}

function draw() {
  background("black");
  
  textAlign(LEFT);
  drawWords(width * 0.75);
  
  function drawWords() {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(0,200,50);
  text('EARTH DAY', 30, 100);
  fill(255);
  text('CONCERT', 30, 200);
  }
  
  let now = clock()
  if (discrete){
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
  print()
}