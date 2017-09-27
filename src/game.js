<<<<<<< HEAD
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
=======
// game.js

import Snake from './snake';

/** @class Game
  * Represents a snake game
  */
export default class Game {
  constructor() {
    this.snake = new Snake();
    this.food = [];
    // Create the canvas
    this.canvas = document.createElement('canvas');
    this.canvas.width = 100;
    this.canvas.height = 100;
    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext('2d');
  }
  update() {
    this.snake.update();
  }
  render() {
    this.snake.render(this.context);
  }
}
>>>>>>> a9ff6ebb44d73637fc9b5d25f574bcce7d7227ab
