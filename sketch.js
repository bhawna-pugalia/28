
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render
const Constraint=Matter.Constraint;

var tree,ground
var boy
var m1,m2,m3
var launcher;
function preload()
{
	boy=loadImage("a/boy.png")
	tree=loadImage("a/tree.png")
}

function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//	tree=new Tree(1050,340,580,500)
	ground=new Ground(width/2,590,width,30)
	stone=new Stone(150,435,30)
	m1=new Mango(1100,300,30)

	m2=new Mango(1170,130,30)

	m3=new Mango(1010,140,30)

	launcher=new Launcher(stone.body,{x:150,y:435})


	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1600,
			height:600,
			wireframes:false
			
		}
	});
	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  //tree.display()
  ground.display()
  imageMode(CENTER)
  image(boy,200,520,200,300)
  image(tree,1050,340,580,500)
  m1.display();
  m2.display()
  m3.display()
  stone.display()
  
  launcher.display()
 
  detectCollision(stone,m1);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	launcher.fly();
}
function detectCollision(lstone,lmango){
	mangobody=lmango.body.position;
	stonebody=lstone.body.position;

	var distance=dist(stonebody.x,stonebody.y,mangobody.x,mangobody.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}

}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:150,y:435})
		launcher.attach(stone.body)
	}
}


