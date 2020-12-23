const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(400,400);

  myengine=Engine.create();
  //myworld is myengine's world
  myworld =myengine.world;


ground=new Ground(200,390,400,20);
box1=new Box(200,200,50,50);
box2=new Box(220,100,50,20);
ball=new Ball(100,100,20);


  
}

function draw() {
  background("pink"); 
  Engine.update(myengine);
  
ground.display();
box1.display();
box2.display();
  ball.display();
  //drawSprites();
}