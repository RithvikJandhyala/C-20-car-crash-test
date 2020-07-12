var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  wall = createSprite(1330,200,100,400); 
  car.velocityX = speed;
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(200);
  if(wall.x-car.x  < (car.width + wall.width) /2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation<=180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation<=100){
      car.shapeColor = color(0,255,0);
    }
  } 
  drawSprites();
  //Text(speed,750,350);
  //Text(weight,800,350);
  //Text(deformation,850,350);
}