function setup() {
  createCanvas(600,600)
}

let x = 300, y = 400

function draw() {
background("black");
stroke(255)

strokeWeight(4)
line(300,600,300,400);

line(300,400,90,200);

strokeWeight(2)
line(x,y,100,90);

line(x,y,200,100);

strokeWeight(2)
line(x,y,350,40);

strokeWeight(4)
line(x,y,370,170);

line(x,y,500,150);

circle(342,100,15);

circle(190,230,20);

circle(100,90,12);

}