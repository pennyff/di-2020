function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist,
          y:cy+sin(theta) * dist}
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  var now = clock()
  let a = 300, b = 300
  let minLength = 50

  background("black")
  strokeWeight(4)
  line(a,b,400,400)
  stroke(255)

 _.times(12, h => {
    var minAngle = map(h,0,60,0,360)
    var minPoint = pointAt(a,b,minAngle,minLength)
    if(h<now.min){
      line(a,b,minPoint.a,minPoint.b)
   }
})