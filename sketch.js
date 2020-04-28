var scl = 20;
var s;
var food;

function setup(){
  createCanvas(600,600);
  s = new Snake();
  frameRate(10);
  pickLocation();
}
function pickLocation(){
  cols = floor(width/scl);
  rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0,-1);
  } else if ( keyCode === DOWN_ARROW){
    s.dir(0,1)
  } else if ( keyCode === LEFT_ARROW){
    s.dir(-1,0)
  } else if ( keyCode === RIGHT_ARROW){
    s.dir(1,0)
  }
}
function draw (){
  background(51);
  if(s.eat(food)){
    pickLocation();
  }
  s.die();
  s.update();
  s.show();

  fill(255,0,100);
  rect(food.x, food.y, scl,scl)
}
