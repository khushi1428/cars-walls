var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,1600);
  speed=random(55,90);
  weight=random(400,1200)
 car= createSprite(50, 200, 50, 50);
 wall=createSprite(1200,200,60,height/2);
 car.velocityX=speed;
}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x<(wall.width+car.width)/2)
  {
    car.velocityX=0;
    var deformation = 0.5*weight*speed*speed/22500
    if(deformation>180)
    {
      car.shapeColor(255,0,0);
    }
if(deformation<180&&deformation>100)
{
  car.shapeColor(230,230,0);
}
if(deformation<100)
{
  car.shapeColor(0,255,0)
}
  }
  drawSprites();
}