// constructor
function Snake()
{
	this.width = 15;
	this.height = 15;
	this.snake = [{x:7, y:7}, {x:6, y:7}, {x:5, y:7}];
	this.direction = 'right';
	this.food = [];
	this.cellSize = 20;
	// canvas and context
	var canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
	canvas.width = this.width * this.cellSize;
	canvas.height = this.height * this.cellSize;
	this.ctx = canvas.getContext('2d');

	window.onkeydown = this.handleKeyDown.bind(this);

	setInterval(() => this.loop(), 1000);
}

Snake.prototype.handleKeyDown = function(event)
{
	//ArrowUp, ArrowDown, ArrowLeft, ArrowRight, WASD
	var key = event.key;
	switch(key)
	{
		case 'ArrowUp':
		case 'w':
			this.direction = 'up';
			console.log('up');
			break;
		case 'ArrowDown':
		case 's':
			this.direction = 'down';
			console.log('down');
			break;
		case 'ArrowLeft':
		case 'a':
			this.direction = 'left';
			console.log('left');
			break;
		case 'ArrowRight':
		case 'd':
			this.direction = 'right';
			console.log('right');
			break;
		default:
			return;
	}
}

Snake.prototype.render = function()
{
	this.ctx.fillStyle = 'black';
	this.ctx.fillRect(0, 0, this.width * this.cellSize, this.height * this.cellSize);

	this.ctx.fillStyle = 'ivory';
	this.snake.forEach((segment) => {
		this.ctx.fillRect(segment.x * this.cellSize, segment.y * this.cellSize, this.cellSize, this.cellSize);
	});

	this.ctx.fillStyle = 'gold';
	this.food.forEach((food) => {
		this.ctx.fillRect(food.x * this.cellSize, food.y * this.cellSize, this.cellSize, this.cellSize);
	});
}

Snake.prototype.update = function()
{
	var x = this.snake[0].x;
	var y = this.snake[0].y;
	console.log("x: " + x + ", y: " + y + ", dir: " + this.direction);
	switch (this.direction)
	{
		case 'left':
			x--;
			break;
		case 'right':
			x++;
			break;
		case 'up':
			y--;
			break;
		case 'down':
			y++;
			break;
	}
	if (x < 0 || x > this.width || y < 0 || y > this.width)
		return;
	this.snake.pop();
	this.snake.unshift({x:x, y:y});
}

Snake.prototype.loop = function()
{
	this.update();
	this.render();
}

new Snake();