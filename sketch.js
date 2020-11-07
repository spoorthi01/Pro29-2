const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var stand;


function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

}

function draw() {
  background(255,255,255);
  
  stand = new Ground(335,155,20,50);

  drawSprites();
}