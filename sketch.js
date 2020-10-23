const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//namespace
var engine,world,ground;
var ball;
function setup(){
createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var options = {
      isStatic : true
    }

    ground = Bodies.rectangle(200,390,400,20,options);
    World.add(world,ground);

    var ball_options={
       
      restitution:0.8

    }

  ball = Bodies.circle(100,100,10,ball_options);  
World.add(world,ball);
//console.log(ground);
console.log(ground.type);
console.log(ground.position.x);
console.log(ground.position.y);
}

function draw() {
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  
}