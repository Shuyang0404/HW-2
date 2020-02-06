 const barWidth = 20;
let lastBar = -1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
noStroke()
  strokeCap(SQUARE)


  //red square
  let inside = color(204, 102, 0);
  let middle = color(204, 153, 0);
  let outside = color(153, 51, 0);

  push();
  translate(80, 80);
  fill(outside);
  rect(0, -80, 400, 320);
  fill(middle);
  rect(100, 60, 120, 120);
  fill(inside);
  rect(60, 90, 80, 80);
  pop();


  //blue square
  fill(0, 0, 255)
  rect(0, 320, 80, 80)
 
  //yellow rectangle
  fill(255, 255, 0)
  rect(370, 360, 30, 40)
  
  stroke(0)
  strokeWeight(13)
  line(80, 0, 80, 400)//left
  line(0, 320, 400, 320)// mid
  line(370, 320, 370, 400)//right
  
  strokeWeight(15)
  line(370, 360, 400, 360)//bottom
  
  strokeWeight(21)
  line(0,160, 80, 160)//top
  
}
