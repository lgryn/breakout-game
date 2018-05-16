export default class {
  constructor(ctx, canvas, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.x = (canvas.width - this.width) / 2;
    this.y = canvas.height - this.height;
    this.canvas = canvas;
  }

  update() {

  }

  render() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = '#0095DD';
    this.ctx.fill();
    this.ctx.closePath();
  }
}
