const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup(){
    createCanvas(8000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300, 200, 100, 50);
  
    var options = {
        restitution : 0.8
    }
   
    object = Bodies.rectangle(250, 100, 50, 50, options);
    World.add(world, object);
}

function draw(){
    background("lightcyan");
    Engine.update(engine);

   rectMode(CENTER);
   rect(this.object.position.x, this.object.position.y, 50, 50);



    box1.display();

}