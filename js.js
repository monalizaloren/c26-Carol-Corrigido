//Abaixo você esta criando uma bola com as propriedades de;
// eixo X: 100
// eixo Y: 200
// raio : 20
ball = Bodies.circle(100,200,20,ball_options);
World.add(World,ball); 

con = Matter.Constraint.create({

pointA:{x:200,y:20},
bodyB:ball,

length:100,  

stiffness:0.9
});

World.add(World,con);
rectMode(CENTER);
ellipseMode(RADIUS);

function draw(){
   background(51);
   Engine.update(engine); 
    
  
}