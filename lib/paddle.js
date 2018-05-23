export default class {
  constructor(ctx, canvas, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.x = (canvas.width - this.width) / 2;
    this.y = canvas.height - this.height;
    this.canvas = canvas;
    this.moveRight = false;
    this.moveLeft = false;
  }

  update() {
    if (this.moveRight && this.x < this.canvas.width - this.width) {
      this.x += 7;
    } else if (this.moveLeft && this.x > 0) {
      this.x -= 7;
    }
  }

  render() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = '#0095DD';
    this.ctx.fill();
    this.ctx.closePath();
  }
}
