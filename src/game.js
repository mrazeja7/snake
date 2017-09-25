// game.js

import Snake from './snake';

class Game
{
  constructor()
  {
    this.snake = new Snake();
    this.food = [];
    this.canvas = document.createElement('canvas');
    this.canvas.width = 100;
    this.canvas.height = 100;
    document.body.appendChild(canvas);
    this.context = canvas.getContext('2d');
  }
  render()
  {
    this.snake.update();
  }
  update()
  {
    this.snake.render(this.context);
  }
}