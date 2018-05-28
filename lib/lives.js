export default class {
  constructor(ctx, canvas, current = 0) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.current = current;
  }

  render() {
    this.ctx.font = '16px Arial';
    this.ctx.fillStyle = '#0095DD';
    this.ctx.fillText(`Lives: ${this.current}`, this.canvas.width - 65, 20);
  }

  remove(val) {
    this.current -= val;
  }
}
