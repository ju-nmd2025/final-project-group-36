export default class MovingPlatform {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 80;
    this.h = 20;
    this.dir = 10;
  }

  draw() {
    push();
    fill("blue");
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  move() {
    this.x -= this.dir;
    if (this.x < 50) {
      this.dir = -5;
    } else if (this.x > 250) {
      this.dir = 5;
    }
  }
}
