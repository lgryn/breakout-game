export default class {
  constructor(ctx, canvas, x, y, radius, stepX = 2, stepY = -2) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.stepX = stepX;
    this.stepY = stepY;
    this.reverseY = false;
    this.reverseX = false;
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

  reset() {
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 30;
    this.reverseY = false;
    this.reverseX = false;
  }

  triggerX() {
    this.reverseX = !this.reverseX;
  }

  triggerY() {
    this.reverseY = !this.reverseY;
  }
}
