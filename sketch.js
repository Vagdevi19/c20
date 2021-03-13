
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 200,80,30);
  movingRect.shapeColor = "orange";

  fixedRect = createSprite(700, 400, 80, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "red";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "red";

  movingRect.velocityY = -2;
  fixedRect.velocityY = +2
}

function draw() {
  background(0,0,0);  
  
bounceOff(movingRect, fixedRect)

 
  
  
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

