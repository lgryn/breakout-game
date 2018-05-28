export default class {
  constructor(ctx, current = 0) {
    this.ctx = ctx;
    this.current = current;
  }

  render() {
    this.ctx.font = '16px Arial';
    this.ctx.fillStyle = '#0095DD';
    this.ctx.fillText(`Score: ${this.current}`, 8, 20);
  }

  add(val) {
    this.current += val;
  }
}
