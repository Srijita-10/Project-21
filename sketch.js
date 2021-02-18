var speed,weight,thickness,bullet,wall;

function setup() {
  createCanvas(1600,400);
  speed=random(80,121);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 20, 20);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="grey";
  bullet.velocityX=speed;

}

function draw() {
  background(255,255,255);  
  //wall.shapeColor=color(80,80,80);
  bullet.shapeColor="blue";

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=(0.5 * weight * speed* speed)/(thickness *thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    else if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;

}