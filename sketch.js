const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  ground = new Ground(240,780,480,20);

  
}

function draw() {
  background(0);  

  ground.display();

  if(frameCount % 60===0){
    particles.push(new Particle(random(width/2-10,width/2-10,10,10)))
  }

  for(var k = 0; k <=480; k=k+80){
    divisions.push(new Division (k, 800-divisionHeight/2, 10, divisionHeight));
  }
  drawSprites();
}

 