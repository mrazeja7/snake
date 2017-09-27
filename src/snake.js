<<<<<<< HEAD
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
=======
// Snake.js

/** @class Snake
  * The snake in a Snake game
  */
export default class Snake {
  constructor(x, y, segments) {
    this.body = [];
    for(var i = 0; i < segments; i++) {
      this.body.push({
        x: x - i,
        y: y
      });
    }
    this.direction = 'right';
  }
  update() {
    // Did we smack a wall?
    // Did we eat ourselves?
    // Did we eat food?
    // Do we need to grow?
  }
  /** @function render
    * Render the snake
    */
  render(ctx) {
    this.body.forEach(function(segment) {
      ctx.save();
      ctx.fillStyle = 'green';
      ctx.fillRect(segment.x,segment.y,1,1);
      ctx.restore();
    })
  }
}
>>>>>>> a9ff6ebb44d73637fc9b5d25f574bcce7d7227ab
