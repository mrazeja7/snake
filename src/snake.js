// snake.js

export default class Snake 
{
  constructor(x, y, segments)
  {
    this.body = [];
    for(var i = 0; i < segments; i++)
    {
      this.body.push({x:x-i, y:y});
    }
    this.direction = 'right';
  }

  checkForConsumption(food)
  {}

  update()
  {

  }
  render(ctx)
  {
    this.body.forEach(function(segment)
    {
      ctx.save();
      ctx.fillStyle = 'green';
      ctx.fillRect(segment.x, segment.y, 1, 1);
    });
    ctx.restore();

  }
}