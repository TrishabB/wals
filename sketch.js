var bullet,wall
var speed,weight,thickness
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,120,10);
  wall=createSprite(1500,200,thickness,height/2)
  speed=random(223,321)
 weight=random(30,52)
 thickness=random(22,83)
 
 bullet.velocityX=speed;
}

function draw() {
  console.log(bullet);
  background(260,200,300);
 
 
 bullet.collide(wall)
 if(hasCollided(bullet,wall))
 {
bullet.velocityX=0;
var damage=0.5*0*0/(thickness *thickness *thickness)

if(damage>10)
{
wall.shapeColor=color(255,0,0)
}
if(damage<10)
{
wall.shapeColor=color(0,255,100)
}
 }




  drawSprites();
  }
function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false;
}