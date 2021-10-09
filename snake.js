function Snake() {
	this.x = 0
	this.y = 0;
	this.speedX = 0
	this.speedY = 0
	this.arr = []
	this.total = 0
	this.tail = []


	this.dir = function(a, b) {
		if( a === b){
			this.speedX = a;
			this.speedY = b;
		}
		else if((this.speedX === -(a)) && (b == 0)){
			this.speedY = b;
		}
		else if((this.speedY === -(b)) && (a == 0)){
			this.speedX = a;
		}
		else{
			this.speedX = a;
			this.speedY = b;
		}
	}


	this.death = function(){
		for(var k = 0; k < this.tail.length; k++){
			var pos = this.tail[k];
			var d = dist(this.x, this.y, pos.x, pos.y);
			if(d<1){
				this.total = 0;
				this.tail = [];
				this.speedX = 0;
				this.speedY = 0;
				this.x = 0;
				this.y = 0;
				// this.total = i+1;
				// for(var q = 0; q<this.total; q++){
				// 	this.arr.push(this.tail[q])
				// }
				// this.tail = this.arr;
			}
		}
	}


	this.eat = function(food) {
		var d = dist(this.x, this.y, food.x, food.y);
		if(d < 10){
			this.total++ ;
			return true;
		}
		return false;
	}

	this.move = function(){

		if(this.total === this.tail.length){
			for(var i = 0; i < this.tail.length-1; i++){
				this.tail[i] = this.tail[i+1];
			}
		}
		this.tail[this.total-1] = createVector(this.x, this.y);

		this.x = this.x + this.speedX*s;
		this.y = this.y + this.speedY*s;

		this.x = constrain(this.x, 0, width-s);
		this.y = constrain(this.y, 0, height-s);
	}


	this.show = function(){
		// fill(154,205,50);
		fill(0);
		for(var i = 0; i<this.tail.length; i++){
			rect(this.tail[i].x, this.tail[i].y, s, s, 5);
		}
		rect(this.x, this.y, s, s, 5);
	}

}