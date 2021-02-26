const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer_1;
var ground_1, rubber_1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	hammer_1 = new Hammer(350, 200, 100, 20);
	ground_1 = new Ground(400, 700, 810, 20);
	rubber_1 = new Rubber(400, 400, 20);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer_1.display();
  ground_1.display();
  rubber_1.display();
  drawSprites();
 
}
