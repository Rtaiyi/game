class GuaGame {
	constructor(images,runcallback){
		this.images = images;
		this.runcallback = runcallback;
		this.scene = null;
		this.actions = {};
		this.keydowns = {};
		this.fps = 60;
		
		this.canvas = document.getElementById('id-canvas');
		this.context = this.canvas.getContext('2d');
		
		//events
		var self = this;
		window.addEventListener('keydown',event => {
			this.keydowns[event.key] = true;
		})
		window.addEventListener('keyup',function(event){
			self.keydowns[event.key] = false;
		})
		
		this.init();
	}
	
	static instance(...args){
		this.i = this.i ||new this(...args);
		return this.i;
	}
	
	drawImage(img){
		this.context.drawImage(img.image,img.x,img.y);
	}
	
	update(){
		this.scene.update();
	}
	draw(){
		this.scene.draw();
	}
	
	registerAction(key,callback){
		this.actions[key] = callback;
	}
	
	runLoop(){
		var g = this;
		//events
		var actions = Object.keys(g.actions);
		for(var i=0;i<actions.length;i++){
			var key = actions[i];
			if(g.keydowns[key]){
				//如果按键被按下，调用注册的actions
				g.actions[key]();
			}
		}
		
		//update
		g.update();
		
		//clear
		g.context.clearRect(0,0,g.canvas.width,g.canvas.height);
		
		//draw
		g.draw();
		
		setTimeout(function(){
			g.runLoop();
		},1000/g.fps)
	}
	
	init(){
		var g = this;
		var loads = [];
		//预先载入所有图片
		var names = Object.keys(g.images);
		for(var i=0;i<names.length;i++){
			let name = names[i];
			var path = g.images[name];
			let img = new Image();
			img.src = path;
			img.onload = function(){
				//存入g.images中
				g.images[name] = img;
				//所有图片载入成功之后,调用run
				loads.push(1);
				if(loads.length == names.length){				
					g.run();
				}
				
			}
		}
	}
	
	runwithScene(scene){
		var g = this;
		g.scene = scene;
		//开始运行程序
		setTimeout(function(){
			g.runLoop();
		},1000/g.fps)
	}
	
	
	run(scene){
		this.runcallback(this);
		
	}
	
	replaceScene(scene){
		this.scene = scene
	}
	
	
	imageByName(name){
		var g = this;
		var img = g.images[name];
		var image = {
			w:img.width,
			h:img.height,
			image:img,
		}
		
		return image;
	}
	
}
