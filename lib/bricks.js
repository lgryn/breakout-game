export default class {
  constructor(ctx, width, height, rows, columns, padding, offsetTop, offsetLeft) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.rows = rows;
    this.columns = columns;
    this.padding = padding;
    this.offsetTop = offsetTop;
    this.offsetLeft = offsetLeft;
    this.field = Array(this.columns).fill([]).map(() => Array(this.rows).fill({ x: 0, y: 0 }));
  }

  update() {

  }

  render() {
    this.field.forEach((column, cIndex) => {
      column.forEach((row, rIndex) => {
        const brickX = (cIndex * (this.width + this.padding)) + this.offsetLeft;
        const brickY = (rIndex * (this.height + this.padding)) + this.offsetTop;
        this.field[cIndex][rIndex].x = brickX;
        this.field[cIndex][rIndex].y = brickY;
        this.ctx.beginPath();
        this.ctx.rect(brickX, brickY, this.width, this.height);
        this.ctx.fillStyle = '#0095DD';
        this.ctx.fill();
        this.ctx.closePath();
      });
    });
  }
}
