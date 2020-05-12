let font,
fontsize = 80;

function preload() {
  font = loadFont('fitzblack.ttf');
  
let spacing = 80;
// let discrete = false
}

function setup() {
  createCanvas(768, 1024);
  textFont(font);
  textSize(fontsize);
  // print('starting time:', clock() )
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
  
  // var now = clock()
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