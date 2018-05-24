import Ball from './ball';
import Paddle from './paddle';

export default class {
  constructor(id, width, height) {
    this.canvas = document.createElement('canvas');
    this.canvas.id = id;
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style = 'border: 1px solid black;';
    this.ctx = this.canvas.getContext('2d');
    this.ball = new Ball(this.ctx, this.canvas.width / 2, this.canvas.height - 30, 10);
    this.paddle = new Paddle(this.ctx, this.canvas, 75, 10);
    this.loop = null;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  render(wrapperName) {
    this.clear();
    this.ball.render();
    this.paddle.render();

    document.getElementById(wrapperName).appendChild(this.canvas);
  }

  update() {
    if (this.ball.x + this.ball.stepX > this.canvas.width - this.ball.radius ||
      this.ball.x + this.ball.stepX < this.ball.radius) {
      this.ball.reverseX = true;
    }

    if (this.ball.y + this.ball.stepY < this.ball.radius) {
      this.ball.reverseY = true;
    } else if (this.ball.y + this.ball.stepY > this.canvas.height - this.ball.radius) {
      if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {
        this.ball.reverseY = true;
      } else {
        window.cancelAnimationFrame(this.loop);
        if (confirm('GAME OVER! Start new game?')) {
          document.location.reload();
        }
      }
    }

    this.ball.update();
    this.paddle.update();
  }

  init() {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowLeft') {
        this.paddle.moveLeft = true;
      } else if (e.code === 'ArrowRight') {
        this.paddle.moveRight = true;
      }
    }, false);

    document.addEventListener('keyup', (e) => {
      if (e.code === 'ArrowLeft') {
        this.paddle.moveLeft = false;
      } else if (e.code === 'ArrowRight') {
        this.paddle.moveRight = false;
      }
    }, false);
  }
}
