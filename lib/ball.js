export default class {
  constructor(ctx, x, y, radius, stepX = 2, stepY = -2) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.stepX = stepX;
    this.stepY = stepY;
    this.reverseX = false;
    this.reverseY = false;
  }

  update() {
    this.x += this.reverseX ? -this.stepX : this.stepX;
    this.y += this.reverseY ? -this.stepY : this.stepY;
  }

  render() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    this.ctx.fillStyle = '#0095DD';
    this.ctx.fill();
    this.ctx.closePath();
  }
}
