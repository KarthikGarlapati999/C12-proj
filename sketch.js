var ground, path;
function preload(){
  //pre-load images
  path.addImage(pathImg);
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  var ground = createSprite(200,180,400,20);
  path=createSprite(200,200);
  
  path.velocityY=4;
  path.scale=1.2;
}

function draw() {
  background(0);
  if (path.y > 400){
    path.y = hieght/2;
  }
  drawSprites();
}
