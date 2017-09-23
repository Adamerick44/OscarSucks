Character.prototype.update = function() {
	this.loc.add(this.vel);	
	this.draw();
}

Character.prototype.draw = function() {
	fill(200);
	rect(this.loc.x,this.loc.y,this.sideLength,this.sideLength);
}