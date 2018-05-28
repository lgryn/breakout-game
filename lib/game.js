import Ball from './ball';
import Paddle from './paddle';
import Bricks from './bricks';
import Score from './score';
import Lives from './lives';

export default class {
  constructor(id, width, height) {
    this.canvas = document.createElement('canvas');
    this.canvas.id = id;
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style = 'border: 1px solid black;';
    this.ctx = this.canvas.getContext('2d');
    this.ball = new Ball(this.ctx, this.canvas, this.canvas.width / 2, this.canvas.height - 30, 10);
    this.paddle = new Paddle(this.ctx, this.canvas, 75, 10);
    this.bricks = new Bricks(this.ctx, 75, 20, 3, 5, 10, 30, 30);
    this.score = new Score(this.ctx);
    this.lives = new Lives(this.ctx, this.canvas, 3);
    this.loop = null;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  render(wrapperName) {
    this.clear();
    this.ball.render();
    this.paddle.render();
    this.bricks.render();
    this.score.render();
    this.lives.render();

    document.getElementById(wrapperName).appendChild(this.canvas);
  }

  update() {
    // Ball vs scene collision
    if (this.ball.x + this.ball.stepX > this.canvas.width - this.ball.radius ||
      this.ball.x + this.ball.stepX < this.ball.radius) {
      this.ball.triggerX();
    }

    if (this.ball.y + this.ball.stepY < this.ball.radius) {
      this.ball.triggerY();
    } else if (this.ball.y + this.ball.stepY > this.canvas.height - this.ball.radius) {
      if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {
        this.ball.triggerY();
      } else {
        this.lives.remove(1);
        this.ball.reset();

        if (!this.lives.current) {
          this.stopLoop();
          if (confirm('GAME OVER! Start new game?')) {
            document.location.reload();
          }
        }
      }
    }

    // Ball vs bricks collision
    this.bricks.field.forEach((column, cIndex) => {
      column.forEach((row, rIndex) => {
        const brick = this.bricks.field[cIndex][rIndex];
        if (brick.visible === 1) {
          if (this.ball.x > brick.x && this.ball.x < brick.x + this.bricks.width &&
            this.ball.y > brick.y && this.ball.y < brick.y + this.bricks.height) {
            this.ball.triggerY();
            this.bricks.field[cIndex][rIndex].visible = 0;
            this.score.add(1);

            if (this.score.current === this.bricks.rows * this.bricks.columns) {
              this.stopLoop();
              if (confirm('You win! Start new game?')) {
                document.location.reload();
              }
            }
          }
        }
      });
    });

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

  stopLoop() {
    window.cancelAnimationFrame(this.loop);
  }
}
