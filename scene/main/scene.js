var Scene = function(game){
	var s = {
		game:game,
	}
	
	//初始化
	var paddle = Paddle(game);
	
	var ball = Ball(game);
	
	//初始化加载砖块
	blocks = loadLevel(game,1);
	
	var score = 0;
	var lives = 3;

	//注册事件
	game.registerAction('ArrowLeft',function(){
		paddle.moveLeft();
		ball.fire();
	})
	
	game.registerAction('ArrowRight',function(){
		paddle.moveRight();
		ball.fire();
	})
	
	
	
	s.draw = function(){
		
		game.context.clearRect(0,0,game.canvas.width,game.canvas.height);
		
		game.context.fillStyle = 'black';
		game.context.fillRect(0,0,400,300)
		
		game.drawImage(paddle);
		game.drawImage(ball);
		
		//draw blocks
		for(var i=0;i<blocks.length;i++){
			var block = blocks[i];
			if(block.alive){
				game.drawImage(block);
			}
		}
		
		//draw labels
		game.context.beginPath();
		game.context.fillStyle = 'red';
		game.context.font = '14px impact';
		game.context.fillText('分数：'+ score,10,270);
		
		game.context.fillText('生命值：'+ lives,100,270);
		game.context.closePath();
	}
	
	s.update = function(){
		if(window.paused){
			return;
		}
		
		if(ball.y + ball.image.height >= game.canvas.height  ){
			
			lives --;
			log(lives);
			game.draw();
			if(lives == 0){//跳转到游戏结束的场景
				var end = SceneEnd.new(game);
				game.replaceScene(end);
				return;
			}
			
		}
		ball.move();
		//ball和paddle碰撞检测 反弹
		if(collision(ball,paddle)){
			//这里调用一个ball.反弹()来实现
			log('ball 相撞')
			ball.反弹(paddle);
		}
		
		//判断ball和blocks相撞
		for(var i=0;i<blocks.length;i++){
			var block = blocks[i];
			if(block.collide(ball)){
				log('block 相撞')
				block.kill();
				ball.反弹(block);
				score += 100;
			}
		}
	}
	
	//拖动球
	var enabledrag = false;
	game.canvas.addEventListener('mousedown',function(event){
		var disx = event.clientX -ball.x;
		var disy = event.clientY - ball.y;
		
		var x = event.clientX;
		var y = event.clientY;

//			if(ball.image.hasPoint(x,y)){
			enabledrag = true;
//			}
		

		game.canvas.addEventListener('mousemove',function(event){
			if(enabledrag){
				ball.x = event.clientX - disx
				ball.y = event.clientY - disy
			}
		})

		game.canvas.addEventListener('mouseup',function(){
			enabledrag = false;
		})
	})
	
	
	return s;
}
