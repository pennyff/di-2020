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
	let x = 300, y = 400
	let branchLength = 100

	
	background("black");
	stroke(255)

	strokeWeight(4)
	line(300,600,300,400);
  stroke(255,0,0)

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
}



// line(300,400,90,200);

// strokeWeight(2)
// line(x,y,100,90);

// line(x,y,200,100);

// strokeWeight(2)
// line(x,y,350,40);

// strokeWeight(4)
// line(x,y,370,170);

// line(x,y,500,150);

// circle(342,100,15);

// circle(190,230,20);

// circle(100,90,12);
