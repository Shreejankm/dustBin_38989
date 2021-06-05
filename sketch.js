
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var waste;
var dustbinObj;
var paperObject;
var b1,b2

function preload(){
	backgroundImage = loadImage("natureBackground.jpg")
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-65, width,10);
	groundSprite.shapeColor=color("brown");

	ground = Bodies.rectangle(width/2, 496, width, 10 , {isStatic:true} );
	World.add(world, ground);

	b1 = Bodies.rectangle(width/1.17,420,20,180, {isStatic:true} );
	World.add(world,b1);

	b2 = Bodies.rectangle(width/1.055,420,30,180, {isStatic:true} );
	World.add(world,b2);

	waste = new Paper(width/9,250);

	dustbinObj = new DustBin(width/1.11,420,140,180);

	launcher = new Launcher(waste.body,{x:width/9, y:250});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  Engine.update(engine);

  waste.display();
  dustbinObj.display();
  launcher.display();

  drawSprites();
 
}

function mouseDragged(){
    Body.setPosition(waste.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}
