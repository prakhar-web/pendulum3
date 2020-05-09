const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, base, string;


function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    var baseoptions = {
        isStatic : true
    }
   base = Bodies.rectangle(200,100,200,20,baseoptions);

   World.add(world, base);
   var balloptions = {
       restitution : 1.0
   }
   ball = Bodies.circle(200,200,40,balloptions);
   World.add(world,ball);

   var options = {
       bodyA : ball,
       bodyB : base,
       stiffness : 0.03,
       length : 200
   }

   string = Constraint.create(options);
   World.add(world,string);
}
    
function draw(){
    background("white");
    Engine.update(engine);
    rectMode(CENTER);
    rect(base.position.x,base.position.y,200,20);
    ellipse(ball.position.x,ball.position.y,40);
    line(base.position.x,base.position.y,ball.position.x,ball.position.y);
    if(keyCode === 32 ) {
        ball.position.x = mouseX;
        ball.position.y = mouseY;
    }

}

