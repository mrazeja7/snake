// game.js

import Snake from './snake';
import Food from './food';

/** @class Game
  * Represents a snake game
  */
export default class Game {
  constructor() {
    this.snake = new Snake(50, 50, 3);
    this.food = [];
    this.over = false;
    this.input = { direction: 'right'};
    // Create the back buffer canvas
    this.backBufferCanvas = document.createElement('canvas');
    this.backBufferCanvas.width = 100;
    this.backBufferCanvas.height = 100;
    this.backBufferContext = this.backBufferCanvas.getContext('2d');
    // create HTML UI elements
    var message = document.createElement('div');
    message.id = 'message';
    message.textContent = '';
    document.body.appendChild(message);
    // Create the screen buffer canvas
    this.screenBufferCanvas = document.createElement('canvas');
    this.screenBufferCanvas.width = 100;
    this.screenBufferCanvas.height = 100;
    document.body.appendChild(this.screenBufferCanvas);
    this.screenBufferContext = this.screenBufferCanvas.getContext('2d');
    // Bind class functions
    
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.loop = this.loop.bind(this);
    this.gameOver = this.gameOver.bind(this);
    // set up event handlers
    window.onkeydown = this.handleKeyDown.bind(this);
    // Start the game loop
    this.interval = setInterval(this.loop, 500);
  }  

  handleKeyDown(event)
  {
    //ArrowUp, ArrowDown, ArrowLeft, ArrowRight, WASD
    var key = event.key;
    switch(key)
    {
      case 'ArrowUp':
      case 'w':
        this.input.direction = 'up';
        console.log('up');
        break;
      case 'ArrowDown':
      case 's':
        this.input.direction = 'down';
        console.log('down');
        break;
      case 'ArrowLeft':
      case 'a':
        this.input.direction = 'left';
        console.log('left');
        break;
      case 'ArrowRight':
      case 'd':
        this.input.direction = 'right';
        console.log('right');
        break;
      default:
        return;
    }
  }

  /** @method update
    * Updates the game world.
    */
  update(input) {

    var position = this.snake.getPosition();
    if (position.x < 0 || position.x >= 100 ||
        position.y < 0 || position.y >= 100)
    {
      this.over = true;
      return;
    }

    //create food
    if (Math.random() < 0.1)
    this.food.push(new Food(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)));

    this.food.forEach((food) => {
      food.update();
    });
    this.over = this.snake.update(this.input);
  }
  /** @method render
    * Renders the game world
    */
  render() {
    this.backBufferContext.fillStyle = '#ccc';
    this.backBufferContext.fillRect(0, 0, 100, 100);
    this.food.forEach((food) => {
      food.render(this.backBufferContext);
    })
    this.snake.render(this.backBufferContext);
    this.screenBufferContext.drawImage(this.backBufferCanvas,0,0);

    if (this.over)
    {
      this.gameOver();
    }
  }

  gameOver()
  {
    var message = document.getElementById('message');
    message.innerText = 'Game Over';
  }
  loop() {
    this.update();
    this.render();
  }
}
