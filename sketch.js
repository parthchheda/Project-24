
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

	//Create the Bodies Here.
	ball1 = new Ball(100,600,25);
	ground = new Ground(400,680,800,20)
	box1 = new Box(600,640,200,20)
	box2 = new Box(500,600,20,100)
	box3 = new Box(700,600,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display()
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:60,y:-175})
	}
}


