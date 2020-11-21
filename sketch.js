
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyimg,tree,treeimg,ground

function preload() {

	boyimg = loadImage("boy.png")
	treeimg = loadImage("tree.png")
	
}

function setup() {

	createCanvas(800, 700);

	boy = createSprite(100, 550, 20, 20);
	boy.shapeColor = ("red")


	tree = createSprite(650, 550, 20, 20);
	tree.shapeColor = ("red")










	ground = createSprite(400,650, 800, 20);
	ground.shapeColor = ("brown")



	engine = Engine.create();
	world = engine.world;




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  boy.display()
  ground.display()
  
  
  drawSprites();
 
}