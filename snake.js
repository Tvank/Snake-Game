/*eslint-env es6*/
const east = 0;
const north = 1;
const west = 2;
const south = 3;
var startBtn = document.getElementById("start");
var leftBtn = document.getElementById("left");
var rBtn = document.getElementById("right");
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
ctx.fillStyle = "blue";
var start = false;
var x = 0;
var y = 100;
var dir = west;
var lookx = 0;
var looky = 0;


var timer = setInterval(function(){
	
	if(start){
		ctx.rect(x,y,5,5);
		ctx.fill();
		dirInc()
		let imageData = ctx.getImageData(x+lookx,y+looky,5,5);
		//console.log(imageData.data[0],imageData.data[1],imageData.data[2]);
		
		if(imageData.data[0] == 0 && imageData.data[1] == 0 && imageData.data[2] == 255){
			start = false;
			clearInterval(timer);
		}
		
		if(x == 0||x == 500 || y == 500 || y == 0){
		clearInterval(timer);
		}
	}	
	},50);

startBtn.onclick = function (){
	startBtn.value ="Stop";
	if(start){
		start = false;
		startBtn.value = "Start";
	}else{
		start = true;
		startBtn.value = "Stop";
	}
}

function dirInc(){
	switch(dir){
		case east:
			x--;
			lookx = 0;
			break;
		case north:
			y--;
			looky = 0;
			break;
		case west:
			x++;
			lookx = 4;
			break;
		case south:
			y++;
			looky = 4;
			break;
	}
}
leftBtn.onclick = function(){
	dir--;
	if(dir == -1){
		dir = south;
	}
}

rBtn.onclick = function(){
	dir++;
	if(dir == 4){
		dir = east;
	}
}