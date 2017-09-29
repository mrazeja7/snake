export default class Food
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}
	update(position)
	{
		/*if (this.x == this.position.x && this.y == this.position.y)
		{
			//food has been eaten
			return;
		}*/
	}
	render(ctx)
	{
		ctx.save();
		ctx.fillStyle = 'red';
		ctx.fillRect(this.x, this.y, 1, 1);
		ctx.restore();
	}

}