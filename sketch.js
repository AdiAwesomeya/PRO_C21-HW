const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ballOptions
var groundObj
var rightSide
var leftSide
var engine, world

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);
	var ballOptions={
		isStatic:false,
		restitution:0.3,
		friction: 0,
		density:1.2
	}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(300, 350, 25, ballOptions)
	World.add(world, ball)
	groundObj = new Ground(600, 800, 1200, 20);
	leftSide = new Ground(900, 780, 20, 120);
	rightSide = new Ground(1100, 780, 20, 120);
	Engine.run(engine);
  
}


function draw() {
Engine.update(engine)
  rectMode(CENTER);
  background(0);
  groundObj.display()
  leftSide.display()
  rightSide.display()
  ellipse(ball.position.x, ball.position.y, 50)

 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
	Matter.Body.applyForce(ball,{x:0, y:0}, {x: 20, y:-25})
	}
}



