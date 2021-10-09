var snake;
var s = 20;
var score = 0;
var arr = []
var food;
var foods = 5
var pause = 0;

function setup(){
	createCanvas(20*displayWidth/21, 20*windowHeight/21);
	snake = new Snake();
	frameRate(10);
	fLocation();
}


function fLocation() {
	var cols = floor(width/s);
	var rows = floor(height/s);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(s);
}

function draw(){
	background(200);
	snake.death();
	snake.move();
	snake.show();

	if(snake.eat(food)){
		score = score + 1;
		fLocation();
	}
	
	// fill(200);
	noStroke();
	fill(255,105,180);
	rect(food.x, food.y, s,s,5);
}





function keyPressed(){
	if(keyCode === UP_ARROW){
		snake.dir(0,-1);
	}else if(keyCode === DOWN_ARROW){
		snake.dir(0,1);
	}else if(keyCode === RIGHT_ARROW){
		snake.dir(1,0);
	}else if(keyCode === LEFT_ARROW){
		snake.dir(-1,0);
	}
	else if(key === ' '){
		if(pause == 1){
			pause = 0;
			loop();
		} else if (pause == 0){
			pause = 1;
			noLoop();
		}
	}

}