var bin1, bin2, bin3;
var ground, paper;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
 createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  bin1 = createSprite(700, 635, 100, 10)
  bin2 = createSprite(755, 590, 10, 100)
  bin3 = createSprite(655, 590, 10, 100)	
	ground= new Ground(400, 650, 800, 20);
  paper= new Paper(100, 590, 10, 10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();
}



