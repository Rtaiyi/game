class SceneTitle extends GuaScene{
	constructor(game){
		super(game);
		game.registerAction('k',function(){
			var s = Scene(game);
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
		var w = this.game.context.measureText('按K开始游戏').width;
		this.game.context.fillText('按K开始游戏',(this.game.canvas.width - w)/2,(this.game.canvas.height - 24)/2);
		this.game.context.closePath();
		
		
	}
	
}
