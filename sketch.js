const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    createCanvas(1200,600);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammerObj = new Hammer(10,100);
    stoneObj = new Stone(1000,550);
    rubberObj = new Rubber(800,550);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammerObj.display();
    stoneObj.display();
    rubberObj.display();
}