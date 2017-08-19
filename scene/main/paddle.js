//set paddle data
var Paddle = function(game){

	var img = game.imageByName('paddle');
	
	var o = {
		x:150,
		y:250,
		speed:10,
	}
	o.image = img.image;
	

	var paddle = o;
	
	o.move = function(x){
		if(x<0){
			x=0
		}
		if(x > 400 - o.image.width){
			x = 400 - o.image.width
		}
		o.x = x
	}
	
	o.moveLeft = function(){
		o.move(paddle.x - paddle.speed);
		
	}
	o.moveRight = function(){
		o.move(paddle.x + paddle.speed);
	}	
	
	return o;
}