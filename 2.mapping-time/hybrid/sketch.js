function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist, 
          y:cy+sin(theta) * dist}
}
function setup() {
  createCanvas(600,600)
}
function draw() {
	var now = clock()
	let x = 150, y = 200
	let branchLength = 100

	var season = now.season
	var color
	if(season == 1) color = "green"
	if(season == 2) color = "yellow"
	if(season == 3) color = "orange"
	if(season == 4) color = "blue"

	
	background("black");
	stroke(255)

	strokeWeight(4)
	line(150,600,150,200);
  stroke(color)

	_.times(12, m => {
	  var monthAngle = map(m,0,11,180,360)
	  var branchPoint = pointAt(x,y,monthAngle,branchLength)
	  if(m<now.month){
	  	line(x,y,branchPoint.x,branchPoint.y)
	 } 
	  
	  
	})
  var dayAngle = map(now.month,1,12,180,360)
  var dayLength = now.progress.month*branchLength
  var dayPoint = pointAt(x,y,dayAngle,dayLength)
  circle(dayPoint.x,dayPoint.y,15)

  let a = 300, b = 300
  let minLength = 20

  _.times(60, n => {
  	var minAngle = map(n,0,59,0,360)
  	var minPoint = pointAt(a,b,minAngle,minLength)
  	if(n<now.min){
  	  stroke('white')
  	  line(a,b,minPoint.a,minPoint.b)

  	  fill(255)
	circle(a, b, 5)

  	}

  let c = 400, d = 500
  let minLength = 40

  _.times(12, h => {
  	var hourAngle = map(h,1,12,0,360)
  	var hourPoint = pointAt(a,b,hourAngle,hourLength)
  	if(h<now.hour){
  	  stroke('white')
  	  line(a,b,hourPoint.a,hourPoint.b)

  	  fill(255,0,0)
	circle(a, b, 5)
    }

let e = 500, f = 100
  let secLength = 30

  _.times(60, s => {
  	var secAngle = map(s,0,60,0,360)
  	var secPoint = pointAt(a,b,secAngle,secLength)
  	if(s<now.sec){
  	  stroke('white')
  	  line(a,b,secPoint.a,secPoint.b)

  	  fill(0,0,255)
	circle(a, b, 5)
    }


  	
})
}
