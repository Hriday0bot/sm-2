var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

var box1, box2, box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-7, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var pack_options = {
	restitution:0.4, 
	isStatic:true
		
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 ,pack_options);
	World.add(world, packageBody);
	

var ground_options = {
 isStatic:true
}

	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options);
 	World.add(world, ground);


	Engine.run(engine);

	box1 = new Box(280,655,20, 100);
	box2 = new Box(390,680,200, 20);
	box3 = new Box(500,655,20, 100);
	

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box1.display();
  box2.display();
  box3.display();


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody, false)
    
  }
}