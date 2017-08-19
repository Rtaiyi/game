class SceneEnd extends GuaScene{
	constructor(game){
		super(game);
		game.registerAction('r',function(){
			var s = SceneTitle.new(game);
			game.replaceScene(s);
		})
	}
	
	
	draw(){
		this.game.context.clearRect(0,0,this.game.canvas.width,this.game.canvas.height);
		
		this.game.context.fillStyle = 'black';
		this.game.context.fillRect(0,0,400,300);
		
		//draw text
		this.game.context.beginPath();
		this.game.context.font = '24px impact';
		this.game.context.textBaseline = 'top';
		this.game.context.fillStyle = 'red';
		var w = this.game.context.measureText('game over!按R返回开始').width;
		this.game.context.fillText('game over 按R返回开始',(this.game.canvas.width - w)/2,(this.game.canvas.height - 24)/2);
		this.game.context.closePath();
		
		
	}
	
}
