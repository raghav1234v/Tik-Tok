var hr , mn,sc;
function setup() {
  createCanvas(800,400);
 
  angleMode(DEGREES)
}

function draw() {
  background(0);  
  translate(400,200)
  rotate(-90)
  hr = hour();
  mn = minute();
  sc = second();
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360)
  push();
  rotate(scAngle )
  stroke(255,0,0)
  strokeWeight(7)
  line (0,0,100,0)
  pop();
  push();
  rotate(mnAngle )
  stroke(0,255,0)
  strokeWeight(7)
  line (0,0,75,0)
  
  pop();
  push();
  rotate(hrAngle )
  stroke(0,0,255)
  strokeWeight(7)
  line (0,0,45,0)
  
  pop();
  noFill();
  strokeWeight(7)
  stroke(255,0,0)
  arc(0,0,300,300,0,scAngle)
  stroke(0,255,0)
  arc(0,0,275,275,0,mnAngle)
  stroke(0,0,255)
  arc(0,0,245,245,0,hrAngle)
  drawSprites();
}