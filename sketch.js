
//Namespacing means making the command shorter
// const means constant value
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;
var ground, ball;

function setup() {
  createCanvas(400,400);

  engine  = Engine.create();
  world  = engine.world;
  
  var ground_options = {
   isStatic:true
  }
 
  ground = Bodies.rectangle(200,390,200,20, ground_options);
  World.add(world,ground);

  var ball_options = {
    restitution:1.0
  }
ball = Bodies.circle(200,100,20, ball_options);
World.add(world, ball);
   
}

function draw() {
  background(0);  
  //Without this command the block will not be able to move because you have to mention it in the funtion draw
  Engine.update(engine);
 
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}







