var drawInterval;
var requestAnimFrame = window.requestAnimationFrame || 
	                        window.webkitRequestAnimationFrame;
var canvas = {
	gameWidth : 800,
    gameHeight : 500,
	isPlaying : false,
	enemies : [],
	spawnAmount : 7,
	spawnRate : 2000,
	gameScore : {},	
	init : function() {
		this.drawbackground();
		this.spawnEnemy(this.spawnAmount);
		this.startPlaying();

		//this.gameScore = new Score();
		//this.gameScore.drawScoreCanvas();

		document.addEventListener('keydown',this.utilityOfKeydown,false)
		document.addEventListener('keyup',this.utilityOfKeyup,false);
	},
	getCanvasCtx : function(id) {
		return document.getElementById(id).getContext('2d');
	},
	recursiveDrawAllJets : function() {
		fighterJet.drawJetCanvas();
		this.drawAllEnemies();
		// if(this.isPlaying){ 						
		// 	 debugger;
		//	 requestAnimFrame(canvas.recursiveDrawAllJets());
		// 	 setInterval(this.recursiveDrawAllJets,10);
		// }
	},
	spawnEnemy : function(num){
		for(var i=0; i < num; i++){
			this.enemies[this.enemies.length] = new Enemy();
		}
	},
	drawAllEnemies : function(){
		this.clear(this.enemies[0].ctx);
		for(var i=0; i < this.enemies.length; i++){
			this.enemies[i].drawEnemyCanvas();
		}
	},
	startPlaying : function() {
		//this.isPlaying = true;
		var that = this;
		this.stopPlaying();
	    drawInterval = setInterval( function(){  that.recursiveDrawAllJets.call(that); },10);	
		// this.recursiveDrawAllJets();
	},
	stopPlaying : function() {
		// this.isPlaying = false;
		clearInterval(drawInterval);
	},
	draw : function(ctx,cusOptions) {
			var Options = { 
							srcX : 0,
							srcY : 0,
							width : 100,
							height : 40,
							drawX : 0,
							drawY : 0,
							drawWidth : 100,
							drawHeight : 40
						  };
			
		    var settings = $.extend( {}, Options, cusOptions );

			ctx.drawImage(imageSprite,settings.srcX, settings.srcY, settings.width, settings.height, settings.drawX,settings.drawY,settings.drawWidth,settings.drawHeight);
	},
	clear : function(ctx) {
		ctx.clearRect(0,0,800,500);
	},
	drawbackground : function() {
		var ctxBg = this.getCanvasCtx('canvasBg');
		var bgOptions = {
							width : this.gameWidth,
							height : this.gameHeight,
							drawWidth : this.gameWidth,
							drawHeight : this.gameHeight
						};

		this.draw(ctxBg,bgOptions);	
	},
	utilityOfKeyup : function(e) {
		e.preventDefault();

		keyId = e.keyCode ? e.keyCode : e.which;

		if( keyId === 38 || keyId === 87) fighterJet.stear.up = false; // w
		if( keyId === 39 || keyId === 68) fighterJet.stear.forward = false; // D
		if( keyId === 40 || keyId === 83) fighterJet.stear.down = false; // Z
		if( keyId === 37 || keyId === 65) fighterJet.stear.backword = false; // A
		if( keyId === 32) fighterJet.jetWarOptions.fireBtn = false; // Spacebar
	},
	utilityOfKeydown : function(e) {
		e.preventDefault();

		keyId = e.keyCode ? e.keyCode : e.which;

		if( keyId === 38 || keyId === 87) fighterJet.stear.up = true; // w
		if( keyId === 39 || keyId === 68) fighterJet.stear.forward = true; // D
		if( keyId === 40 || keyId === 83) fighterJet.stear.down = true; // Z
		if( keyId === 37 || keyId === 65) fighterJet.stear.backword = true; // A
		if( keyId === 32) fighterJet.jetWarOptions.fireBtn = true; // Spacebar
	}
};


function Jet () {
	this.ctx = canvas.getCanvasCtx('canvasJet'),

	this.options = { 
		srcY : 500,
		drawX : 200,
		drawY : 300
	};

	this.stear = {
		up : false,
		forward : false,
		down : false,
		backword : false
	};

	this.jetWarOptions = {
		bullets : [],
		currentBullet : 0,
		fireBtn : false,
		isShooting : false
	}

	for( var i = 0; i <= 20; i++ ){
		this.jetWarOptions.bullets[ this.jetWarOptions.bullets.length ] = new Bullet();
	}

	this.score = 0;
	this.speed = 2;
}

Jet.prototype.drawJetCanvas = function() {
	canvas.clear( this.ctx );
	this.jetDirection();
	this.checkShooting();
	this.drawAllBullets();
	canvas.draw( this.ctx, this.options );			
};

Jet.prototype.checkShooting = function(){
	if( this.jetWarOptions.fireBtn && !this.jetWarOptions.isShooting ){
		this.jetWarOptions.isShooting = true;
		this.jetWarOptions.bullets[this.jetWarOptions.currentBullet++].fire(this.options.drawX + 100, this.options.drawY + 30);	
		if( this.jetWarOptions.currentBullet >= this.jetWarOptions.bullets.length ) {
			this.jetWarOptions.currentBullet = 0;	
		}
	}else if( !this.jetWarOptions.fireBtn ){
		this.jetWarOptions.isShooting = false;
	}
};

