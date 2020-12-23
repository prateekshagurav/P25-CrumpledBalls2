
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,490,1000,20);
	paper = new Paper(50, 470, 10);
	dustbin = new Dustbin(700, height - 115)


	Engine.run(engine);

}


function draw() {
	
	background(0);
	paper.display();
	ground.display();
	dustbin.display();


}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 20, y: -15 })
		
	}
}



