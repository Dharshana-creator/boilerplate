var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600, 400, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600, 400, 50, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0); 
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
 fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
 movingRect.x - fixedRect.x - fixedRect.height/2 + movingRect.height/2 &&
 fixedRect.x - movingRect.x < fixedRect.height/2 + movingRect.height/2){
fixedRect.shapeColor = "red";
movingRect.shapeColor = "red";
 }
 else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green"; 
 }
  drawSprites();
}