var log = console.log.bind(console);
			
// load image
var imageFromPath = function(path){
	var img = new Image();
	img.src = 'img/'+ path + '/';
	return img;
}




//未碰撞返回fale，碰撞返回true
function collision(obj1,obj2){

	if( obj1.x + obj1.image.width < obj2.x || obj1.x > obj2.x + obj2.image.width || obj1.y + obj1.image.height < obj2.y || obj1.y > obj2.y + obj2.image.height ){
		return false;
	}else{
		return true;
	}
}