import Ball from './ball';

export default class {
  constructor(id, width, height) {
    this.canvas = document.createElement('canvas');
    this.canvas.id = id;
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style = 'border: 1px solid black;';
    this.ctx = this.canvas.getContext('2d');
    this.ball = new Ball(this.ctx, this.canvas.width / 2, this.canvas.height - 30, 10);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  render(wrapperName) {
    this.clear();
    this.ball.render();
    this.ball.update();

    document.getElementById(wrapperName).appendChild(this.canvas);
  }
}
