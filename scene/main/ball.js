//子弹
var Ball = function(game){

	
	var img = game.imageByName('ball');
	
	var o = {
		x:180,
		y:240,
		speedX:5,
		speedY:5,
		fired:false,
	}
	o.image = img.image;
	
	o.fire= function(){
		o.fired = true;
	}
	o.move = function(){ //边界碰撞检测
		if(o.fired){
			if(o.x < 0 || o.x >400 - o.image.width){
				o.speedX = - o.speedX;
			}
			if(o.y < 0 || o.y >300 - o.image.height){
				o.speedY = -o.speedY;
			}
			
			//move
			o.x += o.speedX;
			o.y -= o.speedY;
		}
	}
	
	o.反弹 = function(obj){
//		if((obj.x + obj.image.width == o.x ||  o.x + o.image.width == obj.x) && o.y >= obj.y && o.y <= obj.y + obj.image.height){
//			o.speedX *= -1;
//		}else if( (obj.y + obj.image.height == o.y || o.y + o.image.height == obj.y) && o.x >= obj.x && o.x <= obj.x + obj.image.width){
			o.speedY *= -1;
//		}
		
		
	}
	
	o.image.hasPoint = function(x,y){
		var xIn = x >= o.x && x < (o.x + o.image.width);
		var yIn = y >= o.y && y > (o.y + o.image.height);
		
		return xIn && yIn;
	}
	
	
	
	return o;
}