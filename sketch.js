const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var con;
var con;
var ball;
var button;

function setup() {

  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  button = createImg('up.png');
  button.position(20,30);
  
  button.size(50,50);
  
  button.mouseClicked(vForce);

//Adicione esse código:

////Adicione esse código:

//ball = Bodies.circle(100,200,20,ball_options);
//World.add(world,ball);

con = Matter.Constraint.create({
  //pointA:{x:200,y:20},
  //bodyB:ball,
  //length:100,
  //stiffness:0.1
//});
//World.add(world,con);

  

  //rectMode(CENTER);
  //ellipseMode(RADIUS);
}
 function draw(){

  background(51);
  Engine.update(engine); 

 ellipse(ball.position.x,ball.position.y,20);
 strokeWeight(2);
 stroke(255);
 line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
 Engine.update(engine); 

 } 
  
function vForce(){

Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});

}
