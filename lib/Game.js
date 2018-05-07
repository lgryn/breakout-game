export default class {
  constructor(id, width, height) {
    this.canvas = document.createElement('canvas');
    this.canvas.id = id;
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext('2d');
    this.ball = { x: this.canvas.width / 2, y: this.canvas.height - 30 };
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawBall() {
    const dx = 2;
    const dy = -2;

    this.ctx.beginPath();
    this.ctx.arc(this.ball.x, this.ball.y, 10, 0, Math.PI * 2);
    this.ctx.fillStyle = '#0095DD';
    this.ctx.fill();
    this.ctx.closePath();

    this.ball.x += dx;
    this.ball.y += dy;
  }

  render(wrapperName) {
    this.clear();
    this.drawBall();

    document.getElementById(wrapperName).appendChild(this.canvas);
  }
}