Jet.prototype.drawAllBullets = function(){
	for(var i = 0; i < this.jetWarOptions.bullets.length; i++){
		if( this.jetWarOptions.bullets[i].options.drawX >= 0 ) this.jetWarOptions.bullets[i].drawBulletCanvas();
		if( this.jetWarOptions.bullets[i].options.explosion.hasHit) this.jetWarOptions.bullets[i].options.explosion.drawExplosionCanvas();
	}
}

Jet.prototype.jetDirection = function() {
	if(this.stear.up) this.options.drawY -= this.speed;
	if(this.stear.forward) this.options.drawX += this.speed;
	if(this.stear.down) this.options.drawY += this.speed;
	if(this.stear.backword) this.options.drawX -= this.speed; 
}

Jet.prototype.updateScore = function(points){
	this.score += points; 
	canvas.gameScore.update();
}



function Bullet () {
	this.ctx = canvas.getCanvasCtx('canvasJet'),

	this.options = { 
		srcX : 100,
		srcY : 500,		
		width : 10,
		height : 10,
		drawX : -20,
		drawY : 20,
		drawWidth : 5,
		drawHeight : 5,
		explosion : new Explosion()
	};

	this.speed = 3;
}

Bullet.prototype.drawBulletCanvas = function() {
	this.options.drawX += this.speed;
	canvas.draw( this.ctx, this.options );	
	this.checkHitEnemy();
	this.recycleBullet();
};

Bullet.prototype.recycleBullet = function(){
	if( this.options.drawX > canvas.gameWidth || this.options.explosion.hasHit ) this.options.drawX = -20;
}

Bullet.prototype.fire = function(drawX,drawY){
	this.options.drawX = drawX;
	this.options.drawY = drawY;
}

Bullet.prototype.checkHitEnemy = function () {
	for (var i = 0; i < canvas.enemies.length; i++) {
		if ( this.options.drawX > canvas.enemies[i].enemyOptions.drawX && 
			this.options.drawX < canvas.enemies[i].enemyOptions.drawX + 100 && 
			this.options.drawY > canvas.enemies[i].enemyOptions.drawY + 10 &&
			this.options.drawY < canvas.enemies[i].enemyOptions.drawY + 30 ) {
			
			// debugger;
			this.options.explosion.options.drawX = canvas.enemies[i].enemyOptions.drawX + ( this.options.explosion.options.width / 2 );
			this.options.explosion.options.drawY = canvas.enemies[i].enemyOptions.drawY - ( this.options.explosion.options.height / 3 );
			this.options.explosion.hasHit = true;
			this.recycleBullet();
			canvas.enemies[i].recycleEnemy();
		}
	};
};

function Enemy () {
	this.ctx = canvas.getCanvasCtx('canvasEnemy');
	this.enemyOptions = { 
							srcY : 540,
							drawX : Math.floor( Math.random() * 1000 ) +  canvas.gameWidth,
							drawY : Math.floor( Math.random() * 360 )
						};    

	this.rewardPoints = 5;
	
	this.speed = 2;
}

Enemy.prototype.drawEnemyCanvas = function() {	
	this.enemyOptions.drawX -= this.speed;
	canvas.draw(this.ctx,this.enemyOptions);	
	this.escaped();	
};

Enemy.prototype.escaped = function(){
	if(this.enemyOptions.drawX  <= 0){
		this.recycleEnemy();
	}
};

Enemy.prototype.recycleEnemy = function(){
	this.enemyOptions.drawX = Math.floor( Math.random() * 1000 ) +  canvas.gameWidth;
	this.drawY = Math.floor( Math.random() * 360 );
}


function Explosion () {
	this.ctx = canvas.getCanvasCtx('canvasJet');

	this.options = { 
		srcX : 750,
		srcY : 500,		
		width : 50,
		height : 50,
		drawX : 0,
		drawY : 0,
		hasHit : false,
		currentFrame : 0,
		totalFrame : 30,
		drawWidth : 50,
		drawHeight : 50
	};

	this.speed = 3;
}

Explosion.prototype.drawExplosionCanvas = function() {
	if (this.options.currentFrame < this.options.totalFrame) {
		canvas.draw( this.ctx, this.options );	
		this.options.currentFrame++;
	} else{
		this.hasHit = false;
		this.currentFrame = 0;
	}
};

function Score(){
	this.ctx = canvas.getCanvasCtx('canvasScore');	

	this.options = {
						width : canvas.gameWidth,
						height : canvas.gameHeight,
						drawWidth : canvas.gameWidth,
						drawHeight : canvas.gameHeight
					};
}

Score.prototype.drawScoreCanvas = function() {	
	canvas.draw( this.ctx, this.options );	
	this.ctx.fillStyle = "hsla(0,0%,0%,0.5)";
	this.ctx.font = "bold 20px Arial";
};

Score.prototype.update = function(){
	canvas.clear(this.ctx);
	this.ctx.fillText("Score :" + fighterJet.score, 680, 30 );
};


var imageSprite = new Image();
imageSprite.src = 'images/sprite.png';
imageSprite.addEventListener('load', canvas.init.bind(canvas), false);

var fighterJet = new Jet();

