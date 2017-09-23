let character;

function setup() {
	createCanvas(400,400);
	character = new Character();
}

function draw() {
	background(0);

	character.update();
}

function keyPressed() {
	if(keyCode == 87){
		//w key
		let f = createVector(0,-1.5);
		character.vel = f;
	}

	if(keyCode == 65){
		//a key
		let f = createVector(-1.5,0);
		character.vel = f;
	}

	if(keyCode == 83){
		//s key
		let f = createVector(0,1.5);
		character.vel = f;
	}

	if(keyCode == 68){
		//d key
		let f = createVector(1.5,0);
		character.vel = f;
	}
	if(keyCode == 88){
		//x key
		let f = createVector(0,0);
		character.vel = f;
	}

}